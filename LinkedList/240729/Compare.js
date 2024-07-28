export default class Compare {
  constructor(compareFunction) {
    this.compare = compareFunction || Compare.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }
}