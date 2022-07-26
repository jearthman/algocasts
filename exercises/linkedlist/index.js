// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let node = this.head;
    let last = null;

    while(node){
      last = node;
      node = node.next;
    }

    return last;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.head.next;
  }

  removeLast(){
    let node = this.head;
    let prev = null;

    while(node){
      if(node.next === null){
        if(prev != null){
          prev.next = null;
        } else {
          this.head = null;
        }
        return;
      }
      prev = node;
      node = node.next;
    }
  }

  insertLast(data){
    if(this.head){
      this.getLast().next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index){
    let counter = 0;
    let node = this.head;

    if(!node){
      return null;
    }

    while(counter<index){
      if(!node){
        return null;
      }
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index){
    let counter = 0;
    let node = this.head;
    let prev = null;

    while(node){
      if(counter === index){
        if(prev){
          prev.next = node.next;
        } else {
          this.head = node.next;
        }
        return;
      }

      counter++;
      prev = node;
      node = node.next;
    }
  }

  insertAt(data, index){
    let node = new Node(data);
    if(index === 0){
      if(!this.head){
        this.head = node;
        return;
      } else {
        this.insertFirst(data);
        return;
      }
    }

    let prev = this.getAt(index - 1);
    if(!prev){
      this.insertLast(data);
      return;
    } else if(!prev.next){
      prev.next = node;
    } else {
      node.next = prev.next;
      prev.next = node;
    }
  }
}

module.exports = { Node, LinkedList };
