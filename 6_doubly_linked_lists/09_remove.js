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

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined
        if (idx === 0) {
            return this.shift()
        }
        if (idx === this.length - 1) {
            return this.pop()
        }

        let removed = this.get(idx);
        let before = removed.prev;
        let after = removed.next;

        before.next = after;
        after.prev = before;

        removed.next = null;
        removed.prev = null;

        this.length--;
        return removed
    }
}