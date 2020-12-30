/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

//construct single node
const node = (val) = {
  this.val = val;
  this.next = null;
};

//construct LL
const MyLinkedList = () => {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

//Get the value of the index-th node in the linked list. If the index is invalid, return -1.
MyLinkedList.prototype.get = index => {
  if (!this.size || this.size - 1 < index || index < 0) return -1;
  let currNode = this.head;

  for (let i = 0; i < index; i++) {
    currNode = currNode.next;
  };

  return currNode;
};

//Add a node of value val before the head. After the insertion, the new node will be the new head.
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
  return this;
};

//Append a node of value val to the last element of the linked list.
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new Node(val);

  if (!this.tail && !this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

// Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let newNode = new Node(val);

  if (this.size < index) return;
  if (index <= 0) return this.addAtHead(val);
  if (this.size === index) return this.addAtTail(val);

  let currNode = this.head;
    for (let i = 0; i < index - 1; i++) {
    currNode = currNode.next;
  }
  let temp = currNode.next;
  currNode.next = newNode;
  newNode.next = temp;
  this.size++;
  return this;
};