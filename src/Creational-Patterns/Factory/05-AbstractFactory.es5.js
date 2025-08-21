import { Image, Link, Text } from '../../utils/index.js'

const AbstractElementFactory = (function () {
  const types = {}

  return {
    getElement(type, props) {
      const Element = types[type]

      return Element ? new Element(props) : null
    },
    registerElement(type, Element) {
      const proto = Element.prototype

      // Only register classes that fulfill the requirements
      if (proto.insert) {
        types[type] = Element
      }

      return AbstractElementFactory
    },
  }
})()

// Usage
const url = 'http://www.example.com'
AbstractElementFactory.registerElement('Image', Image)
AbstractElementFactory.registerElement('Link', Link)
AbstractElementFactory.registerElement('Text', Text)

const image = AbstractElementFactory.getElement('Image', url)
const link = AbstractElementFactory.getElement('Link', url)
const text = AbstractElementFactory.getElement('Text', url)

console.log(link instanceof Link)
