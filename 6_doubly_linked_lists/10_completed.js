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

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined
        const removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.prev;
            this.tail = newTail;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
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

    unshift(val) {

        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
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

    set(idx, val) {
        let curr = this.get(idx);
        if (!!curr) {
            curr.val = val;
            return true
        } else {
            return false
        }
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