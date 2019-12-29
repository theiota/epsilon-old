import Operator, { DistributableOperator } from './operator'
import Variable from './variable'
import Constant from './constant'
import Expression from '../equations/expression'

/**
 * The possible types for a [[Term]]'s value.
 */
type TermValue = Variable | Constant | Variable[]

/**
 * The possible types for a [[Term]]'s operator.
 */
type TermOperator = Operator | DistributableOperator

/**
 * The class for a Term. This is the class that gets shifted around.
 */
class Term {
  value: TermValue
  coefficient: Constant
  operator: TermOperator
  exponent: Constant

  /**
   * The constructor of a term.
   * @param operator the operator that is paired with a term. For instance, '+' would be the operator in +4x.
   * @param coefficient The coefficient of the term. For instance, '4' would be the operator in +4x.
   * @param value The value of the term. For instance, the variable 'x' would be the value in +4x.
   * @param exponent The exponent the term is raised to. For instance, '1' would be the exponent of +4x.
   * @constructor
   */
  constructor(operator: TermOperator, coefficient: Constant, value: TermValue, exponent: Constant) {
    this.coefficient = coefficient
    this.operator = operator
    this.value = value
    this.exponent = exponent
  }

  public toString(): String {
    // Variable definitions
    let { operator, coefficient, value, exponent } = this
    let prototypeValue = ''

    // Typeguarding
    if (value instanceof Variable) {
      // Variables are usually represented as x^3
      prototypeValue = `${value.name}^${value.exponent.value}`
    } else if (value instanceof Constant) {
      // Constants are represented as their numerical form.
      prototypeValue = `${value.value}`
    } else {
      // Because the only other type is an array of Variables, we must map over it.
      value.forEach((variable, index, arr) => {
        prototypeValue += `${variable.name}^${variable.exponent.value}${
          index === arr.length ? '' : '*'
        }`
      })
    }

    // The usual form of a terms is something like: +4(x^n*y^3)
    return `${operator.valueOf()}${coefficient.value}(${prototypeValue})^${exponent.value}`
  }
}

export default Term
