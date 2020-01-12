import NormalExpression from '../EETypes/NormalExpression'
import Term, { TermValue, TermOperator } from '../symbols/term'
import Operator, { DistributableOperator } from '../symbols/operator'
import { Constant } from '../epsilon'

class CoefficientLessTerm {
  value: TermValue
  operator: TermOperator

  constructor(value: TermValue, operator: TermOperator) {
    this.value = value
    this.operator = operator
  }
}

/**
 * The base class for an Expression.
 */
class Expression implements NormalExpression {
  terms: Term[]
  operator: Operator

  /**
   * The constructor for an Expression.
   * @param terms The terms that initialize an [[Expression]].
   * @param operator The operator that the expression is paired with.
   */
  constructor(terms: Term[], operator: Operator) {
    this.terms = terms
    this.operator = operator
  }

  /**
   * This eliminates all of the operators from the [[Term]] array
   * @param terms The array of terms for reduction.
   */
  private reduceOperators(terms: Term[]): any[] {
    // This function maps over the array of terms, and returns everything except for the operator.
    return terms.map(term => ({
      coefficient: term.coefficient,
      value: term.value
    }))
  }

  /**
   * A command to add two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `add` command with.
   */
  add(expression: Expression): Expression {
    return this
  }

  /**
   * A command to multiply two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `multiply` command with.
   */
  multiply(expression: Expression): Expression {
    return this
  }

  /**
   * A command to add two expressions together. Supports function chaining.
   * @param expression The expression you wish to use the `divide` command with.
   */
  divide(expression: Expression): Expression {
    return this
  }

  /**
   * A command to subtract one expression from another. Supports function chaining.
   * @param expression The expression you wish to use the `subtract` command with.
   */
  subtract(expression: Expression): Expression {
    return this
  }

  /**
   * A helper function for [[distributeOperators]], in order to negate a certain type of operator.
   * @param operator The operator to be negated.
   */
  private static negateDistributableOperator(
    operator: DistributableOperator
  ): DistributableOperator {
    // VSCode will throw an error, stating that it's being used without being defined.
    let returnOperator: DistributableOperator = DistributableOperator.Subtract
    switch (operator) {
      case DistributableOperator.Add:
        returnOperator = DistributableOperator.Subtract
        break

      case DistributableOperator.Subtract:
        returnOperator = DistributableOperator.Add
        break

      default:
        break
    }

    return returnOperator
  }

  /**
   * A function that distributes an operator over a certain expression.
   * @param expression The expression to be distributed against
   * @param operator The operator to distribute
   */
  static distributeOperators(expression: Expression, operator: DistributableOperator): Expression {
    let prototypeExpression = expression
    expression.terms.forEach((term, index) => {
      switch (expression.operator) {
        case Operator.Add:
          if (operator === DistributableOperator.Add) {
            expression.terms[index].operator = Operator.Add
          } else if (operator === DistributableOperator.Subtract) {
            expression.terms[index].operator = Operator.Subtract
          }
          break

        case Operator.Subtract:
          if (operator === DistributableOperator.Add) {
            expression.terms[index].operator = Operator.Subtract
          } else if (operator === DistributableOperator.Subtract) {
            expression.terms[index].operator = Operator.Add
          }
          break

        case Operator.Multiply:
          break

        case Operator.Divide:
          break

        default:
          break
      }
    })
    return prototypeExpression
  }

  /**
   * A function to figure out if an expression can be simplified.
   * @param expression The [[Expression]] to be simplify-checked.
   */
  static canBeSimplified(expression: Expression): Boolean {
    return true
  }

  static collectLikeTerms(expression: Expression): Expression {
    let prototypeExpression: Expression = expression
    let termsWithoutCoefficients: any[] = []

    expression.terms.forEach(term => {
      termsWithoutCoefficients.push({
        operator: term.operator,
        value: term.value
      })
    })

    let indicesOfLikeTerms: number[][] = []
    let prototypeTerms = []

    termsWithoutCoefficients.forEach(element => {
      let indices: number[] = []
      termsWithoutCoefficients.forEach((termProt, index) => {
        if (!([] as number[]).concat(...indicesOfLikeTerms).includes(index)) {
          if (
            termProt === element &&
            element.operator !== Operator.Multiply &&
            element.operator !== Operator.Divide
          ) {
            indices.push(index)
          }
        }
      })
      indicesOfLikeTerms.push(indices)
    })

    indicesOfLikeTerms.forEach(term => {
      // loop through indices, sum up all coefficients, store in array
    })

    return prototypeExpression
  }

  /**
   * The method to stringify an expression using its `this` property.
   */
  public toString(): String {
    return Expression.toString(this)
  }

  /**
   * The general method for stringifying an Expression.
   * @param expression The expression to be stringified
   */
  public static toString(expression: Expression): String {
    let prototypeString: string = ''

    expression.terms.forEach(term => {
      prototypeString += term.toString()
    })

    prototypeString = `${expression.operator}(${prototypeString})`

    return prototypeString
  }
}

export default Expression
