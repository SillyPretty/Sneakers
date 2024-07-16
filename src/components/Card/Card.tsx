import { FC, useState } from 'react'
import clsx from 'clsx'

import { useAppDispatch } from '../../hooks/useRedux'
import { AddToCart } from '../../store/cart/cart.slice'

import { data } from '../../assets/data'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'

import styles from './Card.module.scss'

const Card: FC = () => {
  const { images, company, title, description, discount, price } = data

  const [preview, setPreview] = useState<string>(`${images[0]}.jpg`)
  const [counter, setCounter] = useState<number>(1)

  const dispatch = useAppDispatch()

  const btnClick = () => {
    dispatch(
      AddToCart({
        ...data,
        count: counter,
      })
    )
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.product}>
        <img src={preview} alt='preview' className={styles.product__preview} />
        <div className={styles.images}>
          {images.map((image, index) => (
            <div
              key={index}
              className={clsx(
                styles.images__item,
                preview === `${image}.jpg` && styles.images__item_active
              )}
              onClick={() => setPreview(`${image}.jpg`)}
            >
              <img src={`${image}-thumbnail.jpg`} alt='image' />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.company}>{company}</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
        <div className={styles.cost}>
          <span className={styles.price}>{`${
            (price * discount) / 100
          }.00$`}</span>
          <span className={styles.discount}>{`${discount}%`}</span>
          <div className={styles.full__price}>{`${price}.00$`}</div>
        </div>
        <div className={styles.buttons__wrap}>
          <div className={styles.counter}>
            <div className={styles.counter__button}>
              <CgMathMinus
                onClick={() =>
                  setCounter((count) => (count > 1 ? --count : count))
                }
              />
            </div>
            <div className={styles.counter__number}>{counter}</div>
            <div className={styles.counter__button}>
              <CgMathPlus onClick={() => setCounter((count) => ++count)} />
            </div>
          </div>
          <button className={styles.button} onClick={btnClick}>
            <img src='/images/icon-cart.svg' alt='icon-cart' />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
