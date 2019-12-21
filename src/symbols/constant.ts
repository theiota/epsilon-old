import GreekLetter from "./greekLetter"

export type constantType = String | Constant | Number | GreekLetter;

export default class Constant {
    value: constantType;

    constructor(value: constantType) {
        this.value = value;
    }
}