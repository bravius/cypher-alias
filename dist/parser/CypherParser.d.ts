import { ATN, DFA, FailedPredicateException, Parser, ParserRuleContext, TerminalNode, TokenStream } from 'antlr4';
import CypherListener from "./CypherListener.js";
import CypherVisitor from "./CypherVisitor.js";
export default class CypherParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly T__13 = 14;
    static readonly T__14 = 15;
    static readonly T__15 = 16;
    static readonly T__16 = 17;
    static readonly T__17 = 18;
    static readonly T__18 = 19;
    static readonly T__19 = 20;
    static readonly T__20 = 21;
    static readonly T__21 = 22;
    static readonly T__22 = 23;
    static readonly T__23 = 24;
    static readonly T__24 = 25;
    static readonly T__25 = 26;
    static readonly T__26 = 27;
    static readonly T__27 = 28;
    static readonly T__28 = 29;
    static readonly T__29 = 30;
    static readonly T__30 = 31;
    static readonly T__31 = 32;
    static readonly T__32 = 33;
    static readonly T__33 = 34;
    static readonly T__34 = 35;
    static readonly T__35 = 36;
    static readonly T__36 = 37;
    static readonly T__37 = 38;
    static readonly T__38 = 39;
    static readonly T__39 = 40;
    static readonly T__40 = 41;
    static readonly T__41 = 42;
    static readonly T__42 = 43;
    static readonly T__43 = 44;
    static readonly T__44 = 45;
    static readonly UNION = 46;
    static readonly ALL = 47;
    static readonly OPTIONAL = 48;
    static readonly MATCH = 49;
    static readonly UNWIND = 50;
    static readonly AS = 51;
    static readonly MERGE = 52;
    static readonly ON = 53;
    static readonly CREATE = 54;
    static readonly SET = 55;
    static readonly DETACH = 56;
    static readonly DELETE = 57;
    static readonly REMOVE = 58;
    static readonly CALL = 59;
    static readonly YIELD = 60;
    static readonly WITH = 61;
    static readonly RETURN = 62;
    static readonly DISTINCT = 63;
    static readonly ORDER = 64;
    static readonly BY = 65;
    static readonly L_SKIP = 66;
    static readonly LIMIT = 67;
    static readonly ASCENDING = 68;
    static readonly ASC = 69;
    static readonly DESCENDING = 70;
    static readonly DESC = 71;
    static readonly WHERE = 72;
    static readonly OR = 73;
    static readonly XOR = 74;
    static readonly AND = 75;
    static readonly NOT = 76;
    static readonly STARTS = 77;
    static readonly ENDS = 78;
    static readonly CONTAINS = 79;
    static readonly IN = 80;
    static readonly IS = 81;
    static readonly NULL = 82;
    static readonly COUNT = 83;
    static readonly CASE = 84;
    static readonly ELSE = 85;
    static readonly END = 86;
    static readonly WHEN = 87;
    static readonly THEN = 88;
    static readonly ANY = 89;
    static readonly NONE = 90;
    static readonly SINGLE = 91;
    static readonly EXISTS = 92;
    static readonly TRUE = 93;
    static readonly FALSE = 94;
    static readonly HexInteger = 95;
    static readonly DecimalInteger = 96;
    static readonly OctalInteger = 97;
    static readonly HexLetter = 98;
    static readonly HexDigit = 99;
    static readonly Digit = 100;
    static readonly NonZeroDigit = 101;
    static readonly NonZeroOctDigit = 102;
    static readonly OctDigit = 103;
    static readonly ZeroDigit = 104;
    static readonly ExponentDecimalReal = 105;
    static readonly RegularDecimalReal = 106;
    static readonly StringLiteral = 107;
    static readonly EscapedChar = 108;
    static readonly CONSTRAINT = 109;
    static readonly DO = 110;
    static readonly FOR = 111;
    static readonly REQUIRE = 112;
    static readonly UNIQUE = 113;
    static readonly MANDATORY = 114;
    static readonly SCALAR = 115;
    static readonly OF = 116;
    static readonly ADD = 117;
    static readonly DROP = 118;
    static readonly FILTER = 119;
    static readonly EXTRACT = 120;
    static readonly UnescapedSymbolicName = 121;
    static readonly IdentifierStart = 122;
    static readonly IdentifierPart = 123;
    static readonly EscapedSymbolicName = 124;
    static readonly SP = 125;
    static readonly WHITESPACE = 126;
    static readonly Comment = 127;
    static readonly EOF: number;
    static readonly RULE_oC_Cypher = 0;
    static readonly RULE_oC_Statement = 1;
    static readonly RULE_oC_Query = 2;
    static readonly RULE_oC_RegularQuery = 3;
    static readonly RULE_oC_Union = 4;
    static readonly RULE_oC_SingleQuery = 5;
    static readonly RULE_oC_SinglePartQuery = 6;
    static readonly RULE_oC_MultiPartQuery = 7;
    static readonly RULE_oC_UpdatingClause = 8;
    static readonly RULE_oC_ReadingClause = 9;
    static readonly RULE_oC_Match = 10;
    static readonly RULE_oC_Unwind = 11;
    static readonly RULE_oC_Merge = 12;
    static readonly RULE_oC_MergeAction = 13;
    static readonly RULE_oC_Create = 14;
    static readonly RULE_oC_Set = 15;
    static readonly RULE_oC_SetItem = 16;
    static readonly RULE_oC_Delete = 17;
    static readonly RULE_oC_Remove = 18;
    static readonly RULE_oC_RemoveItem = 19;
    static readonly RULE_oC_InQueryCall = 20;
    static readonly RULE_oC_StandaloneCall = 21;
    static readonly RULE_oC_YieldItems = 22;
    static readonly RULE_oC_YieldItem = 23;
    static readonly RULE_oC_With = 24;
    static readonly RULE_oC_Return = 25;
    static readonly RULE_oC_ProjectionBody = 26;
    static readonly RULE_oC_ProjectionItems = 27;
    static readonly RULE_oC_ProjectionItem = 28;
    static readonly RULE_oC_Order = 29;
    static readonly RULE_oC_Skip = 30;
    static readonly RULE_oC_Limit = 31;
    static readonly RULE_oC_SortItem = 32;
    static readonly RULE_oC_Where = 33;
    static readonly RULE_oC_Pattern = 34;
    static readonly RULE_oC_PatternPart = 35;
    static readonly RULE_oC_AnonymousPatternPart = 36;
    static readonly RULE_oC_PatternElement = 37;
    static readonly RULE_oC_RelationshipsPattern = 38;
    static readonly RULE_oC_NodePattern = 39;
    static readonly RULE_oC_PatternElementChain = 40;
    static readonly RULE_oC_RelationshipPattern = 41;
    static readonly RULE_oC_RelationshipDetail = 42;
    static readonly RULE_oC_Properties = 43;
    static readonly RULE_oC_RelationshipTypes = 44;
    static readonly RULE_oC_NodeLabels = 45;
    static readonly RULE_oC_NodeLabel = 46;
    static readonly RULE_oC_RangeLiteral = 47;
    static readonly RULE_oC_LabelName = 48;
    static readonly RULE_oC_RelTypeName = 49;
    static readonly RULE_oC_PropertyExpression = 50;
    static readonly RULE_oC_Expression = 51;
    static readonly RULE_oC_OrExpression = 52;
    static readonly RULE_oC_XorExpression = 53;
    static readonly RULE_oC_AndExpression = 54;
    static readonly RULE_oC_NotExpression = 55;
    static readonly RULE_oC_ComparisonExpression = 56;
    static readonly RULE_oC_PartialComparisonExpression = 57;
    static readonly RULE_oC_StringListNullPredicateExpression = 58;
    static readonly RULE_oC_StringPredicateExpression = 59;
    static readonly RULE_oC_ListPredicateExpression = 60;
    static readonly RULE_oC_NullPredicateExpression = 61;
    static readonly RULE_oC_AddOrSubtractExpression = 62;
    static readonly RULE_oC_MultiplyDivideModuloExpression = 63;
    static readonly RULE_oC_PowerOfExpression = 64;
    static readonly RULE_oC_UnaryAddOrSubtractExpression = 65;
    static readonly RULE_oC_NonArithmeticOperatorExpression = 66;
    static readonly RULE_oC_ListOperatorExpression = 67;
    static readonly RULE_oC_PropertyLookup = 68;
    static readonly RULE_oC_Atom = 69;
    static readonly RULE_oC_CaseExpression = 70;
    static readonly RULE_oC_CaseAlternative = 71;
    static readonly RULE_oC_ListComprehension = 72;
    static readonly RULE_oC_PatternComprehension = 73;
    static readonly RULE_oC_Quantifier = 74;
    static readonly RULE_oC_FilterExpression = 75;
    static readonly RULE_oC_PatternPredicate = 76;
    static readonly RULE_oC_ParenthesizedExpression = 77;
    static readonly RULE_oC_IdInColl = 78;
    static readonly RULE_oC_FunctionInvocation = 79;
    static readonly RULE_oC_FunctionName = 80;
    static readonly RULE_oC_ExistentialSubquery = 81;
    static readonly RULE_oC_ExplicitProcedureInvocation = 82;
    static readonly RULE_oC_ImplicitProcedureInvocation = 83;
    static readonly RULE_oC_ProcedureResultField = 84;
    static readonly RULE_oC_ProcedureName = 85;
    static readonly RULE_oC_Namespace = 86;
    static readonly RULE_oC_Variable = 87;
    static readonly RULE_oC_Literal = 88;
    static readonly RULE_oC_BooleanLiteral = 89;
    static readonly RULE_oC_NumberLiteral = 90;
    static readonly RULE_oC_IntegerLiteral = 91;
    static readonly RULE_oC_DoubleLiteral = 92;
    static readonly RULE_oC_ListLiteral = 93;
    static readonly RULE_oC_MapLiteral = 94;
    static readonly RULE_oC_PropertyKeyName = 95;
    static readonly RULE_oC_Parameter = 96;
    static readonly RULE_oC_SchemaName = 97;
    static readonly RULE_oC_ReservedWord = 98;
    static readonly RULE_oC_SymbolicName = 99;
    static readonly RULE_oC_LeftArrowHead = 100;
    static readonly RULE_oC_RightArrowHead = 101;
    static readonly RULE_oC_Dash = 102;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    oC_Cypher(): OC_CypherContext;
    oC_Statement(): OC_StatementContext;
    oC_Query(): OC_QueryContext;
    oC_RegularQuery(): OC_RegularQueryContext;
    oC_Union(): OC_UnionContext;
    oC_SingleQuery(): OC_SingleQueryContext;
    oC_SinglePartQuery(): OC_SinglePartQueryContext;
    oC_MultiPartQuery(): OC_MultiPartQueryContext;
    oC_UpdatingClause(): OC_UpdatingClauseContext;
    oC_ReadingClause(): OC_ReadingClauseContext;
    oC_Match(): OC_MatchContext;
    oC_Unwind(): OC_UnwindContext;
    oC_Merge(): OC_MergeContext;
    oC_MergeAction(): OC_MergeActionContext;
    oC_Create(): OC_CreateContext;
    oC_Set(): OC_SetContext;
    oC_SetItem(): OC_SetItemContext;
    oC_Delete(): OC_DeleteContext;
    oC_Remove(): OC_RemoveContext;
    oC_RemoveItem(): OC_RemoveItemContext;
    oC_InQueryCall(): OC_InQueryCallContext;
    oC_StandaloneCall(): OC_StandaloneCallContext;
    oC_YieldItems(): OC_YieldItemsContext;
    oC_YieldItem(): OC_YieldItemContext;
    oC_With(): OC_WithContext;
    oC_Return(): OC_ReturnContext;
    oC_ProjectionBody(): OC_ProjectionBodyContext;
    oC_ProjectionItems(): OC_ProjectionItemsContext;
    oC_ProjectionItem(): OC_ProjectionItemContext;
    oC_Order(): OC_OrderContext;
    oC_Skip(): OC_SkipContext;
    oC_Limit(): OC_LimitContext;
    oC_SortItem(): OC_SortItemContext;
    oC_Where(): OC_WhereContext;
    oC_Pattern(): OC_PatternContext;
    oC_PatternPart(): OC_PatternPartContext;
    oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext;
    oC_PatternElement(): OC_PatternElementContext;
    oC_RelationshipsPattern(): OC_RelationshipsPatternContext;
    oC_NodePattern(): OC_NodePatternContext;
    oC_PatternElementChain(): OC_PatternElementChainContext;
    oC_RelationshipPattern(): OC_RelationshipPatternContext;
    oC_RelationshipDetail(): OC_RelationshipDetailContext;
    oC_Properties(): OC_PropertiesContext;
    oC_RelationshipTypes(): OC_RelationshipTypesContext;
    oC_NodeLabels(): OC_NodeLabelsContext;
    oC_NodeLabel(): OC_NodeLabelContext;
    oC_RangeLiteral(): OC_RangeLiteralContext;
    oC_LabelName(): OC_LabelNameContext;
    oC_RelTypeName(): OC_RelTypeNameContext;
    oC_PropertyExpression(): OC_PropertyExpressionContext;
    oC_Expression(): OC_ExpressionContext;
    oC_OrExpression(): OC_OrExpressionContext;
    oC_XorExpression(): OC_XorExpressionContext;
    oC_AndExpression(): OC_AndExpressionContext;
    oC_NotExpression(): OC_NotExpressionContext;
    oC_ComparisonExpression(): OC_ComparisonExpressionContext;
    oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext;
    oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext;
    oC_StringPredicateExpression(): OC_StringPredicateExpressionContext;
    oC_ListPredicateExpression(): OC_ListPredicateExpressionContext;
    oC_NullPredicateExpression(): OC_NullPredicateExpressionContext;
    oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext;
    oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext;
    oC_PowerOfExpression(): OC_PowerOfExpressionContext;
    oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext;
    oC_NonArithmeticOperatorExpression(): OC_NonArithmeticOperatorExpressionContext;
    oC_ListOperatorExpression(): OC_ListOperatorExpressionContext;
    oC_PropertyLookup(): OC_PropertyLookupContext;
    oC_Atom(): OC_AtomContext;
    oC_CaseExpression(): OC_CaseExpressionContext;
    oC_CaseAlternative(): OC_CaseAlternativeContext;
    oC_ListComprehension(): OC_ListComprehensionContext;
    oC_PatternComprehension(): OC_PatternComprehensionContext;
    oC_Quantifier(): OC_QuantifierContext;
    oC_FilterExpression(): OC_FilterExpressionContext;
    oC_PatternPredicate(): OC_PatternPredicateContext;
    oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext;
    oC_IdInColl(): OC_IdInCollContext;
    oC_FunctionInvocation(): OC_FunctionInvocationContext;
    oC_FunctionName(): OC_FunctionNameContext;
    oC_ExistentialSubquery(): OC_ExistentialSubqueryContext;
    oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext;
    oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext;
    oC_ProcedureResultField(): OC_ProcedureResultFieldContext;
    oC_ProcedureName(): OC_ProcedureNameContext;
    oC_Namespace(): OC_NamespaceContext;
    oC_Variable(): OC_VariableContext;
    oC_Literal(): OC_LiteralContext;
    oC_BooleanLiteral(): OC_BooleanLiteralContext;
    oC_NumberLiteral(): OC_NumberLiteralContext;
    oC_IntegerLiteral(): OC_IntegerLiteralContext;
    oC_DoubleLiteral(): OC_DoubleLiteralContext;
    oC_ListLiteral(): OC_ListLiteralContext;
    oC_MapLiteral(): OC_MapLiteralContext;
    oC_PropertyKeyName(): OC_PropertyKeyNameContext;
    oC_Parameter(): OC_ParameterContext;
    oC_SchemaName(): OC_SchemaNameContext;
    oC_ReservedWord(): OC_ReservedWordContext;
    oC_SymbolicName(): OC_SymbolicNameContext;
    oC_LeftArrowHead(): OC_LeftArrowHeadContext;
    oC_RightArrowHead(): OC_RightArrowHeadContext;
    oC_Dash(): OC_DashContext;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
