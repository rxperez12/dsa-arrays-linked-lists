/** IndexError: raised when index not found. */

class IndexError extends Error {}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const node = new NodeStr(val);

    if (this.head === null) this.head = node;

    if (this.tail !== null) this.tail.next = node;

    this.tail = node;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const node = new NodeStr(val);

    // if head is null, add new node as head, set tail to node
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // if head is not null, save current head
      //change head to new node, set new node next to previous head
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string { //use removeat to refactor this code TODO:
    if (this.tail === null || this.head === null) throw new IndexError();

    let current = this.head;
    let removedItem = this.tail;
    let lastValue = null;
    // if current is current.next is equal to none, it's the last value of list
    // if current is equal to null, want to take last value to

    //TODO: this works but logic is not clear, hard to follow
    while (true) {
      if (current.next === null) {
        if (lastValue === null) {
          this.head = null;
          this.tail = null;
        } else {
          lastValue.next = null;
          this.tail = lastValue;
        }
        break;
      }
      lastValue = current;
      current = current.next;
    }

    this.length--;
    return removedItem.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.head === null) throw new IndexError();

    const removedItem = this.head;

    this.head = removedItem.next;
    if (this.head === null) this.tail = null;

    this.length--;
    return removedItem.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    const node = this.getNodeAtIdx(idx);

    return node!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    const node = this.getNodeAtIdx(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx < 0) throw new IndexError();

    const newNode = new NodeStr(val);

    // if LL is empty
    if(this.head === null){
      if(idx !== 0) throw new IndexError();
      this.head = newNode
      this.tail = newNode
      this.length++
      return
    }

    // if inserting at head
    if (idx === 0) {
      const previousHead = this.head;
      this.head = newNode;
      newNode.next = previousHead;
      this.length++;
      return;
    }

    // All other cases
    let insertLocation = idx;
    let node = this.head

    for (let i = 1; i < insertLocation; i++) {
      if (node.next === null) {
        throw new IndexError();
      }
      node = node.next;
    }

    const previousNodeNext = node.next;
    node.next = newNode;
    newNode.next = previousNodeNext;
    if (idx === this.length) this.tail = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx < 0 || this.head === null) throw new IndexError();

    let removedNode = null;

    //if array has 1 value
    if(this.length === 1){
      if(idx !== 0) throw new IndexError();
      removedNode = this.head
      this.head = null
      this.tail = null
      this.length--;
      return removedNode.val
    }

    // if removing at head
    if (idx === 0) {
      removedNode = this.head;
      this.head = removedNode.next
      this.length--;
      return removedNode.val
    }

    // All other cases
    let removeLocation = idx;
    let nodeBeforeIdx = this.head

    for (let i = 1; i < removeLocation; i++) {
      if (nodeBeforeIdx.next === null) {
        throw new IndexError();
      }
      nodeBeforeIdx = nodeBeforeIdx.next;
    }

    removedNode = nodeBeforeIdx.next as NodeStr
    nodeBeforeIdx.next = removedNode.next;
    if (idx === this.length - 1) this.tail = nodeBeforeIdx.next;
    this.length--;
    return removedNode!.val;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }

  getNodeAtIdx(idx: number): NodeStr {
    if (idx < 0 || this.head === null) throw new IndexError();

    if(idx === 0) return this.head
    let numOfNodes = idx + 1;
    let node = this.head;

    for (let i = 1; i < numOfNodes; i++) {
      if (node.next === null) {
        throw new IndexError();
      }
      node = node.next;
    }
    return node;
  }
}

export { IndexError, LLStr, NodeStr };
