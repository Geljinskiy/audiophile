// libs imports
import React from 'react';
// local imports
import { ProductLinkSection } from 'components';
import { ProductLinkProps } from 'utils';

type ProductLinksProps = {
  product: ProductLinkProps[];
};

const ProductLinks: React.FC<ProductLinksProps> = ({ product }) => {
  return (
    <>
      {product.map((item, inx) => {
        return (
          <ProductLinkSection
            reverse={inx % 2 !== 0}
            key={item.productName}
            {...item}
          />
        );
      })}
    </>
  );
};

export default ProductLinks;
