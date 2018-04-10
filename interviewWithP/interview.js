'use strict';
class _Node{
  constructor(value, next){
    this.value = value,
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head=null;
  }
  insertFirst(data){
    this.head = new _Node(data, this.head);
  }
  insertLast(data){
    if (this.head === null){
      this.insertFirst(data);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(data,null);
    }
  }
  remove(data){
    if (this.head === null){
      return false;
    }
    if (this.head.value === data){
      this.head = this.head.next;
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null && currentNode.value !== data){
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null){
      console.log(data+ ' Was not found in the list.');
      return false;
    }
    prevNode.next = currentNode.next;
    return true;

  }
  find(data){
    if (this.head === null){
      console.log(data + ' that doesn\'t exist in the list.');
      return false;
    }
    if (this.head.value === data){
      console.log(data +' exists in the list.');
      return true;
    }
    let currentNode = this.head;
    while (currentNode.next !== null){
      if (currentNode.value === data){
        console.log(data +' exists in the list.');
        return true;
      }
    }
    return false;

  }
  insertBefore(data,key){
    if (this.head === null){
      return false;
    }
    if (this.head.value === key){
      this.insertFirst(data);
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next !== null && currentNode.value !== key){
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.value === key){
      prevNode.next = new _Node(data,currentNode);
      return true;
    }
    console.log('what you\'re trying to insert before doesn\'t exist');
    return false;
  }
  insertAfter(data,key){
    if (this.head === null){
      return false;
    }
    if (this.head.next === null){
      this.insertLast(data);
      return;
    }
    let tempNode = new _Node(data,null);
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.value !== key){
      currentNode = currentNode.next;
    }
    if (currentNode.value === key){
      tempNode.next = currentNode.next ;
      currentNode.next = tempNode;
      return true;
    }
    console.log('what you\'re trying to insert after doesn\'t exist');
    return false;
  }
  insertAt(data, index = 0){
    if (index === 1){
      this.insertFirst(data);
      return;
    }
    if (this.head === null){
      console.log('That index does not exist!');
      return false;
    }


    let currentNode = this.head;

    let count = 1;
    while(count < index && currentNode !== null){
      currentNode = currentNode.next;
      count ++;
    }
    if(currentNode === null){
      console.log('Can\'t insert '  + data+ ' to index ' +index+ '. That index is outside the of the list!');
      return false;
    }
    else{
      this.insertBefore(data,currentNode.value);
    }

  }

}

function insertInOrder(list,data) {
  if (list.head === null) {
    return list.insertFirst(data);
  }
  let insertPointer = list.head;
  while (insertPointer.next !== null && insertPointer.value <= data) {
    console.log(insertPointer.value);
    insertPointer = insertPointer.next;
  }
  if (data > insertPointer.value) {
    list.insertAfter(data,insertPointer.value);
  }
  else {
    list.insertBefore(data,insertPointer.value);
  }

}

function display(list) {
  let displayPointer = list.head;
  while (displayPointer !== null){
    console.log(displayPointer.value);
    displayPointer = displayPointer.next;
  }
}

function main() {
  let sortedList = new LinkedList();
  // sortedList.insertFirst(5);
  // sortedList.insertFirst(4);
  // sortedList.insertFirst(3);
  // sortedList.insertFirst(1);
  // console.log(sortedList);
  display(sortedList);
  insertInOrder(sortedList,10);
  console.log('after the insertion');
  display(sortedList);


}

main();
