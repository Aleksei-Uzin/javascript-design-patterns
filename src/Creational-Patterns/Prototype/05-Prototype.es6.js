/**
 * The base Prototype class. In this example, a general Shape.
 * It defines the `clone` method that all concrete prototypes must implement.
 *
 * We use a "copy constructor" pattern here. The constructor can accept
 * another instance of a Shape and copy its data, which simplifies the
 * cloning process.
 *
 */
class Shape {
  constructor({ x = 0, y = 0, color = 'black' } = {}) {
    this.x = x
    this.y = y
    this.color = color
  }

  // The clone method. The implementation will vary for each concrete type.
  clone() {
    throw new Error('This method must be implemented by subclasses')
  }
}

// A concrete prototype
class Rectangle extends Shape {
  constructor({ width = 0, height = 0, ...source } = {}) {
    super(source)
    this.width = width
    this.height = height
  }

  clone() {
    // The `new this.constructor(this)` technique - creates a new instance
    // of the correct subclass (Rectangle) and passes the original
    // object to its copy-constructor, ensuring all properties are copied.
    return new this.constructor(this)
  }
}

// Another concrete prototype
class Circle extends Shape {
  constructor({ radius, ...source } = {}) {
    super(source)
    this.radius = radius

    // Handling complex objects and circular references.
    if (source && source.circularReference) {
      // When cloning, create a new component and update its back-reference
      // to point to the *new* circle object (the clone).
      this.circularReference = {
        ...source.circularReference,
        prototype: this, // `this` is the new clone here.
      }
    } else {
      // For a brand new object, create the component with a back-reference.
      this.circularReference = {
        name: 'Component for Circle',
        prototype: this,
      }
    }
  }

  clone() {
    return new this.constructor(this)
  }
}

// --- Client Code ---
const shapes = []

const circle = new Circle()
circle.x = 10
circle.y = 20
circle.radius = 15
circle.color = 'red'
shapes.push(circle)

// The clone is a new, independent object
const anotherCircle = circle.clone()
shapes.push(anotherCircle)

const rectangle = new Rectangle()
rectangle.width = 10
rectangle.height = 20
rectangle.color = 'blue'
shapes.push(rectangle)

// Create copies of all shapes using the `clone` method
const shapesCopy = shapes.map(shape => shape.clone())

for (let i = 0; i < shapes.length; i++) {
  const original = shapes[i]
  const copy = shapesCopy[i]

  if (original === copy) {
    console.log('❌ Shape objects are the same (reference). Cloning failed')
  } else {
    console.log('✅ Shape objects are different. Cloning successful')
  }
}
