// libs imports
import { Dispatch, SetStateAction } from 'react';
// local imports
import css from './CartGood.module.scss';
import { FormCunter } from '../FormElements';
import { CartItem } from 'utils';
import { setCartItem } from 'utils';

type IProps = CartItem & {
  setCart?: Dispatch<SetStateAction<CartItem[]>>;
  counter?: boolean;
};

const CartGood = ({ name, price, img, quantity, counter, setCart }: IProps) => {
  const addGoodhandler = () => {
    const item = { name, quantity: quantity + 1, price, img };
    setCartItem(item);
    setCart?.(JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]);
  };
  const removeGoodhandler = () => {
    const item = { name, price, quantity: quantity - 1, img };
    setCartItem(item);
    setCart?.(JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]);
  };
  return (
    <>
      <div className={css.goodInf}>
        <div className={css.imageWrap}>
          <img width={36} className={css.image} src={img} alt={name} />
        </div>
        <p className={css.name}>{name}</p>
        <span className={css.price}>$ {price}</span>
      </div>
      {counter ? (
        <FormCunter
          fieldValue={quantity}
          addHangler={addGoodhandler}
          removeHangler={removeGoodhandler}
        />
      ) : (
        <span className={css.quantity}>x{quantity}</span>
      )}
    </>
  );
};

export default CartGood;
