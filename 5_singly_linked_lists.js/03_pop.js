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

    pop() {
        if (this.length === 0) {
            return undefined
        } else {
            let curr = this.head;
            let tail = curr.next;

            while (tail.next) {
                curr = tail;
                tail = tail.next;
            }

            this.tail = curr;
            curr.next = null;
            this.length--;

            return tail
        }
    }
}