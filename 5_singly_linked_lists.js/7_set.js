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

    get(num) {
        if (num >= this.length) return null

        let curr = this.head
        for (let i = 0; i < num; i++) {
            curr = curr.next;
        }

        return curr
    }

    set(val, idx) {
        let curr = this.get(idx);
        if (!curr) return false
        curr.val = val;
        return true
    }
}