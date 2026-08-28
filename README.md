# JavaScript Design Patterns

This repository contains practical examples of software design patterns and JavaScript fundamentals, with executable test examples.

## Domains

<details>
<summary><strong>JavaScript Fundamentals</strong></summary>

- [Variables](./src/JavaScript-Fundamentals/Variables/)
- [Operators and Expressions](./src/JavaScript-Fundamentals/Operators/)
- [Functions](./src/JavaScript-Fundamentals/Functions/)
- [Loops](./src/JavaScript-Fundamentals/Loops/)

---

- [Objects](./src/JavaScript-Fundamentals/Objects/)
- [Strings](./src/JavaScript-Fundamentals/Strings/)
- [Arrays](./src/JavaScript-Fundamentals/Arrays/)
- [TypedArray](./src/JavaScript-Fundamentals/TypedArray/)

---

- [JSON](./src/JavaScript-Fundamentals/JSON-Data-Format/)
- [Iterators and Generators](./src/JavaScript-Fundamentals/Iterators-and-Generators/)

---

- [Promises](./src/JavaScript-Fundamentals/Promises/)

</details>

<details>
<summary><strong>Object-oriented programming in JavaScript</strong></summary>

- [OOP Principles (characteristics)](./src/OOP/OOP-Principles/)

</details>

### Design Patterns

<details>
<summary><strong>Creational Patterns</strong></summary>

- [Singleton](./src/Design-Patterns/Creational/Singleton/)

</details>

<details>
<summary><strong>Behavioral Patterns</strong></summary>

- [Observer](./src/Design-Patterns/Behavioral/Observer/)
- [Publish–Subscribe (Pub/Sub)](./src/Design-Patterns/Behavioral/Publish-Subscribe/)

</details>

## Getting Started

**Prerequisites:** Node.js 20.2+

### Installation

```bash
git clone git@github.com:Aleksei-Uzin/javascript-design-patterns.git
cd javascript-design-patterns
npm install
```

### npm Scripts

- `npm run format` — Format with Prettier.
- `npm run format:check` — Check formatting.
- `npm run lint` — Run ESLint.
- `npm run lint:fix` — Fix ESLint issues.
- `npm test` — Run tests.
- `npm run test:watch` — Run tests in watch mode.
- `npm run test:coverage` — Run tests with coverage.
- `npm run validate` — Run linting, formatting checks, and tests.

`npm run prepare` runs automatically after installation to set up Husky hooks.
