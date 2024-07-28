import LinkedListNode from './LinkedListNode.js';
import Compare from './Compare.js'

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
    const index = rawIndex < 0 ? 0 : rawIndex;

    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedListNode(value);

      while (currentNode) {
        if(index === count) break;
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

  delete (value) {
    let deletedNode = null;

    if (!this.head) {
      return null;
    } 

    while (this.head && this.compare.equal(value, this.head.value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    const currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(value, currentNode.next.value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }

      if (this.compare.equal(value, this.tail.value)) {
        this.tail = currentNode;
      }
   }

    return deletedNode;
  }

   find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    const currentNode = this.tail;

    while (currentNode) {
      if (callback & callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
   }

   deleteTail() {
    const deteltedtail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return this.deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;

    return deletedTail;
   }

}