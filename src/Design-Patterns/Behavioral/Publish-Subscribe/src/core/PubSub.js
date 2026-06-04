export default class PubSub {
  #topics = Object.create(null);

  #subUid = 0;

  publish(topic, data) {
    const list = this.#topics[topic];
    if (!list || list.length === 0) return false;

    let len = list.length;

    while (len--) {
      list[len].handler(topic, data);
    }

    return this;
  }

  subscribe(topic, handler) {
    if (!this.#topics[topic]) {
      this.#topics[topic] = [];
    }

    const token = this.#subUid++;

    this.#topics[topic].push({ token, handler });

    return token;
  }

  unsubscribe(token) {
    for (const topic of Object.keys(this.#topics)) {
      const list = this.#topics[topic];

      if (list) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].token === token) {
            list.splice(i, 1);
            return token;
          }
        }
      }
    }

    return this;
  }
}
