class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const node = new Node()
        node.value = value
        if (this.back) {
            this.back.next = node;
        }
        this.back = node;
        if (!this.front) {
            this.front = node
        }
    }

    dequeue() {
        if (!this.front) {
            return null
        }
        const value = this.front.value;
        this.front = this.front.next;
        return value
    }

    printQueue() {
        if (!this.front) {
            return null
        }
        let node = this.front;
        console.info("\n Let's print your queue - ", '\n')
        while (node !== null) {
            console.log('Value - ', node.value, '\n')
            node = node.next
        }
    }
}

// const queue = new Queue()
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.dequeue()
// queue.enqueue(40);
// queue.enqueue(50);
// queue.dequeue()
// queue.enqueue(60);

// queue.printQueue()

module.exports = Queue