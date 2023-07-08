// libs imports
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
// local imports
import { Container, Section, Button, FormCunter } from 'components';
import css from './Product.module.scss';
import { CartItem, ProductLinkProps, setCartItem } from 'utils';

export type ProductProps = ProductLinkProps & {
  price: number;
  setCart?: Dispatch<SetStateAction<CartItem[]>>;
  // quantity: number;
};

const Product: React.FC<ProductProps> = ({
  img,
  price,
  productDesc,
  productName,
  newProduct,
  icon,
  setCart,
}) => {
  const { desktopImg, tabletImg, mobileImg } = img;

  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setQuantity(0);
  }, [productName]);

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
          <p className={css.price}>$ {price}</p>
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
                  name: productName,
                  quantity,
                  img: icon,
                  price: price,
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
