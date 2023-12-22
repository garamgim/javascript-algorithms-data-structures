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

    get(idx) {
        if (idx < 0 || idx >= this.length) return null
        if (idx <= this.length / 2) {
            let curr = this.head;
            for (let i = 0; i < idx; i++) {
                curr = curr.next;
            }
            return curr
        } else {
            let curr = this.tail;
            for (let i = this.length - 1; i > idx; i--) {
                curr = curr.prev;
            }
            return curr
        }
    }
}