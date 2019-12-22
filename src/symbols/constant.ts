import GreekLetter from './greekLetter'

export type constantType = String | Number | GreekLetter

export default class Constant {
  value: constantType

  constructor(value: constantType) {
    this.value = value
  }
}
