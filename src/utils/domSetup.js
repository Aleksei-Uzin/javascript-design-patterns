import jsdom from 'jsdom'

const { JSDOM } = jsdom
const domInstance = new JSDOM('<!DOCTYPE html>')

export const { document } = domInstance.window
