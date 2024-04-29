"use strict";
// Generated from /tmp/cypher-alias/src/Cypher.g4 by ANTLR 4.13.1
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CypherParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
class CypherVisitor extends antlr4_1.ParseTreeVisitor {
}
exports.default = CypherVisitor;
