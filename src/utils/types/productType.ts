import { FullProductLinkProps } from './productLinkType';
import { ProductImage } from './productImageType';

export type InBoxType = {
  [key: string]: number;
};

export type ProductProps = FullProductLinkProps & {
  productPrice: number;
  productFeatures: string | string[];
  productGallery: ProductImage[];
  poroductInBox: InBoxType[];
  productImgWihtoutShadow: ProductImage;
  productCategory: 'headphones' | 'earphones' | 'speakers';
  productIcon: string;
};
