import Operator, { InclusiveOperator, DistributableOperator } from './operator'
import Variable from './variable'
import Constant from './constant'
import Expression from '../equations/expression'

/**
 * The possible types for a [[Term]]'s value.
 */
export type TermValue = Variable | Constant | Variable[]

/**
 * The possible types for a [[Term]]'s operator.
 */
export type TermOperator = InclusiveOperator

export type TermString = String

/**
 * The class for a Term. This is the class that gets shifted around.
 */
class Term {
  value: TermValue
  coefficient: Constant
  operator: TermOperator

  /**
   * The constructor of a term.
   * @param operator the operator that is paired with a term. For instance, '+' would be the operator in +4x.
   * @param coefficient The coefficient of the term. For instance, '4' would be the operator in +4x.
   * @param value The value of the term. For instance, the variable 'x' would be the value in +4x.
   * @constructor
   */
  constructor(operator: TermOperator, coefficient: Constant, value: TermValue) {
    this.coefficient = coefficient
    this.operator = operator
    this.value = value
  }

  /**
   * A function to raise some term to some exponent. Supports function chaining.
   * @param exponent The power the term will be raised to.
   * @returns A term to the power of `exponent`
   */
  public exponentiate(exponent: Constant): Term {
    if (this.value instanceof Variable) {
      // Variable exponent logic
      this.value.exponent.value = this.value.exponent.value * exponent.value
      // Changing coefficient value
      this.coefficient.value = this.coefficient.value ** exponent.value
    } else if (this.value instanceof Constant) {
      this.value.value = this.value.value ** exponent.value

      // Changing coefficient value
      this.coefficient.value = this.coefficient.value ** exponent.value
    } else {
      // Array of variable logic
      this.value = this.value.map(variable => {
        // Declaring a prototype variable for returning
        let prototypeVariable = variable

        // Same logic as Variable logic
        prototypeVariable.exponent.value = prototypeVariable.exponent.value * exponent.value

        return prototypeVariable
      })

      // Changing coefficient value
      this.coefficient.value = this.coefficient.value ** exponent.value
    }

    return this
  }

  // public static distributeOperator(term: Term, operatorDist: DistributableOperator): Term {
  //   let prototypeTerm = term;
  //   let { operator } = term;

  //   return prototypeTerm
  // }

  /**
   *
   * @param term The term you wish to add to the current one.
   */
  public add(term: Term): Expression {
    let prototypeExpression = new Expression([this, term], Operator.Add)
    return prototypeExpression
  }

  /**
   * A function to stringify a term. Supports function chaining.
   */
  public toString(): TermString {
    // Variable definitions
    let { operator, coefficient, value } = this
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
    return `${operator.valueOf()}${coefficient.value}(${prototypeValue})`
  }

  /**
   * A `static` function to stringify a term.
   * @param term The term to be stringified.
   */
  public static toString(term: Term): TermString {
    // Variable definitions
    let { operator, coefficient, value } = term
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
    return `${operator.valueOf()}${coefficient.value}(${prototypeValue})`
  }
}

export default Term
