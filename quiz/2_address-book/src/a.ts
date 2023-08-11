function fetchItems(): Promise<string[]> {
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(resolve => {
    resolve(items);
  });
}

fetchItems();
