import { getPrototypes } from '../../utils/index.js'

// objA inherits from Object.prototype
const objA = Object.create(Object.prototype)
objA.a = 1

// objB inherits from objA and Object.prototype
const objB = Object.create(objA)
objB.b = 2

// objC inherits from objA, objB and Object.prototype
const objC = Object.create(objB)
objC.c = 2

// getPrototypes(objC, console.log)
/**
 * { b: 2 }
 * { a: 1 }
 * [Object: null prototype] {}
 * null
 *
 */

/**
 * The Inheritance occurs when QUERYING properties but NOT when setting them.
 * It allows to selectively override inherited properties.
 *
 */

const objX = Object.create(objC)
objX.x = 10
objX.a = 15

getPrototypes(objX, console.log)
/**
 * { c: 2 }
 * { b: 2 }
 * { a: 1 }
 * [Object: null prototype] {}
 * null
 *
 */

// => 1: Verifying Prototype is Unmodified
console.log(objA.a)
