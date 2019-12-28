import NormalExpression from '../EETypes/NormalExpression'
import Term from '../symbols/term'
import Operator from '../symbols/operator'

/**
 * The base class for an Expression.
 */
class Expression implements NormalExpression {
  terms: Term[]
  operator: Operator
  constructor(terms: Term[], operator: Operator) {
    this.terms = terms
    this.operator = operator
  }

  /**
   * This eliminates all of the operators from the [[Term]] array
   * @param terms The array of terms for reduction.
   */
  private reduceOperators(terms: Term[]): any[] {
    return terms.map(term => ({
      coefficient: term.coefficient,
      value: term.value,
      exponent: term.exponent
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
  static distributeOperators(expression: Expression, operator: DistributableOperator) {
    expression.terms.forEach((term, index) => {
      switch (expression.operator) {
        case Operator.Add:
          break

        case Operator.Subtract:
          expression.terms[index].operator = Expression.negateDistributableOperator(
            (expression.operator as unknown) as DistributableOperator
          )
          break

        case Operator.Multiply:
          break

        case Operator.Divide:
          break

        default:
          break
      }
    })
    return true
  }
  static canBeSimplified(expression: Expression): Boolean {
    return true
  }
}

export default Expression
