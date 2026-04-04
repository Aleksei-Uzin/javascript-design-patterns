describe('Cleanup with finally', () => {
  const cleanup = jest.fn();

  function* readFile() {
    try {
      yield 'Read line 1';
      yield 'Read line 2';
      yield 'Read line 3';
    } finally {
      cleanup();
    }
  }

  beforeEach(() => {
    cleanup.mockClear();
  });

  it('Should run finally block when iteration stops early', () => {
    const fileReader = readFile();

    for (const line of fileReader) {
      expect(line).toBe('Read line 1');
      break; // Triggers finally block
    }

    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('Should run finally block when return() is called explicitly', () => {
    const fileReader = readFile();

    expect(fileReader.next().value).toBe('Read line 1');
    fileReader.return(); // Explicitly terminate iterator

    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});
