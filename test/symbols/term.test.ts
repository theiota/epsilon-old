import { Term, Operator, Variable, Constant, GreekLetter } from '../../src/epsilon'

describe('Term utility tests', () => {
  it('can return a string from a simple term sequence', () => {
    let expression = new Term(
      Operator.Add,
      new Constant(2),
      new Variable('n', new Constant(2)),
      new Constant(2)
    )
    expect(expression.toString()).toBe('+2(n^2)^2')
  })

  it('can return a string from a complex term sequence', () => {
    let expression = new Term(
      Operator.Multiply,
      new Constant(93),
      [
        new Variable(GreekLetter.Epsilon, 2),
        new Variable('n', 2),
        new Variable('n', 2),
        new Variable('n', 2)
      ],
      new Constant(2)
    )
    expect(expression.toString()).toBe('*93(Ε^2*n^2*n^2*n^2*)^2')
  })
})
