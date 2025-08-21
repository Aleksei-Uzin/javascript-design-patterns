import { Image, Link, Text } from '../../utils/index.js'

/**
 * The Factory Method pattern
 *
 * Key Advantages:
 * - Extensibility (Open / Closed Principle): introducing new product types (e.g. Video element) without changing the existing ElementFactory.
 *
 * - Decoupling: the client code doesn't need to know about the concrete product.
 *   It just calls getElement() and gets the right object.
 *
 * - Specialization: it allows to create a family of related factories, each responsible for creating a specific type of object,
 *   leading to a more organized and specialized creation process.
 *
 */

const url = 'http://www.example.com'

function ElementFactory() {}
ElementFactory.prototype.elementClass = Image
ElementFactory.prototype.getElement = function (option) {
  return new this.elementClass(option)
}

// Usage
const elementFactory = new ElementFactory()
const imageElement = elementFactory.getElement(url)

// Modify a ElementFactory instance to use the Link class
elementFactory.elementClass = Link
const linkElement = elementFactory.getElement(url)

// Subclass TextFactory to create a factory class that builds Text elements
function TextFactory() {}
TextFactory.prototype = new ElementFactory()
TextFactory.prototype.elementClass = Text

const textFactory = new TextFactory()
const textElement = textFactory.getElement(url)
