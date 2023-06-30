// libs imports
import React from 'react';
// local imports
import { Container, Section, Button, FormCunter } from 'components';
import css from './Product.module.scss';
import { ProductLinkProps } from 'utils';

export type ProductProps = ProductLinkProps & {
  price: number;
};

const Product: React.FC<ProductProps> = ({
  img,
  price,
  productDesc,
  productName,
  target,
  newProduct,
}) => {
  const { desktopImg, tabletImg, mobileImg } = img;

  return (
    <Container>
      <Section className={css.section}>
        <div className={css.imageWrap}>
          <picture>
            <source
              media="(max-width: 767.9px)"
              width="180"
              srcSet={mobileImg}
            />
            <source
              media="(max-width: 1439.9px)"
              width="180"
              srcSet={tabletImg}
            />
            <source
              media="(min-width: 1440px)"
              width="350"
              srcSet={desktopImg}
            />
            <img className={css.img} src={mobileImg} alt={productName} />
          </picture>
        </div>

        <div className={css.textSide}>
          {newProduct && <span className={css.newProduct}>new product</span>}
          <h1 className={css.heading}>{productName}</h1>
          <span className={css.description}>{productDesc}</span>
          <p className={css.price}>$ {price}</p>
          <div className={css.cartAdding}>
            <FormCunter fieldValue={1} />
            <Button className={css.btn} styling="color">
              add to cart
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Product;
