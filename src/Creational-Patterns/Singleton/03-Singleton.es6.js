class Singleton {
  static #instance

  #privateVariable = {
    name: 'Private Value',
  }

  #privateMethod = () => this.#privateVariable

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance
    }

    this.publicProperty = 'Public Value'
    Singleton.#instance = this
  }

  publicMethod() {
    return `Public Method accessing ${this.#privateMethod().name}`
  }
}

export default Singleton

// Usage the class-based singleton

const single = new Singleton()
const anotherSingle = new Singleton()

console.log(single.publicMethod())
console.log(single.publicProperty)

const isVerified = single === anotherSingle
console.assert(
  isVerified,
  'The instances should be identical for a true singleton.'
)
