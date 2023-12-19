class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift() {
        if (!this.head) return undefined
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return curr
    }
}