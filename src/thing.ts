import Expression from './equations/expression'
import Term from './symbols/term'
import Operator from './symbols/operator'
import Constant from './symbols/constant'

let a = new Expression([new Term(Operator.Add, 3, new Constant(3))], Operator.None)
let b = new Expression([new Term(Operator.Add, 3, new Constant(3))], Operator.None)

a.add(b)
