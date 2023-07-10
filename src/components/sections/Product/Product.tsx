// libs imports
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
// local imports
import { Container, Section, Button, FormCunter } from 'components';
import css from './Product.module.scss';
import { ProductProps, ProductLinkProps, setCartItem } from 'utils';

const Product: React.FC<ProductProps & { cartQuantity: number }> = ({
  productImage,
  productPrice,
  productDesc,
  productName,
  newProduct,
  cartQuantity,
}) => {
  const { desktopImg, tabletImg, mobileImg } = productImage;

  const [quantity, setQuantity] = useState<number>(cartQuantity);

  useEffect(() => {
    setQuantity(cartQuantity);
  }, [cartQuantity]);

  const addGoodhandler = () => {
    setQuantity(prev => (prev += 1));
  };
  const removeGoodhandler = () => {
    setQuantity(prev => (prev > 0 ? (prev -= 1) : prev));
  };

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
          <p className={css.price}>$ {productPrice}</p>
          <div className={css.cartAdding}>
            <FormCunter
              className={css.counter}
              fieldValue={quantity}
              addHangler={addGoodhandler}
              removeHangler={removeGoodhandler}
            />
            <Button
              className={css.btn}
              styling="color"
              onClick={() =>
                setCartItem({
                  productName,
                  productQuantity: quantity,
                  productPrice,
                })
              }
              disabled={quantity <= 0}
            >
              add to cart
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Product;