export declare class OC_CypherContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Statement(): OC_StatementContext;
    EOF(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_StatementContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Query(): OC_QueryContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_QueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_RegularQuery(): OC_RegularQueryContext;
    oC_StandaloneCall(): OC_StandaloneCallContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RegularQueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SingleQuery(): OC_SingleQueryContext;
    oC_Union_list(): OC_UnionContext[];
    oC_Union(i: number): OC_UnionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_UnionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    UNION(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    ALL(): TerminalNode;
    oC_SingleQuery(): OC_SingleQueryContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SingleQueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SinglePartQuery(): OC_SinglePartQueryContext;
    oC_MultiPartQuery(): OC_MultiPartQueryContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SinglePartQueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Return(): OC_ReturnContext;
    oC_ReadingClause_list(): OC_ReadingClauseContext[];
    oC_ReadingClause(i: number): OC_ReadingClauseContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_UpdatingClause_list(): OC_UpdatingClauseContext[];
    oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MultiPartQueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SinglePartQuery(): OC_SinglePartQueryContext;
    oC_With_list(): OC_WithContext[];
    oC_With(i: number): OC_WithContext;
    oC_ReadingClause_list(): OC_ReadingClauseContext[];
    oC_ReadingClause(i: number): OC_ReadingClauseContext;
    oC_UpdatingClause_list(): OC_UpdatingClauseContext[];
    oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_UpdatingClauseContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Create(): OC_CreateContext;
    oC_Merge(): OC_MergeContext;
    oC_Delete(): OC_DeleteContext;
    oC_Set(): OC_SetContext;
    oC_Remove(): OC_RemoveContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ReadingClauseContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Match(): OC_MatchContext;
    oC_Unwind(): OC_UnwindContext;
    oC_InQueryCall(): OC_InQueryCallContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MatchContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    MATCH(): TerminalNode;
    oC_Pattern(): OC_PatternContext;
    OPTIONAL(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Where(): OC_WhereContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_UnwindContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    UNWIND(): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    AS(): TerminalNode;
    oC_Variable(): OC_VariableContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MergeContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    MERGE(): TerminalNode;
    oC_PatternPart(): OC_PatternPartContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_MergeAction_list(): OC_MergeActionContext[];
    oC_MergeAction(i: number): OC_MergeActionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MergeActionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    ON(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    MATCH(): TerminalNode;
    oC_Set(): OC_SetContext;
    CREATE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_CreateContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    CREATE(): TerminalNode;
    oC_Pattern(): OC_PatternContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SetContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SET(): TerminalNode;
    oC_SetItem_list(): OC_SetItemContext[];
    oC_SetItem(i: number): OC_SetItemContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SetItemContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_PropertyExpression(): OC_PropertyExpressionContext;
    oC_Expression(): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Variable(): OC_VariableContext;
    oC_NodeLabels(): OC_NodeLabelsContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_DeleteContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    DELETE(): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    DETACH(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RemoveContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    REMOVE(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_RemoveItem_list(): OC_RemoveItemContext[];
    oC_RemoveItem(i: number): OC_RemoveItemContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RemoveItemContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Variable(): OC_VariableContext;
    oC_NodeLabels(): OC_NodeLabelsContext;
    oC_PropertyExpression(): OC_PropertyExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_InQueryCallContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    CALL(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext;
    YIELD(): TerminalNode;
    oC_YieldItems(): OC_YieldItemsContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_StandaloneCallContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    CALL(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext;
    oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext;
    YIELD(): TerminalNode;
    oC_YieldItems(): OC_YieldItemsContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_YieldItemsContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_YieldItem_list(): OC_YieldItemContext[];
    oC_YieldItem(i: number): OC_YieldItemContext;
    oC_Where(): OC_WhereContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_YieldItemContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Variable(): OC_VariableContext;
    oC_ProcedureResultField(): OC_ProcedureResultFieldContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    AS(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_WithContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    WITH(): TerminalNode;
    oC_ProjectionBody(): OC_ProjectionBodyContext;
    oC_Where(): OC_WhereContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ReturnContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    RETURN(): TerminalNode;
    oC_ProjectionBody(): OC_ProjectionBodyContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ProjectionBodyContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_ProjectionItems(): OC_ProjectionItemsContext;
    DISTINCT(): TerminalNode;
    oC_Order(): OC_OrderContext;
    oC_Skip(): OC_SkipContext;
    oC_Limit(): OC_LimitContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ProjectionItemsContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_ProjectionItem_list(): OC_ProjectionItemContext[];
    oC_ProjectionItem(i: number): OC_ProjectionItemContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ProjectionItemContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Expression(): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    AS(): TerminalNode;
    oC_Variable(): OC_VariableContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_OrderContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    ORDER(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    BY(): TerminalNode;
    oC_SortItem_list(): OC_SortItemContext[];
    oC_SortItem(i: number): OC_SortItemContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SkipContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    L_SKIP(): TerminalNode;
    SP(): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_LimitContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    LIMIT(): TerminalNode;
    SP(): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SortItemContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Expression(): OC_ExpressionContext;
    ASCENDING(): TerminalNode;
    ASC(): TerminalNode;
    DESCENDING(): TerminalNode;
    DESC(): TerminalNode;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_WhereContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    WHERE(): TerminalNode;
    SP(): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_PatternPart_list(): OC_PatternPartContext[];
    oC_PatternPart(i: number): OC_PatternPartContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternPartContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Variable(): OC_VariableContext;
    oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_AnonymousPatternPartContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_PatternElement(): OC_PatternElementContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternElementContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_NodePattern(): OC_NodePatternContext;
    oC_PatternElementChain_list(): OC_PatternElementChainContext[];
    oC_PatternElementChain(i: number): OC_PatternElementChainContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_PatternElement(): OC_PatternElementContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RelationshipsPatternContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_NodePattern(): OC_NodePatternContext;
    oC_PatternElementChain_list(): OC_PatternElementChainContext[];
    oC_PatternElementChain(i: number): OC_PatternElementChainContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NodePatternContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Variable(): OC_VariableContext;
    oC_NodeLabels(): OC_NodeLabelsContext;
    oC_Properties(): OC_PropertiesContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternElementChainContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_RelationshipPattern(): OC_RelationshipPatternContext;
    oC_NodePattern(): OC_NodePatternContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RelationshipPatternContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_LeftArrowHead(): OC_LeftArrowHeadContext;
    oC_Dash_list(): OC_DashContext[];
    oC_Dash(i: number): OC_DashContext;
    oC_RightArrowHead(): OC_RightArrowHeadContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_RelationshipDetail(): OC_RelationshipDetailContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RelationshipDetailContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Variable(): OC_VariableContext;
    oC_RelationshipTypes(): OC_RelationshipTypesContext;
    oC_RangeLiteral(): OC_RangeLiteralContext;
    oC_Properties(): OC_PropertiesContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PropertiesContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_MapLiteral(): OC_MapLiteralContext;
    oC_Parameter(): OC_ParameterContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RelationshipTypesContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_RelTypeName_list(): OC_RelTypeNameContext[];
    oC_RelTypeName(i: number): OC_RelTypeNameContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NodeLabelsContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_NodeLabel_list(): OC_NodeLabelContext[];
    oC_NodeLabel(i: number): OC_NodeLabelContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NodeLabelContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_LabelName(): OC_LabelNameContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RangeLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_IntegerLiteral_list(): OC_IntegerLiteralContext[];
    oC_IntegerLiteral(i: number): OC_IntegerLiteralContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_LabelNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SchemaName(): OC_SchemaNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RelTypeNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SchemaName(): OC_SchemaNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PropertyExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Atom(): OC_AtomContext;
    oC_PropertyLookup_list(): OC_PropertyLookupContext[];
    oC_PropertyLookup(i: number): OC_PropertyLookupContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_OrExpression(): OC_OrExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_OrExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_XorExpression_list(): OC_XorExpressionContext[];
    oC_XorExpression(i: number): OC_XorExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    OR_list(): TerminalNode[];
    OR(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_XorExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_AndExpression_list(): OC_AndExpressionContext[];
    oC_AndExpression(i: number): OC_AndExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    XOR_list(): TerminalNode[];
    XOR(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_AndExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_NotExpression_list(): OC_NotExpressionContext[];
    oC_NotExpression(i: number): OC_NotExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    AND_list(): TerminalNode[];
    AND(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NotExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_ComparisonExpression(): OC_ComparisonExpressionContext;
    NOT_list(): TerminalNode[];
    NOT(i: number): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ComparisonExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext;
    oC_PartialComparisonExpression_list(): OC_PartialComparisonExpressionContext[];
    oC_PartialComparisonExpression(i: number): OC_PartialComparisonExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PartialComparisonExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_StringListNullPredicateExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext;
    oC_StringPredicateExpression_list(): OC_StringPredicateExpressionContext[];
    oC_StringPredicateExpression(i: number): OC_StringPredicateExpressionContext;
    oC_ListPredicateExpression_list(): OC_ListPredicateExpressionContext[];
    oC_ListPredicateExpression(i: number): OC_ListPredicateExpressionContext;
    oC_NullPredicateExpression_list(): OC_NullPredicateExpressionContext[];
    oC_NullPredicateExpression(i: number): OC_NullPredicateExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_StringPredicateExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    STARTS(): TerminalNode;
    WITH(): TerminalNode;
    ENDS(): TerminalNode;
    CONTAINS(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ListPredicateExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    IN(): TerminalNode;
    oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NullPredicateExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    IS(): TerminalNode;
    NULL(): TerminalNode;
    NOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_AddOrSubtractExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_MultiplyDivideModuloExpression_list(): OC_MultiplyDivideModuloExpressionContext[];
    oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MultiplyDivideModuloExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_PowerOfExpression_list(): OC_PowerOfExpressionContext[];
    oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PowerOfExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_UnaryAddOrSubtractExpression_list(): OC_UnaryAddOrSubtractExpressionContext[];
    oC_UnaryAddOrSubtractExpression(i: number): OC_UnaryAddOrSubtractExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_NonArithmeticOperatorExpression(): OC_NonArithmeticOperatorExpressionContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NonArithmeticOperatorExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Atom(): OC_AtomContext;
    oC_NodeLabels(): OC_NodeLabelsContext;
    oC_ListOperatorExpression_list(): OC_ListOperatorExpressionContext[];
    oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext;
    oC_PropertyLookup_list(): OC_PropertyLookupContext[];
    oC_PropertyLookup(i: number): OC_PropertyLookupContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ListOperatorExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PropertyLookupContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_PropertyKeyName(): OC_PropertyKeyNameContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_AtomContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Literal(): OC_LiteralContext;
    oC_Parameter(): OC_ParameterContext;
    oC_CaseExpression(): OC_CaseExpressionContext;
    COUNT(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_ListComprehension(): OC_ListComprehensionContext;
    oC_PatternComprehension(): OC_PatternComprehensionContext;
    oC_Quantifier(): OC_QuantifierContext;
    oC_PatternPredicate(): OC_PatternPredicateContext;
    oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext;
    oC_FunctionInvocation(): OC_FunctionInvocationContext;
    oC_ExistentialSubquery(): OC_ExistentialSubqueryContext;
    oC_Variable(): OC_VariableContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_CaseExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    END(): TerminalNode;
    ELSE(): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    CASE(): TerminalNode;
    oC_CaseAlternative_list(): OC_CaseAlternativeContext[];
    oC_CaseAlternative(i: number): OC_CaseAlternativeContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_CaseAlternativeContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    WHEN(): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    THEN(): TerminalNode;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ListComprehensionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_FilterExpression(): OC_FilterExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternComprehensionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_RelationshipsPattern(): OC_RelationshipsPatternContext;
    oC_Expression(): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Variable(): OC_VariableContext;
    oC_Where(): OC_WhereContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_QuantifierContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    ALL(): TerminalNode;
    oC_FilterExpression(): OC_FilterExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    ANY(): TerminalNode;
    NONE(): TerminalNode;
    SINGLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_FilterExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_IdInColl(): OC_IdInCollContext;
    oC_Where(): OC_WhereContext;
    SP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PatternPredicateContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_RelationshipsPattern(): OC_RelationshipsPatternContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ParenthesizedExpressionContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Expression(): OC_ExpressionContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_IdInCollContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Variable(): OC_VariableContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    IN(): TerminalNode;
    oC_Expression(): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_FunctionInvocationContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_FunctionName(): OC_FunctionNameContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    DISTINCT(): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_FunctionNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Namespace(): OC_NamespaceContext;
    oC_SymbolicName(): OC_SymbolicNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ExistentialSubqueryContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    EXISTS(): TerminalNode;
    oC_RegularQuery(): OC_RegularQueryContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Pattern(): OC_PatternContext;
    oC_Where(): OC_WhereContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ExplicitProcedureInvocationContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_ProcedureName(): OC_ProcedureNameContext;
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ImplicitProcedureInvocationContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_ProcedureName(): OC_ProcedureNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ProcedureResultFieldContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SymbolicName(): OC_SymbolicNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ProcedureNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_Namespace(): OC_NamespaceContext;
    oC_SymbolicName(): OC_SymbolicNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NamespaceContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SymbolicName_list(): OC_SymbolicNameContext[];
    oC_SymbolicName(i: number): OC_SymbolicNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_VariableContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SymbolicName(): OC_SymbolicNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_LiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_BooleanLiteral(): OC_BooleanLiteralContext;
    NULL(): TerminalNode;
    oC_NumberLiteral(): OC_NumberLiteralContext;
    StringLiteral(): TerminalNode;
    oC_ListLiteral(): OC_ListLiteralContext;
    oC_MapLiteral(): OC_MapLiteralContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_BooleanLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    TRUE(): TerminalNode;
    FALSE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_NumberLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_DoubleLiteral(): OC_DoubleLiteralContext;
    oC_IntegerLiteral(): OC_IntegerLiteralContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_IntegerLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    HexInteger(): TerminalNode;
    OctalInteger(): TerminalNode;
    DecimalInteger(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_DoubleLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    ExponentDecimalReal(): TerminalNode;
    RegularDecimalReal(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ListLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_MapLiteralContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    SP_list(): TerminalNode[];
    SP(i: number): TerminalNode;
    oC_PropertyKeyName_list(): OC_PropertyKeyNameContext[];
    oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext;
    oC_Expression_list(): OC_ExpressionContext[];
    oC_Expression(i: number): OC_ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_PropertyKeyNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SchemaName(): OC_SchemaNameContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ParameterContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SymbolicName(): OC_SymbolicNameContext;
    DecimalInteger(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SchemaNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    oC_SymbolicName(): OC_SymbolicNameContext;
    oC_ReservedWord(): OC_ReservedWordContext;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_ReservedWordContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    ALL(): TerminalNode;
    ASC(): TerminalNode;
    ASCENDING(): TerminalNode;
    BY(): TerminalNode;
    CREATE(): TerminalNode;
    DELETE(): TerminalNode;
    DESC(): TerminalNode;
    DESCENDING(): TerminalNode;
    DETACH(): TerminalNode;
    EXISTS(): TerminalNode;
    LIMIT(): TerminalNode;
    MATCH(): TerminalNode;
    MERGE(): TerminalNode;
    ON(): TerminalNode;
    OPTIONAL(): TerminalNode;
    ORDER(): TerminalNode;
    REMOVE(): TerminalNode;
    RETURN(): TerminalNode;
    SET(): TerminalNode;
    L_SKIP(): TerminalNode;
    WHERE(): TerminalNode;
    WITH(): TerminalNode;
    UNION(): TerminalNode;
    UNWIND(): TerminalNode;
    AND(): TerminalNode;
    AS(): TerminalNode;
    CONTAINS(): TerminalNode;
    DISTINCT(): TerminalNode;
    ENDS(): TerminalNode;
    IN(): TerminalNode;
    IS(): TerminalNode;
    NOT(): TerminalNode;
    OR(): TerminalNode;
    STARTS(): TerminalNode;
    XOR(): TerminalNode;
    FALSE(): TerminalNode;
    TRUE(): TerminalNode;
    NULL(): TerminalNode;
    CONSTRAINT(): TerminalNode;
    DO(): TerminalNode;
    FOR(): TerminalNode;
    REQUIRE(): TerminalNode;
    UNIQUE(): TerminalNode;
    CASE(): TerminalNode;
    WHEN(): TerminalNode;
    THEN(): TerminalNode;
    ELSE(): TerminalNode;
    END(): TerminalNode;
    MANDATORY(): TerminalNode;
    SCALAR(): TerminalNode;
    OF(): TerminalNode;
    ADD(): TerminalNode;
    DROP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_SymbolicNameContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    UnescapedSymbolicName(): TerminalNode;
    EscapedSymbolicName(): TerminalNode;
    HexLetter(): TerminalNode;
    COUNT(): TerminalNode;
    FILTER(): TerminalNode;
    EXTRACT(): TerminalNode;
    ANY(): TerminalNode;
    NONE(): TerminalNode;
    SINGLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_LeftArrowHeadContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_RightArrowHeadContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
export declare class OC_DashContext extends ParserRuleContext {
    constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: CypherListener): void;
    exitRule(listener: CypherListener): void;
    accept<Result>(visitor: CypherVisitor<Result>): Result;
}
