const singleton = function () {
  const privateVariable = {
    name: 'Privete Value',
  }

  function privateMethod() {
    return privateVariable
  }

  return {
    publicMethod() {
      return privateMethod()
    },
    publicVariable: {
      title: 'The Singleton Pattern',
    },
  }
}

const single = singleton()

console.log(single.publicMethod())
console.log(single.publicVariable)

const anotherSingle = singleton()
const isVerified = single === anotherSingle
console.assert(
  isVerified,
  'The instances are not identical because this is not a true singleton'
)
