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

  pop(): string {
    if (this.tail === null) throw new IndexError();

    let current = this.head as NodeStr;
    let removedItem = this.tail;
    let lastValue = null;
    // if current is current.next is equal to none, it's the last value of list
    // if current is equal to null, want to take last value to

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
    if (idx < 0 || this.head === null) throw new IndexError();

    let numOfNodes = idx + 1;
    let node = this.head;

    for (let i = 1; i < numOfNodes; i++) {
      if (node.next === null) {
        throw new IndexError();
      }
      node = node.next
    }

    return node!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {}

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {}

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
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
}

export { IndexError, LLStr, NodeStr };
