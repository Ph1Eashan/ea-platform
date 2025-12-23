const store: Record<string, unknown> = Object.create(null);

export function setData(key: string, value: unknown) {
  store[key] = value;
}

export function getData(key: string): unknown {
  return store[key];
}

export function getAllData() {
  return store;
}
