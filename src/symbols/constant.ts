import GreekLetter from './greekLetter'

export type constantType = number

export default class Constant {
  value: constantType

  constructor(value: constantType) {
    this.value = value
  }
}
