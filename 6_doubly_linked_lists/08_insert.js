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

    insert(idx, val) {
        if (idx < 0 || idx >= this.length) return false
        if (idx === 0) {
            this.unshift(val);
            return true
        }
        if (idx === this.length) {
            this.push(val);
            return true
        }

        let newNode = new Node(val);

        let prev = this.get(idx - 1);
        let next = prev.next;

        prev.next = newNode;
        newNode.prev = prev;

        next.prev = newNode;
        newNode.next = next;

        this.length++;
        return true
    }
}