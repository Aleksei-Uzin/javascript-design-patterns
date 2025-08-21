import { Image, Link, Text } from '../../utils/index.js'

class AbstractElementFactory {
  constructor() {
    this.types = {}
  }

  getElement(type, props) {
    const ElementClass = this.types[type]
    return ElementClass ? new ElementClass(props) : null
  }

  registerElement(type, ElementClass) {
    const proto = ElementClass.prototype

    // Only register classes that fulfill the requirements
    if (proto.insert) {
      this.types[type] = ElementClass
    }

    return this
  }
}

// Usage
const url = 'http://www.example.com'
const abstractElementFactory = new AbstractElementFactory()
abstractElementFactory.registerElement('Image', Image)
abstractElementFactory.registerElement('Link', Link)
abstractElementFactory.registerElement('Text', Text)

const image = abstractElementFactory.getElement('Image', url)
const link = abstractElementFactory.getElement('Link', url)
const text = abstractElementFactory.getElement('Text', url)

console.log(link instanceof Link)
