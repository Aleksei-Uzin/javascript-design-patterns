/**
 * The Flyweight class contains the portion of the original object's state that
 * can be shared between multiple objects. This is the INTRINSIC state.
 */
class TreeType {
  #name
  #color
  #texture

  constructor(name, color, texture) {
    this.#name = name
    this.#color = color
    this.#texture = texture
  }

  /**
   * The flyweight's method accepts the EXTRINSIC state as arguments.
   * The canvas to draw on (simulated).
   */
  draw(canvas, x, y) {
    console.log(
      `A ${this.#color} ${this.#name} tree with ${
        this.#texture
      } texture at (${x}, ${y}) coords`
    )
  }
}

/**
 * The Flyweight Factory creates and manages the Flyweight objects.
 */
class TreeFactory {
  static #treeTypes = {}

  static #getKey(name, color, texture) {
    return `${name}_${color}_${texture}`
  }

  static getTreeType(name, color, texture) {
    const key = this.#getKey(name, color, texture)

    if (!(key in this.#treeTypes)) {
      this.#treeTypes[key] = new TreeType(name, color, texture)
    }

    return this.#treeTypes[key]
  }

  static listTreeTypes() {
    const trees = Object.keys(this.#treeTypes)
    console.log(`TreeFactory: have ${trees.length} tree types`)

    for (const tree of trees) {
      console.log(tree)
    }
  }
}

/**
 * The Context class contains the extrinsic state, unique for each object.
 * An object of this class will contain a reference to a flyweight object.
 */
class Tree {
  #x
  #y
  #type

  constructor(x, y, type) {
    this.#x = x
    this.#y = y
    this.#type = type
  }

  draw(canvas) {
    this.#type.draw(canvas, this.#x, this.#y)
  }
}

/**
 * Forest that plants and draws trees.
 */
class Forest {
  #trees = []

  plantTree(x, y, name, color, texture) {
    const type = TreeFactory.getTreeType(name, color, texture)
    const tree = new Tree(x, y, type)
    this.#trees.push(tree)
  }

  draw(canvas) {
    for (const tree of this.#trees) {
      tree.draw(canvas)
    }
    console.log('--- Forest Drawn ---')
  }
}

// --- Client Code ---
const forest = new Forest()
const canvas = { id: 'main-canvas' } // A mock canvas object

forest.plantTree(10, 20, 'Oak', 'Green', 'Rough Bark')
forest.plantTree(50, 100, 'Pine', 'Dark Green', 'Needle Texture')
forest.plantTree(25, 75, 'Oak', 'Green', 'Rough Bark') // Reusing Oak
forest.plantTree(150, 30, 'Pine', 'Dark Green', 'Needle Texture') // Reusing Pine

forest.draw(canvas)
TreeFactory.listTreeTypes()
