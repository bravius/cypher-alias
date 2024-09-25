"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCypherAliases = void 0;
const antlr4_1 = require("antlr4");
const CypherLexer_1 = __importDefault(require("./parser/CypherLexer"));
const CypherParser_1 = __importDefault(require("./parser/CypherParser"));
const CypherVisitor_1 = __importDefault(require("./parser/CypherVisitor"));
const visit = (ctx, visitor) => {
    ctx.accept(visitor);
    return visitor.result;
};
class CustomErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        const error = `line ${line}:${charPositionInLine} ${msg}`;
        throw new Error(`parsing error at ${error}`);
    }
}
class TerminalVisitor extends CypherVisitor_1.default {
    constructor() {
        super(...arguments);
        this.result = '';
    }
    visitTerminal(ctx) {
        this.result += ctx.getText();
        return this.result;
    }
}
class CustomCypherVisitor extends CypherVisitor_1.default {
    constructor() {
        super(...arguments);
        this.result = [];
        this.visitOC_Return = (ctx) => {
            for (const ctx2 of ctx.oC_ProjectionBody().oC_ProjectionItems().oC_ProjectionItem_list()) {
                if (ctx2.oC_Variable()) {
                    this.result.push(visit(ctx2.oC_Variable(), new TerminalVisitor()));
                }
                else if (ctx2.oC_Expression()) {
                    this.result.push(visit(ctx2.oC_Expression(), new TerminalVisitor()));
                }
                else {
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
}
const getCypherAliases = (input) => {
    try {
        const inputStream = antlr4_1.CharStreams.fromString(input);
        const lexer = new CypherLexer_1.default(inputStream);
        const tokenStream = new antlr4_1.CommonTokenStream(lexer);
        const parser = new CypherParser_1.default(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(new CustomErrorListener());
        return visit(parser.oC_Cypher(), new CustomCypherVisitor());
    }
    catch (error) {
        throw error;
    }
};
exports.getCypherAliases = getCypherAliases;
