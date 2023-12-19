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

    unshift(val) {
        let newNode = new Node();
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(num) {
        if (num >= this.length) return null

        let curr = this.head
        for (let i = 0; i < num; i++) {
            curr = curr.next;
        }

        return curr
    }

    insert(idx, val) {
        if (idx <= 0 || idx > this.length) return false
        if (idx === this.length) return !!this.push(val)
        if (idx === 0) return !!this.unshift(val)

        let newNode = new Node(val);
        let prev = this.get(idx - 1);
        let curr = prev.next;

        prev.next = newNode;
        newNode.next = curr;

        this.length++;
        return true
    }
}