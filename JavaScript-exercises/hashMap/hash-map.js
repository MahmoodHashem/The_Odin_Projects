


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null; // Pointer to the next node
    }
}

class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.size = 0;
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const newNode = new Node(key, value);

        if (!this.buckets[index]) {
            this.buckets[index] = newNode; // Initialize the bucket with the new node
        } else {
            let current = this.buckets[index];
            while (true) {
                if (current.key === key) {
                    current.value = value; // Update value if key exists
                    return;
                }
                if (!current.next) {
                    current.next = newNode; // Add new node at the end of the chain
                    break;
                }
                current = current.next; // Move to the next node
            }
        }
        this.size++;

        if (this.size / this.buckets.length > this.loadFactor) {
            this.resize();
        }
        this.visualize();
    }

    get(key) {
        const index = this.hash(key);
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return current.value; // Return value if found
            }
            current = current.next; // Move to the next node
        }
        return null; // Return null if key not found
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.buckets[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next; // Remove the current node
                } else {
                    this.buckets[index] = current.next; // Remove the head node
                }
                this.size--;
                this.visualize();
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false; // Key not found
    }

    clear() {
        this.buckets = new Array(16);
        this.size = 0;
        this.visualize();
    }

    resize() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2);
        this.size = 0; // Reset size and rehash
        for (const bucket of oldBuckets) {
            if (bucket) {
                let current = bucket;
                while (current) {
                    this.set(current.key, current.value); // Reinsert entries
                    current = current.next;
                }
            }
        }
    }

    visualize() {
        const hashmapDiv = document.getElementById('hashmap');
        hashmapDiv.innerHTML = ''; // Clear previous visualization

        this.buckets.forEach((bucket, index) => {
            const bucketDiv = document.createElement('div');
            bucketDiv.className = 'bucket';
            let entries = 'Bucket ' + index + ': ';
            let current = bucket;
            if (!current) {
                entries += 'Empty';
            } else {
                while (current) {
                    entries += `${current.key}: ${current.value} `;
                    current = current.next;
                }
            }
            bucketDiv.textContent = entries;
            hashmapDiv.appendChild(bucketDiv);
        });
    }
}

const hashmap = new HashMap();

function addToHashMap() {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (key === '' || value === '') {
        alert('Please enter both key and value.');
        return;
    }

    hashmap.set(key, value);
    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
}

function getFromHashMap() {
    const key = document.getElementById('key').value;
    const value = hashmap.get(key);
    const outputDiv = document.getElementById('output');

    if (value !== null) {
        outputDiv.textContent = `Value for "${key}": ${value}`;
    } else {
        outputDiv.textContent = `Key "${key}" not found.`;
    }
}

function removeFromHashMap() {
    const key = document.getElementById('key').value;
    const outputDiv = document.getElementById('output');

    if (hashmap.remove(key)) {
        outputDiv.textContent = `Key "${key}" removed.`;
    } else {
        outputDiv.textContent = `Key "${key}" not found.`;
    }
}

function clearHashMap() {
    hashmap.clear();
    document.getElementById('output').textContent = 'All entries cleared.';
}