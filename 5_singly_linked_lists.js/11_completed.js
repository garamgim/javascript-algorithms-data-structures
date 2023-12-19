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
        if (!this.head) {
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

    shift() {
        if (!this.head) return undefined
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return curr
    }

    unshift() {
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

    set(val, idx) {
        let curr = this.get(idx);
        if (!curr) return false
        curr.val = val;
        return true
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