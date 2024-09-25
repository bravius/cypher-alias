import { CharStreams, CommonTokenStream, ErrorListener, ParseTreeVisitor, ParserRuleContext, RecognitionException, Recognizer, TerminalNode, Token } from 'antlr4';
import CypherLexer from './parser/CypherLexer';
import CypherParser, { OC_ReturnContext } from './parser/CypherParser';
import CypherVisitor from './parser/CypherVisitor';

const visit = (ctx: ParserRuleContext, visitor: ParseTreeVisitor<void>) => {
  (ctx as any).accept(visitor);
  return (visitor as any).result;
};

class CustomErrorListener implements ErrorListener<Token> {
  syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    const error = `line ${line}:${charPositionInLine} ${msg}`;
    throw new Error(`parsing error at ${error}`);
  }
}

class TerminalVisitor extends CypherVisitor<string> {
  result: string = '';
  visitTerminal(ctx: TerminalNode) {
    this.result += ctx.getText();
    return this.result;
  }
}

class CustomCypherVisitor extends CypherVisitor<void> {
  result: Array<string> = [];
  visitOC_Return = (ctx: OC_ReturnContext): void => {
    for (const ctx2 of ctx.oC_ProjectionBody().oC_ProjectionItems().oC_ProjectionItem_list()) {
      if (ctx2.oC_Variable()) {
        this.result.push(visit(ctx2.oC_Variable(), new TerminalVisitor()));
      } else if (ctx2.oC_Expression()) {
        this.result.push(visit(ctx2.oC_Expression(), new TerminalVisitor()));
      } else {
        throw new Error('unhandled condition');
      }
    }
  };
  // visitOC_ProjectionItems = (ctx: OC_ProjectionItemsContext): void => {
  //   for (const ctx2 of ctx.oC_ProjectionItem_list()) {
  //     if (ctx2.oC_Variable()) {
  //       this.result.push(visit(ctx2.oC_Variable(), new TerminalVisitor()));
  //     } else if (ctx2.oC_Expression()) {
  //       this.result.push(visit(ctx2.oC_Expression(), new TerminalVisitor()));
  //     } else {
  //       throw new Error('unhandled condition');
  //     }
  //   }
  // };
}

export const getCypherAliases = (input: string): string[] => {
  try {
    const inputStream = CharStreams.fromString(input);
    const lexer = new CypherLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser: any = new CypherParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());
    return visit(parser.oC_Cypher(), new CustomCypherVisitor());
  } catch (error) {
    throw error;
  }
};
