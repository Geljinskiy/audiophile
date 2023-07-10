// libs imports
import { Dispatch, SetStateAction } from 'react';
// local imports
import css from './CartGood.module.scss';
import { FormCunter } from '../FormElements';
import { CartItem } from 'utils';
import { setCartItem } from 'utils';

type CartGoodProps = CartItem & {
  setCart?: Dispatch<SetStateAction<CartItem[]>>;
  counter: boolean;
  productIcon: string;
};

const CartGood = ({
  productName,
  productPrice,
  productQuantity,
  counter,
  productIcon,
  setCart,
}: CartGoodProps) => {
  const addGoodhandler = () => {
    const item = {
      productName,
      productQuantity: productQuantity + 1,
      productPrice,
    };
    setCartItem(item);
    setCart?.(JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]);
  };
  const removeGoodhandler = () => {
    const item = {
      productName,
      productPrice,
      productQuantity: productQuantity - 1,
    };
    setCartItem(item);
    setCart?.(JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]);
  };
  return (
    <>
      <div className={css.goodInf}>
        <div className={css.imageWrap}>
          <img
            width={36}
            className={css.image}
            src={productIcon}
            alt={productName}
          />
        </div>
        <p className={css.name}>{productName}</p>
        <span className={css.price}>$ {productPrice}</span>
      </div>
      {counter ? (
        <FormCunter
          fieldValue={productQuantity}
          addHangler={addGoodhandler}
          removeHangler={removeGoodhandler}
        />
      ) : (
        <span className={css.quantity}>x{productQuantity}</span>
      )}
    </>
  );
};

export default CartGood;
