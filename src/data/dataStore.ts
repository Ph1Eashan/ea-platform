type Context = Record<string, unknown>;

const globalStore: Record<string, unknown> = Object.create(null);
const contextStack: Context[] = [];

export function setData(key: string, value: unknown) {
  globalStore[key] = value;
}

export function getAllData(): Record<string, unknown> {
  return {
    ...globalStore,
    ...(contextStack[contextStack.length - 1] ?? {}),
  };
}

export function pushContext(ctx: Context) {
  contextStack.push(ctx);
}

export function popContext() {
  contextStack.pop();
}
