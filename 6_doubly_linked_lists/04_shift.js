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

    shift() {
        if (this.length === 0) return undefined
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = this.head.next
            newHead.prev = null;
            this.head = newHead;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }
}