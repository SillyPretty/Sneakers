import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'

import { FaRegTrashCan } from 'react-icons/fa6'

import styles from './Cart.module.scss'
import { RemoveToCart } from '../../store/cart/cart.slice'
import { ICart } from '../../model/interface'

const Cart: FC = () => {
  const { carts } = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()

  const btnClick = (cart: ICart) => {
    dispatch(RemoveToCart(cart))
  }

  const price = (price: number, discount: number) => (price * discount) / 100

  return (
    <div className={styles.wrap}>
      <div className={styles.wrap__header}>Cart</div>
      {carts.length !== 0 ? (
        <div className={styles.wrap__content}>
          {carts.map((cart, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.card__preview}>
                <img src={`${cart.images[0]}-thumbnail.jpg`} alt={cart.title} />
              </div>
              <div className={styles.card__content}>
                <h3 className={styles.title}>{cart.title}</h3>
                <div className={styles.cost}>
                  <span className={styles.price}>{`$${price(
                    cart.price,
                    cart.discount
                  )}.00 x ${cart.count}`}</span>
                  <span className={styles.full__price}>{`$${
                    price(cart.price, cart.discount) * cart.count
                  }.00`}</span>
                </div>
              </div>
              <div className={styles.delete}>
                <FaRegTrashCan onClick={() => btnClick(cart)} />
              </div>
            </div>
          ))}
          <button className={styles.btn}>Checkout</button>
        </div>
      ) : (
        <div className={styles.wrap__content}>
          <p className={styles.empty}>Your cart is empty.</p>
        </div>
      )}
    </div>
  )
}

export default Cart
// : (
//           <p className={styles.empty}>Your cart is empty.</p>
//         )
