import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';
import {
  decreaseCount,
  increaseCount,
  removeItem,
} from '@/Redux/features/shoppingCart/ShoppingCartSlice';
import styles from './ShoppingCartItemCounter.module.css'

const ShoppingCartItemCounter = ({ productId  , customstyles}) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const itemCount = shoppingCart.items.filter((item) => item.id === productId)[0].count;

  return (
    <div className={styles['outer-container']}>
      <span onClick={() => dispatch(increaseCount(productId))}>+</span>
      <span>{itemCount}</span>
      {itemCount === 1 ? (
        <BsFillTrashFill onClick={() => dispatch(removeItem(productId))} />
      ) : (
        <span onClick={() => dispatch(decreaseCount(productId))}>-</span>
      )}
    </div>
  );
};

export default ShoppingCartItemCounter;