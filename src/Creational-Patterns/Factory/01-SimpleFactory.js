import { Image, Link, Text } from '../../utils/index.js'

/**
 * Simple Factory pattern.
 *
 * Key Advantages:
 * - Decoupling: the client code doesn't need to know about the specific constructors.
 *   It only needs to know the factory function and the string identifier for the type it wants.
 *
 * - Centralization: all creation logic is in one place.
 *
 * - Flexibility: it's easy to change what gets created at runtime.
 *
 */

const dom = { Image, Link, Text }
const url = 'http://www.example.com'

dom.factory = function (type, url) {
  return new dom[type](url)
}

// Usage
const image = dom.factory('Image', url)
const link = dom.factory('Link', url)
const text = dom.factory('Text', url)
