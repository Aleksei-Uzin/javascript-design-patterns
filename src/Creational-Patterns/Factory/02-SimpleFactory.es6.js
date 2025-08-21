import { Image, Link, Text } from '../../utils/index.js'

/**
 * Simple Factory with an ES6 Class
 *
 * Key Advantages:
 * - Centralization: all object creation logic is consolidated within the `createElement` method.
 *
 * - Decoupling: the client code that uses the factory does not need to know about
 *   the concrete classes.
 *
 * - Simplicity: This approach is straightforward to implement and understand.
 *
 * This differs from the classic Factory Method pattern, which typically involves
 * creating a factory superclass and having subclasses override a method to produce
 * different types of objects.
 *
 */

class ElementFactory {
  createElement(options) {
    const { elementType, ...rest } = options
    let elementClass

    switch (elementType) {
      case 'Image':
        elementClass = Image
        break
      case 'Link':
        elementClass = Link
        break
      default:
        elementClass = Text
        break
    }

    return new elementClass(rest)
  }
}

// Usage
const url = 'http://example.com/image.png'
const elementFactory = new ElementFactory()
const image = elementFactory.createElement({ elementType: 'Image', url })
const link = elementFactory.createElement({ elementType: 'Link', url })
const text = elementFactory.createElement({ elementType: 'Text', url })
