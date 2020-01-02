import { Expression, Term, Operator, Constant, Variable } from '../../src/epsilon'
import { DistributableOperator } from '../../src/symbols/operator'

describe('Basic Expression tests', () => {
  it('instantiates with a basic array', () => {
    // TODO
  })

  it('can distribute terms over a simple expression', () => {
    let expression = new Expression(
      [
        new Term(Operator.Add, new Constant(4), new Variable('x', new Constant(2))),
        new Term(Operator.Add, new Constant(4), new Variable('x', new Constant(2)))
      ],
      Operator.Add
    )

    let distributedExpression = Expression.distributeOperators(
      expression,
      DistributableOperator.Subtract
    )

    let expressionToTest = new Expression(
      [
        new Term(Operator.Subtract, new Constant(4), new Variable('x', new Constant(2))),
        new Term(Operator.Subtract, new Constant(4), new Variable('x', new Constant(2)))
      ],
      Operator.Add
    )

    expect(distributedExpression).toEqual(expressionToTest)
  })

  it('can transfer a simple expression to a string', () => {
    let expression = new Expression(
      [
        new Term(Operator.Add, new Constant(4), new Variable('x', new Constant(2))),
        new Term(Operator.Add, new Constant(4), new Variable('x', new Constant(2))),
        new Term(Operator.Add, new Constant(4), new Variable('x', new Constant(2)))
      ],
      Operator.Add
    )

    expect(expression.selfToString()).toBe('+(+4(x^2)+4(x^2)+4(x^2))')
  })
})
