import { ProductLinkProps, ProductImage } from './productLinkType';

export type InBoxType = {
  [key: string]: number;
};

export type ProductProps = ProductLinkProps & {
  price: number;
  features: string | string[];
  gallery: ProductImage[];
  inBox: InBoxType[];
  imgWihtoutShadow: ProductImage;
  productCategory: 'headphones' | 'earphones' | 'speakers';
};
