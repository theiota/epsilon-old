import Operator from "./operator";
import Variable from "./variable";
import Constant from './constant'

class Term {
    value: Variable | Constant;
    coefficient: number;
    operator: Operator;
    constructor(operator: Operator, coefficient: number, value: Variable | Constant){
        this.coefficient = coefficient;
        this.operator = operator;
        this.value = value;
    }
}

export default Term;