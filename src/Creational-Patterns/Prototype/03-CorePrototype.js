// 1. Define the prototype object.
// This object will serve as the blueprint for all our cars.
const carPrototype = {
  wheels: 4,

  drive() {
    console.log(`Vroom vroom with ${this.wheels} wheels!`)
  },

  stop() {
    console.log('The car stopped')
  },
}

// 2. Create a new object (an instance) that inherits from carPrototype.
const myCar = Object.create(carPrototype)

// 3. Add properties specific to this instance.
myCar.make = 'Honda'
myCar.model = 'Civic'

// Own properties
console.log(`Make: ${myCar.make}`)
console.log(`Model: ${myCar.model}`)

// => 4: Inherited from carPrototype
console.log(`Wheels: ${myCar.wheels}`)

// Inherited method
myCar.drive()
