import { document } from './domSetup.js'

class Element {
  constructor(url) {
    this.url = url
  }
}

export class Image extends Element {
  insert(where) {
    const img = document.createElement('img')
    img.src = this.url
    where.appendChild(img)
  }
}

export class Link extends Element {
  insert(where) {
    const link = document.createElement('a')
    link.href = this.url
    link.appendChild(document.createTextNode(this.url))
    where.appendChild(link)
  }
}

export class Text extends Element {
  insert(where) {
    const txt = document.createTextNode(this.url)
    where.appendChild(txt)
  }
}
