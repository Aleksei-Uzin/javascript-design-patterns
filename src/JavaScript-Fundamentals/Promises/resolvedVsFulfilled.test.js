describe('Resolved vs Fulfilled Promises', () => {
  it('Demonstrates resolved promise waits for inner promise to fulfill', async () => {
    const events = [];

    function fetchUser() {
      events.push('1. fetchUser started');

      return Promise.resolve({ id: 1, name: 'Aleksei' });
    }

    function saveUserToDatabase(user) {
      events.push('3. saveUserToDatabase started');

      return new Promise(resolve => {
        setTimeout(() => {
          events.push('4. database save completed');

          resolve({ saved: true, user });
        }, 1);
      });
    }

    // When first then() returns saveUserToDatabase(user):
    // - The outer promise is RESOLVED (locked-in to inner promise state)
    // - But NOT YET FULFILLED (waiting for setTimeout to complete)
    // - Second then() only runs after inner promise fulfills
    const processedUser = fetchUser()
      .then(user => {
        events.push('2. first then() runs');

        return saveUserToDatabase(user); // Return pending promise
      })
      .then(result => {
        events.push('5. second then() runs after database save');

        return `Saved ${result.user.name}`;
      });

    // Synchronous phase: only fetchUser has run, then() callbacks are queued
    expect(events).toEqual(['1. fetchUser started']);

    // Await fulfillment of the entire chain
    const result = await processedUser;

    expect(events).toEqual([
      '1. fetchUser started',
      '2. first then() runs',
      '3. saveUserToDatabase started',
      '4. database save completed',
      '5. second then() runs after database save',
    ]);

    expect(result).toBe('Saved Aleksei');
  });
});
