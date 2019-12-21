import NormalExpression from "../EETypes/NormalExpression";
import Term from "../symbols/term";
import Operator from "../symbols/operator";
import Constant from '../symbols/constant'

class Expression implements NormalExpression {
    terms: Term[];
    operator: Operator;
    constructor(terms: Term[], operator: Operator){
        this.terms = terms;
        this.operator = operator;
    }

    add(expression: Expression): Expression {

        return this;
    }

    multiply(expression: Expression): Expression {

        return this;
    }



    divide(expression: Expression): Expression {
        return this;
    }

    subtract(expression: Expression): Expression {
        return this;
    }
}

export default Expression;