import PubSub from './core/PubSub.js';
import UserTableSubscriber from './subscribers/UserTableSubscriber.js';
import './styles/style.css';

const pubsub = new PubSub();
const controls = document.querySelector('#controls');
const tbody = document.querySelector('tbody');
const unsubscribeEmailBtn = document.querySelector('#unsubscribe-email');

const userTable = new UserTableSubscriber(pubsub, tbody);

async function fetchUser() {
  const id = Math.ceil(Math.random() * 10);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return user;
}

unsubscribeEmailBtn.addEventListener('click', () => {
  if (userTable.isSubscribed('email')) {
    userTable.unsubscribe('email');
    unsubscribeEmailBtn.textContent = 'subscribe';
    unsubscribeEmailBtn.classList.remove('unsubscribed');
    unsubscribeEmailBtn.classList.add('subscribed');
  } else {
    userTable.resubscribe('email');
    unsubscribeEmailBtn.textContent = 'unsubscribe';
    unsubscribeEmailBtn.classList.remove('subscribed');
    unsubscribeEmailBtn.classList.add('unsubscribed');
  }
});

controls.addEventListener('click', e => {
  if (!e.target.matches('button')) return;

  const { event } = e.target.dataset;

  if (event === 'fetch/user') {
    fetchUser().then(data => {
      pubsub.publish('display/id', data.id);
      pubsub.publish('display/name', data.name);
      pubsub.publish('display/email', data.email);
    });
  }
});
