export function getPrototypes(object, fn) {
  do {
    object = Object.getPrototypeOf(object)
    fn(object)
  } while (object)
}
