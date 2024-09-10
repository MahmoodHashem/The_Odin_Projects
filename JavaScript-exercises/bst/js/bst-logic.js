class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (!node) {
            this.root = new Node(data);
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else {
                        return searchTree(node.right);
                    }
                }
            };
            searchTree(node);
        }
        this.prettyPrint();
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children 
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child 
                if (node.right == null) {
                    return node.left;
                }
                // node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } 
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
             else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
        this.prettyPrint()
    }


    clearAll(){
        //TODO
    }


    prettyPrint() {
        const treeString = this._prettyPrint(this.root);
        document.getElementById('treeDisplay').textContent = treeString;
    }

    _prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
            return "";
        }
        let result = "";
        console.log(prefix)
        if (node.right !== null) {
            result += this._prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        result += `${prefix}${isLeft ? "└── " : "┌── "}${node.data}\n`;
        if (node.left !== null) {
            result += this._prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
        return result;
    }

    balance() {
        const sortedArray = this._inOrderTraversal(this.root);
        this.root = this._sortedArrayToBST(sortedArray);
        this.prettyPrint();
    }

    _inOrderTraversal(node, arr = []) {
        if (node) {
            this._inOrderTraversal(node.left, arr);
            arr.push(node.data);
            this._inOrderTraversal(node.right, arr);
        }
        return arr;
    }

    _sortedArrayToBST(arr) {
        if (arr.length === 0) return null;
        const mid = Math.floor(arr.length / 2);
        const node = new Node(arr[mid]);
        node.left = this._sortedArrayToBST(arr.slice(0, mid));
        node.right = this._sortedArrayToBST(arr.slice(mid + 1));
        return node;
    }

    inOrder() {
        return this._inOrderTraversal(this.root).join(", ");
    }

    preOrder() {
        return this._preOrderTraversal(this.root).join(", ");
    }

    postOrder() {
        return this._postOrderTraversal(this.root).join(", ");
    }

    _levelOrder(callback) {
        //TODO
    }

    _preOrderTraversal(node, arr = []) {
        if (node) {
            arr.push(node.data);
            this._preOrderTraversal(node.left, arr);
            this._preOrderTraversal(node.right, arr);
        }
        return arr;
    }

    _postOrderTraversal(node, arr = []) {
        if (node) {
            this._postOrderTraversal(node.left, arr);
            this._postOrderTraversal(node.right, arr);
            arr.push(node.data);
        }
        return arr;
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
      }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
}
