const system = {
  star: {
    primary: {
      mass: 1,
      radius: 1,
    },
  },
  planets: [{ name: 'earth', axis: 1, moons: [{ name: 'Luna' }] }],
  frostline: 4.35,
  name: 'Sol',
};

const deepclone = (original: Object | Array<unknown>) => {
  const entries = Object.entries(original);
  const clone = Array.isArray(original) ? [] : {};

  for (const [key, value] of entries) {
    if (typeof value === 'object') {
      clone[key] = deepclone(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
};

const deepCloneReducer = (original: unknown) => {
  return Object.entries(original).reduce(
    (acc, [key, value]) => {
      acc[key] = typeof value === 'object' ? deepCloneReducer(value) : value;

      return acc;
    },
    Array.isArray(original) ? [] : {}
  );
};

const clone = deepCloneReducer(system);
system.star.primary.mass = 2;
system.name = 'Alpha Centari';

console.log('system');
console.log(system);
console.log('clone');
console.log(clone);

export {};
