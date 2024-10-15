

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
    } remove(data) {
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

    fromEnd(index) {
        if (index < 0 || index > this.size) return "Empty";

        let first = this.head;
        let second = this.head;

        for (let i = 0; i < index; i++) {
            first = first.next;
        }

        console.log(first)

        while (first) {
            first = first.next;
            second = second.next;
        }
        console.log(second)
    }

    removeDuplicate() {

        let current = this.head;

        while (current && current.next) {

            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

    }

    insertNth(index, data) {

        if (!this.head) return null;

        const newNode = new Node(data);
        
        if (index === 0) {
            newNode.next = this.head;
            
            return; 
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            console.log(current.data);
            current = current.next;
        }

        current.next = newNode;
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


    contains(data) {
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

    insert(data) {
  
        const newNode = new Node(data); 
        
        if(!this.head){
          this.head = newNode; 
          return; 
        }
        
      if(data < this.head.data){
        newNode.next = this.head; 
        return; 
      }
        
        let current = this.head; 
        let pre = this.head; 
        
        while(current.next && current.data < data){
            pre = current; 
          current = current.next; 
        }


        if(current.data < data){
         console.log(current)
          current.next = newNode; 
          return; 
        }
        console.log(current)
        console.log("Pre", pre)
        pre.next = newNode; 
        newNode.next = current; 
        
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



let nums = new LinkedList();

nums.append(1)
nums.append(2)
nums.append(4)
nums.append(6)
nums.append(8)
nums.append(10)


nums.insert(1.5)

nums.print();


