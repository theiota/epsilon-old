// The operator enum for creation of a term.
enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/',
  Exponentiate = '^',
  None = ''
}

export enum DistributableOperator {
  Add = Operator.Add,
  Subtract = Operator.Subtract
}

export type InclusiveOperator = Operator | DistributableOperator

export default Operator
