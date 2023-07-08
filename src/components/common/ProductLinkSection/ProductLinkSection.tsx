// libs imports
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// local imports
import css from './ProductLink.module.scss';
import { Button, Container, Description, Section } from 'components';
import { ProductLinkProps } from 'utils';

const ProductLinkSection: React.FC<
  ProductLinkProps & { reverse?: boolean }
> = ({ productDesc, img, productName, target, newProduct, reverse }) => {
  const { desktopImg, tabletImg, mobileImg } = img;
  const location = useLocation();
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
          <Description className={css.description}>{productDesc!}</Description>
          <Link className={css.link} to={target} state={{ from: location }}>
            <Button className={css.btn} styling="color">
              See product
            </Button>
          </Link>
        </div>
      </Section>
    </Container>
  );
};

export default ProductLinkSection;
