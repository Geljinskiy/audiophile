// libs imports
import React from 'react';
// local imports
import css from './ProductLink.module.scss';
import { Button, Container, Section } from 'components';
import { ProductLinkProps } from 'utils';

const ProductLink: React.FC<ProductLinkProps & { reverse?: boolean }> = ({
  productDesc,
  img,
  productName,
  target,
  newProduct,
  reverse,
}) => {
  const { desktopImg, tabletImg, mobileImg } = img;
  return (
    <Container>
      <Section className={`${css.section} ${reverse && css.reverse}`}>
        <div className={css.imageWrap}>
          <picture>
            <source
              media="(max-width: 767.9px)"
              width="220"
              srcSet={mobileImg}
            />
            <source
              media="(max-width: 1439.9px)"
              width="220"
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
          <h2 className={css.heading}>{productName}</h2>
          <span className={css.description}>{productDesc}</span>
          <Button className={css.btn} styling="color">
            See Product
          </Button>
        </div>
      </Section>
    </Container>
  );
};

export default ProductLink;
