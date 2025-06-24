export enum ObjectSerializerMode {
  snakeToCamel = "snakeToCamel",
  camelToSnake = "camelToSnake"
}

export const objectKeySerializer = (item: unknown, mode: ObjectSerializerMode): unknown => {
  let replacer: (key: string) => void;

  switch(mode) {
    case ObjectSerializerMode.snakeToCamel: 
      replacer = (key) => key.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, ''))
    case ObjectSerializerMode.camelToSnake: 
      replacer = (key) => key.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`);
  }

  if (Array.isArray(item)) {
    return item.map((el: unknown) => objectKeySerializer(el, mode));
  } else if (typeof item === 'function' || item !== Object(item)) {
    return item;
  }
  return Object.fromEntries(
    Object.entries(item as Record<string, unknown>).map(
      ([key, value]: [string, unknown]) => [
        replacer(key),
        objectKeySerializer(value, mode),
      ],
    ),
  );
};
