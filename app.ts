/* Object Types */
// Generic object type
const person: object = {
  name: "Rio",
  age: 25,
};

// Specific object type
const personImproved: {
  name: string;
  age: number;
} = {
  name: "Rio",
  age: 25,
};

// Nested object type
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(personImproved.name);
