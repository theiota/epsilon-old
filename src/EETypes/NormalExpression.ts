import Term from '../symbols/term'
import Expression from '../equations/expression'

/**
 * The `interface` for a normal expression. Includes basic operators and intrinsic values.
 */
interface NormalExpression {
  terms: Term[]
  multiply(expression: Expression): Expression
  divide(expression: Expression): Expression
  add(expression: Expression): Expression
  subtract(expression: Expression): Expression
}

export default NormalExpression
