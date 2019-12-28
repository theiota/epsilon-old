import { Expression, Constant, GreekLetter, Variable, Term, Operator } from '../src/theta'

/**
 * Dummy test
 */
describe('Expression Export test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Expression is instantiable', () => {
    expect(
      new Expression(
        [new Term(Operator.Add, new Constant(3), new Variable('x', 2), new Constant(2))],
        Operator.Add
      )
    ).toBeInstanceOf(Expression)
  })
})

describe('Constant Export test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Expression is instantiable', () => {
    expect(new Constant(2)).toBeInstanceOf(Constant)
  })
})

describe('GreekLetter Export test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('GreekLetter is instantiable', () => {
    expect(GreekLetter.Alpha).toBe('\u0391')
  })
})
