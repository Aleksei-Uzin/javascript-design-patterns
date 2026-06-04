import FIELDS from '../constants/fields.js';

export default class UserTableSubscriber {
  #pubsub;

  #tbody;

  #pendingRow = {};

  #subscriptions = {};

  constructor(pubsub, tbody) {
    this.#pubsub = pubsub;
    this.#tbody = tbody;

    for (const [field, value] of Object.entries(FIELDS)) {
      this.#subscribe(field, value, (topic, val) => {
        this.#pendingRow[field] = val;
        this.#appendRow();
      });
    }
  }

  #subscribe(field, topic, handler) {
    const token = this.#pubsub.subscribe(topic, handler);
    this.#subscriptions[field] = { token, topic, handler };
  }

  #appendRow() {
    const { id, name, email } = this.#pendingRow;
    const emailSubscribed = this.isSubscribed('email');

    if (id == null || name == null) return;
    if (emailSubscribed && email == null) return;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      ${`<td>${emailSubscribed ? email : '-'}</td>`}
    `;

    this.#tbody.appendChild(tr);
    this.#pendingRow = {};
  }

  unsubscribe(field) {
    const sub = this.#subscriptions[field];

    if (!sub?.token) return;

    this.#pubsub.unsubscribe(sub.token);
    sub.token = null;
  }

  resubscribe(field) {
    const sub = this.#subscriptions[field];

    if (!sub || sub.token) return;

    sub.token = this.#pubsub.subscribe(sub.topic, sub.handler);
  }

  isSubscribed(field) {
    return !!this.#subscriptions[field]?.token;
  }
}
