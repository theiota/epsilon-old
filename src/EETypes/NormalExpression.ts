import Term from "../symbols/term";
import Expression from "../equations/expression";

interface NormalExpression {
    terms: Term[];
    multiply(expression: Expression): Expression;
    add(expression: Expression): Expression;
};

export default NormalExpression;