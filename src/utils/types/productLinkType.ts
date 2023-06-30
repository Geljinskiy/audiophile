export type ProductImage = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
};

export type ProductLinkProps = {
  img: ProductImage;
  productName: string;
  newProduct?: boolean;
  productDesc?: string;
  target: string;
};
