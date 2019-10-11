class stackClass {
  constructor(element) {
    this.stack = []
    this.stack.push(element)
  }
  addElement(...arg) {
    return this.stack.push(arg)
  }

  removeElement(arg) {
    return this.stack.pop(arg)
  }

}

newStack = new stackClass(5)

console.log(newStack);

newStack.addElement(3);
console.log(newStack);

newStack.addElement(4, 6, 7, 8);
console.log(newStack);

newStack.removeElement(8);
console.log(newStack);
