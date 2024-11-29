class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }
  includes(value) {
    if (!this.root) return false;

    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      } else if (temp.value < value) {
        temp = temp.right;
      } else if (temp.value > value) {
        temp = temp.left;
      }
    }
    return false;
  }
  bsf() {
    let current = this.root;
    let queue = [];
    let data = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return data;
  }
  dsfPreOrder(node = this.root , data = []) {
    if (node === null) return data;
    data.push(node.value)
    if(node.left){
        this.dsfPreOrder(node.left , data)
    }
    if(node.right){
        this.dsfPreOrder(node.right , data)
    }
   return data
  }


  dsfPostOrder(node = this.root , data =[]){
    if (node ===null) return data
    
    if(node.left){
      this.dsfPostOrder(node.left , data)
    }
    if(node.right){
      this.dsfPostOrder(node.right , data)
    }
    data.push(node.value)

    return data
  }
  dsfInOrder(node = this.root , data =[]){
    if(node ===null) return data
    if(node.left){
      this.dsfInOrder(node.left , data)
    }
    data.push(node.value)
    if(node.right){
      this.dsfInOrder(node.right , data)
    }
    return data
  }

}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(0);
tree.insert(3);
tree.insert(6);
tree.insert(4);
tree.insert(7);
console.log(tree);
console.log(tree.bsf());
console.log(tree.dsfPostOrder());
console.log(tree.dsfInOrder());
