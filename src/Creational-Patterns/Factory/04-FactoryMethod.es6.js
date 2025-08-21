import { Image, Link, Text } from '../../utils/index.js'

/**
 * The Factory Method pattern with an ES6 Class
 *
 */

class ElementFactory {
  constructor() {
    this.elementClass = Text
  }

  createElement(options) {
    const { elementType, ...rest } = options

    switch (elementType) {
      case 'Image':
        this.elementClass = Image
        break
      case 'Link':
        this.elementClass = Link
        break
    }

    return new this.elementClass(rest)
  }
}

// Usage
const url = 'http://example.com/image.png'
const elementFactory = new ElementFactory()
const image = elementFactory.createElement({ elementType: 'Image', url })
const link = elementFactory.createElement({ elementType: 'Link', url })
const text = elementFactory.createElement({ elementType: 'Text', url })

// Subclass ImageFactory to create a factory class that builds Links
class ImageFactory extends ElementFactory {
  constructor() {
    super()
    this.elementClass = Image
  }
}

const imageFactory = new ImageFactory()
const myImage = imageFactory.createElement({ url })
console.log(myImage instanceof Image)
