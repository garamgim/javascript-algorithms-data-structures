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

    reverse() {
        [this.head, this.tail] = [this.tail, this.head];
        let prev = null;
        let curr = this.tail;
        for (let i = 0; i < this.length; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this
    }
}