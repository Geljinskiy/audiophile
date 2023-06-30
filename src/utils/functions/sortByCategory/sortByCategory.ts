type MyObject = {
  productCategory: string;
};

const sortByCategory = (category: string, arr: MyObject[]) => {
  return arr.sort((a, b) => {
    if (a.productCategory === category && b.productCategory !== category) {
      return -1;
    } else if (
      a.productCategory !== category &&
      b.productCategory === category
    ) {
      return 1;
    }
    return 0;
  });
};

export default sortByCategory;
