import GreekLetter from './greekLetter'
import { Constant } from '../epsilon'

/**
 * The types used in the [[Variable]] class.
 *
 */
export type VariableTypes = GreekLetter | String

/**
 * The class for a Variable.
 */
export default class Variable {
  name: VariableTypes
  exponent: Constant

  /**
   * The constructor of the [[Variable]] class.
   * @param name The name of the variable.
   * @param exponent The exponent that you would like the variable to be lifted to.
   * @constructor
   */
  constructor(name: VariableTypes, exponent: Constant) {
    this.name = name
    this.exponent = exponent
  }
}
