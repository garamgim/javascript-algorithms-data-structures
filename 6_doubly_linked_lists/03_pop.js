class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        if (!this.head) return undefined
        const removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.prev;
            this.tail = newTail;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }
}