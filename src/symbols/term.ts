import Operator, { DistributableOperator } from './operator'
import Variable from './variable'
import Constant from './constant'
import Expression from '../equations/expression'

/**
 * The possible types for a
 */
type TermValue = Variable | Constant | Variable[]

type TermOperator = Operator | DistributableOperator

/**
 * The class for a Term. This is the class that gets shifted around.
 */
class Term {
  value: TermValue
  coefficient: number
  operator: TermOperator
  exponent: Expression

  /**
   * The constructor of a term.
   * @param operator the operator that is paired with a term. For instance, '+' would be the operator in +4x.
   * @param coefficient The coefficient of the term. For instance, '4' would be the operator in +4x.
   * @param value The value of the term. For instance, the variable 'x' would be the value in +4x.
   * @param exponent The exponent the term is raised to. For instance, '1' would be the exponent of +4x.
   * @constructor
   */
  constructor(operator: TermOperator, coefficient: number, value: TermValue, exponent: Expression) {
    this.coefficient = coefficient
    this.operator = operator
    this.value = value
    this.exponent = exponent
  }
}

export default Term
