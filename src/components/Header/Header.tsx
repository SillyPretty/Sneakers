import { FC, useState } from 'react'

import Cart from '../Cart/Cart'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [isVisibleCart, setIsVisibleCart] = useState<boolean>(false)

  return (
    <header className={styles.wrap}>
      <div className={styles.content}>
        <a href='#'>
          <img src='/images/logo.svg' alt='logo' />
        </a>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>Collections</li>
          <li className={styles.menu__item}>Men</li>
          <li className={styles.menu__item}>Women</li>
          <li className={styles.menu__item}>About</li>
          <li className={styles.menu__item}>Contact</li>
        </ul>
      </div>
      <div className={styles.content}>
        <img
          src='/images/icon-cart.svg'
          alt='icon-cart'
          className={styles.icon}
          onClick={() => setIsVisibleCart(!isVisibleCart)}
        />
        <img
          src='/images/image-avatar.png'
          alt='image-avatar'
          className={styles.img__avatar}
        />
      </div>
      {isVisibleCart && <Cart />}
    </header>
  )
}

export default Header
