

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
        if (data !== null && data !== undefined) {
            const newNode = new Node(data);

            if (!this.head) {
                this.head = newNode;
            } else {

                let current = this.head;

                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.size++;
        }
    }

    prepend(data) {
        if (data !== null && data !== undefined) {
            const newNode = new Node(data);

            if (!this.head) {
                this.head = newNode;
            } else {
                let current = this.head;
                this.head = newNode;
                this.head.next = current;
            }
            this.size++;
        }
    }    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
        } else {
            let current = this.head;
            let previous = null;
            while (current && current.data !== data) {
                previous = current; 
                current = current.next; 
            }
            if (current) {
                previous.next = current.next; 
                this.size--;
            }
        }
    }

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) return null;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        if (index < 0 || index >= this.size) return "Empty";

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    pop() {
        if (!this.head) return null; 

        let current = this.head;
        if (current.next === null) {
            const poppedNode = this.head;
            this.head = null; 
            this.size--;
            return poppedNode; 
        }

        while (current.next && current.next.next) {
            current = current.next;
        }

        const poppedNode = current.next; 
        current.next = null; 
        this.size--;
        if (!current.next) this.head = null; 
        return poppedNode;
    }


    contains(data){
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true; 
            }
            current = current.next; 
        }
        return false;
    }

    find(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++; 
        }
        return null; 
    }


    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.data} -> `;
            current = current.next;
        }
        result += 'null';
        return result;
    }


    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.data} -> `); 
            current = current.next; 
        }
        console.log('null');
    }

    getSize() {
        return this.size;
    }

}



