/**
 * When an inherited property is an accessor with a setter, the assignment behavior changes.
 *
 */

// Define the prototype object
const proto = {
  _x: 0,
}

// Define an accessor property 'x' on the prototype
Object.defineProperty(proto, 'x', {
  enumerable: true,
  configurable: true,
  get() {
    console.log("Getter on 'proto' is called")
    return this._x
  },
  set(newValue) {
    console.log("Setter on 'proto' is called")
    // 'this' refers to the object on which the assignment is happening
    if (this === proto) {
      console.log("- The 'this' context is the instance object: proto")
    } else if (this === instance) {
      console.log("- The 'this' context is the instance object: instance")
    }

    this._x = newValue
  },
})

const instance = Object.create(proto)

/**
 * The setter is called on 'instance', so 'this' is 'instance'.
 * It sets a new property '_x' on 'instance', shadowing the one on 'proto'.
 * This leaves the prototype unmodified.
 *
 */
instance.x = 55

console.log('instance have its own _x property', Object.hasOwn(instance, '_x'))
console.log('Verifying Prototype is unmodified, proto object', proto)
