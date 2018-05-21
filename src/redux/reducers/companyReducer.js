const arrProducts = [
  {
    id: 0,
    name: "PANADOL EXTRA 1",
    cost: 0,
    classify: 1
  },
  {
    id: 1,
    name: "PANADOL EXTRA 2",
    cost: 0,
    classify: 1
  },
  {
    id: 2,
    name: "KEM DUONG DA",
    cost: 0,
    classify: 2
  },
  {
    id: 3,
    name: "TRI MUN",
    cost: 0,
    classify: 2
  },
  {
    id: 4,
    name: "CHONG LAO HOA",
    cost: 0,
    classify: 2
  },
  {
    id: 5,
    name: "BONG GÒN",
    cost: 0,
    classify: 3
  },
  {
    id: 6,
    name: "TỦ KÍNH",
    cost: 0,
    classify: 3
  },
  {
    id: 7,
    name: "BÔNG NGOÁY TAI",
    cost: 0,
    classify: 3
  }
];

const productReducer = (state = arrProducts, action) => {
  switch (action.type) {
    default:
      return state;
  }
  return state;
};

export default productReducer;
