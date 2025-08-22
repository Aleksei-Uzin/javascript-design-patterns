/**
 * Components provide default implementations of the operations
 */
class Component {
  operation() {
    return 'Concrete Component'
  }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators.
 */
class Decorator {
  #component

  constructor(component) {
    this.#component = component
  }

  // Decorator delegates all work to the wrapped component.
  operation() {
    return this.#component.operation()
  }
}

class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This simplifies extension of decorator classes.
   */
  operation() {
    return `ConcreteDecoratorA: ${super.operation()}`
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB: ${super.operation()}`
  }
}

// --- Client Code ---
const baseComponent = new Component()
console.log(`Result: ${baseComponent.operation()}`)

const decorator1 = new ConcreteDecoratorA(baseComponent)
console.log(`Result for the decorated component: ${decorator1.operation()}`)

const decorator2 = new ConcreteDecoratorB(decorator1)
console.log(`Result for the decorated component: ${decorator2.operation()}`)
