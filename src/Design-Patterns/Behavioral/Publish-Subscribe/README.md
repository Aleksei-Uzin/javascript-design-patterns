# Publish–Subscribe (Pub/Sub) Pattern

**The Publish–Subscribe (Pub/Sub)** is essentially a more decoupled variation of the [Observer](../Observer/) pattern:

- In Observer, observers subscribe directly to a specific subject.

- In Pub/Sub, subscribers listen to topics, and publishers emit events to those topics through [PubSub object](./src/core/PubSub.js).

🔗 **[Live Demo](https://publish-subscribe-pattern.netlify.app/)**

## Observer vs Publish-Subscribe

| Aspect                  | **Observer Pattern**                         | **Publish–Subscribe Pattern**                            |
| ----------------------- | -------------------------------------------- | -------------------------------------------------------- |
| **Communication**       | Direct: subject - observers                  | Indirect: publisher - topic - subscribers                |
| **Coupling**            | Tight (subject knows observers)              | Loose (publishers and subscribers never know each other) |
| **Topology**            | One-to-Many                                  | Many-to-Many                                             |
| **Subscription Target** | A concrete object instance                   | A named topic, or message type                           |
| **Use Case**            | Small, object‑oriented systems               | Larger, decoupled, event‑driven systems                  |
| **Scalability**         | Limited (1 subject - many observers)         | High (many publishers - many subscribers)                |
| **Flexibility**         | Lower - observers tied to a specific subject | Higher - any publisher can emit to any topic             |
| **Typical Examples**    | UI components observing model changes        | Event buses, message queues, microservices               |

## Resources

- [geeksforgeeks: Pub/Sub Architecture](https://www.geeksforgeeks.org/system-design/what-is-pub-sub/)
- [microsoft: Publisher-Subscriber pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber)

## Running the Project

```bash
# Navigate to the project folder
cd src/Design-Patterns/Behavioral/Publish-Subscribe

# Install dependencies
npm install

# Start development server with HMR
npm start

# Build for production
npm run build
```
