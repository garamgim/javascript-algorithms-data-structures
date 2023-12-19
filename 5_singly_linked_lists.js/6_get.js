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

    get(num) {
        if (num >= this.length) return null

        let curr = this.head
        for (let i = 0; i < num; i++) {
            curr = curr.next;
        }

        return curr
    }
}