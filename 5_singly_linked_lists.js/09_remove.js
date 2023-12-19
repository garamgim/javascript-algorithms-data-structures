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

    shift() {
        if (!this.head) return undefined
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return curr
    }

    get(num) {
        if (num >= this.length) return null

        let curr = this.head
        for (let i = 0; i < num; i++) {
            curr = curr.next;
        }

        return curr
    }

    remove(idx) {
        if (idx <= 0 || idx > this.length) return undefined
        if (idx === this.length) return this.pop()
        if (idx === 0) return this.shift()

        let prev = this.get(idx - 1);
        let curr = prev.next;
        prev.next = curr.next;

        this.length--;
        return curr
    }
}