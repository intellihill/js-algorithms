export default class Compare {
  constructor(compareFunction) {
    this.Compare = compareFunction 
  }

  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 0;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }
}