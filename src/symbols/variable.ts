import GreekLetter from "./greekLetter"

/**
 * The types used in the [[Variable]] class.
 * 
 */
export type VariableTypes = GreekLetter | String;

export default class Variable {
    name: VariableTypes
    constructor(name: VariableTypes) {
        this.name = name;
    }
}