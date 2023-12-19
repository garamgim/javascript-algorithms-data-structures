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

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
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