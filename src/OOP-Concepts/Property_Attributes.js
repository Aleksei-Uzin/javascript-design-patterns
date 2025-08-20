const obj = {}

Object.defineProperty(obj, 'x', {
  configurable: true,
  enumerable: false,
  value: 1,
  writable: true,
})

const keys = Object.keys(obj)
const isVerified = obj.x === 1 && keys.length === 0
console.assert(isVerified, '%o', { x: obj.x, keys })

// Modify the property x
Object.defineProperty(obj, 'x', { writable: false })

try {
  obj.x = 2
} catch ({ message }) {
  console.error(message)
  console.log('Unchanged the value of the property x: ', obj.x)
}

// But, the property is still configurable
Object.defineProperty(obj, 'x', { value: 2 })
console.assert(obj.x === 2, '%o', { x: obj.x })

// Change x from a data property to an accessor property
Object.defineProperty(obj, 'x', {
  get: function () {
    return 0
  },
})

console.assert(obj.x === 0, '%o', { x: obj.x })
