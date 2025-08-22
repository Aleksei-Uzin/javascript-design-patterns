/**
 * Some Commands can implement simple operations on their own
 *
 */
class SimpleCommand {
  #payload

  constructor(payload) {
    this.#payload = payload
  }

  execute() {
    console.log(`SimpleCommand: simple things like printing (${this.#payload})`)
  }
}

/**
 * The Receiver class contains some business logic.
 * They know how to perform all kinds of operations, associated with carrying out a request.
 * Any class may serve as a Receiver.
 *
 */
class Receiver {
  doSomething(a) {
    console.log(`Receiver A: working on (${a})`)
  }

  doSomethingElse(b) {
    console.log(`Receiver B: working on (${b})`)
  }
}

class ComplexCommand {
  #receiver
  #a
  #b

  // Command can delegate more complex operations to other objects - receivers
  constructor(receiver, a, b) {
    this.#receiver = receiver
    this.#a = a
    this.#b = b
  }

  execute() {
    console.log('ComplexCommand: should be done by a receiver object')
    this.#receiver.doSomething(this.#a)
    this.#receiver.doSomethingElse(this.#b)
  }
}

/**
 * The Invoker sends a request to the command
 *
 */
class Invoker {
  #onStart
  #onFinish

  /**
   * @param {SimpleCommand | ComplexCommand} command
   */
  setOnStart(command) {
    this.#onStart = command
  }

  /**
   * @param {SimpleCommand | ComplexCommand} command
   */
  setOnFinish(command) {
    this.#onFinish = command
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   *
   */
  doSomethingImportant() {
    if (this.#isCommand(this.#onStart)) {
      this.#onStart.execute()
    }

    if (this.#isCommand(this.#onFinish)) {
      this.#onFinish.execute()
    }
  }

  #isCommand(object) {
    return object && typeof object.execute === 'function'
  }
}

// --- Client Code ---
const invoker = new Invoker()
const receiver = new Receiver()

invoker.setOnStart(new SimpleCommand('Say Hi!'))
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'))
invoker.doSomethingImportant()
