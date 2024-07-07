import LinkedListNode from './LinkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    // head에 newNode를 넣고 tail이 있는지만 확인
    // if (!this.head) {
    //   this.head = newNode;
    //   this.tail = newNode;

    //   return this;
    // }
    // newNode.next = this.head;
    // this.head = newNode;

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
      this.prepend(value);
      // return this; prepend에 return이 있음
    }
    // 이부분을 else scope로 묶는게 좋을 듯
    let currentNode = this.head;
    let count = 1;

    while (currentNode) {
      if (count === index) break;
      currentNode = currentNode.next;
      count += 1;
    }

    if (currentNode) {
      newNode.next = currentNode.next
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
    return this;
  }
}