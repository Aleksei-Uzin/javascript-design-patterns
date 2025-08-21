class MyClass {
  constructor(data) {
    if (data instanceof MyClass) {
      // If 'data' is another instance of MyClass, copy its properties
      this.value = data.value
    } else {
      // Otherwise, initialize with the provided data
      this.value = data
    }
  }

  createCopy() {
    // Creates a new MyClass instance, passing 'this' (the current instance)
    return new this.constructor(this)
  }
}

const instance = new MyClass(10)
const copiedInstance = instance.createCopy()

console.log(instance.value) // => 10
console.log(copiedInstance.value) // => 10 (copied from original Instance)
