const singleton = (function () {
  let instance = null

  const privateVariable = {
    name: 'Privete Value',
  }

  function privateMethod() {
    return privateVariable
  }

  function init() {
    return {
      publicMethod() {
        return privateMethod()
      },
      publicVariable: {
        title: 'The Singleton Pattern',
      },
    }
  }

  return {
    getInstance() {
      if (!instance) {
        instance = init()
      }

      return instance
    },
  }
})()

const single = singleton.getInstance()

console.log(single.publicMethod())
console.log(single.publicVariable)

const anotherSingle = singleton.getInstance()
const isVerified = single === anotherSingle
console.assert(
  isVerified,
  'The instances should be identical for a true singleton'
)
