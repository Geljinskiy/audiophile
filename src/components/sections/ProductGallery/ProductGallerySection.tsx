// libs imports
import React from 'react';
// local imports
import { ProductImage } from 'utils';
import { GalleryItem, Container, Section } from 'components';
import css from './ProductGallerySection.module.scss';

type ProductGallerySectionProps = {
  images: ProductImage[];
  productName: string;
};

const ProductGallerySection: React.FC<ProductGallerySectionProps> = ({
  images,
  productName,
}) => {
  return (
    <Container>
      <Section className={css.section}>
        {images.map((image, inx) => {
          return (
            <GalleryItem
              className={images.length - 1 !== inx && css.imageBottomSpc}
              key={image.mobileImg}
              {...image}
              productName={productName}
              large={inx===2 && true}
            />
          );
        })}
      </Section>
    </Container>
  );
};

export default ProductGallerySection;
