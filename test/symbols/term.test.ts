import { Term, Operator, Variable, Constant, GreekLetter } from '../../src/epsilon'

describe('Term utility tests', () => {
  it('can return a string from a simple term sequence', () => {
    let expression = new Term(Operator.Add, new Constant(2), new Variable('n', new Constant(2)))
    expect(expression.toString()).toBe('+2(n^2)')
  })

  it('can return a string from a complex term sequence', () => {
    let expression = new Term(Operator.Multiply, new Constant(93), [
      new Variable(GreekLetter.Epsilon, new Constant(2)),
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2))
    ])
    expect(expression.toString()).toBe('*93(Ε^2*n^2*n^2*n^2*)')
  })

  it('can return a string from a static term', () => {
    let expression = new Term(Operator.Multiply, new Constant(93), [
      new Variable(GreekLetter.Epsilon, new Constant(2)),
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2))
    ])
    expect(Term.toString(expression)).toBe('*93(Ε^2*n^2*n^2*n^2*)')
  })

  it('can exponentiate a simple term sequence with one variable', () => {
    let term = new Term(Operator.Add, new Constant(2), new Variable('n', new Constant(2)))
    let expectedTerm = new Term(Operator.Add, new Constant(4), new Variable('n', new Constant(4)))
    let result = term.exponentiate(new Constant(2))
    expect(result).toEqual(expectedTerm)
  })

  it('can exponentiate a simple term sequence with a constant', () => {
    let term = new Term(Operator.Add, new Constant(2), new Variable('n', new Constant(2)))
    let expectedTerm = new Term(Operator.Add, new Constant(4), new Variable('n', new Constant(4)))
    let result = term.exponentiate(new Constant(2))
    expect(result).toEqual(expectedTerm)
  })

  it('can exponentiate a complex term sequence with multiple variables', () => {
    let term = new Term(Operator.Add, new Constant(2), [
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2)),
      new Variable('n', new Constant(2))
    ])
    let expectedTerm = new Term(Operator.Add, new Constant(4), [
      new Variable('n', new Constant(4)),
      new Variable('n', new Constant(4)),
      new Variable('n', new Constant(4))
    ])
    let result = term.exponentiate(new Constant(2))
    expect(result).toEqual(expectedTerm)
  })
})
