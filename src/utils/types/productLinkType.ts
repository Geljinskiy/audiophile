import { ProductImage } from './productImageType';

export type ProductLinkProps = {
  productImage: ProductImage;
  productName: string;
  productTarget: string;
};

export type FullProductLinkProps  = ProductLinkProps & {
  newProduct: boolean;
  productDesc: string;
};
