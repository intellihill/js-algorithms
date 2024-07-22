import LinkedListNode from './LinkedListNode.js'
import Compare from './Compare.js';

export default class LinkedList {
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Compare(compareFunction);
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  insert(value, rawIndex) {
    const newNode = new LinkedListNode(value);

    const index = rawIndex < 0 ? 0 : rawIndex;

    if (index === 0) {
      this.prepend;
    } else {
      let count = 1;
      let currentNode = this.head;

      while (currentNode) {
        if (index === count) break;

        currentNode = currentNode.next;
        count += 1;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  delete(value) {
    deletedNode = null;

    if (!this.head){
      return null;
    }

    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    
      if (this.compare.equal(this.tail.value, value)) {
        this.tail = currentNode;
      }
    }
    return deletedNode;
  }
}