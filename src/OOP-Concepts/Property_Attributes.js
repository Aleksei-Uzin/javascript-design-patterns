const obj = {}

Object.defineProperty(obj, 'x', {
  configurable: true,
  enumerable: false,
  value: 1,
  writable: true,
})

const keys = Object.keys(obj)
const isVerified = obj.x === 1 && keys.length === 0
console.assert(isVerified, 'Property x should be 1 and not enumerable', {
  x: obj.x,
  keys,
})

// Modify the property x
Object.defineProperty(obj, 'x', { writable: false })

try {
  obj.x = 2
} catch ({ message }) {
  console.log('Caught expected error when writing to non-writable property:')
  console.error(message)
  console.log('Value of property x remains unchanged:', obj.x)
}

// But, the property is still configurable
Object.defineProperty(obj, 'x', { value: 2 })
console.assert(
  obj.x === 2,
  'Property x should be 2 after re-defining its value',
  { x: obj.x }
)

// Change x from a data property to an accessor property
Object.defineProperty(obj, 'x', {
  get: function () {
    return 0
  },
})

console.assert(obj.x === 0, 'Property x should return 0 from its new getter', {
  x: obj.x,
})
