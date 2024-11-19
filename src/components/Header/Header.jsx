    import React from 'react'
    import s from './Header.module.scss'
    import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
        <nav className={s.nav}>
            <Link to={'/'} className={s.logo}>SHOP.CO</Link>

            <div className={s.menu}>
                <Link to={'/'}>Shop</Link>
                <Link to={'/'}>On sale</Link>
                <Link to={'/'}>New arivvals</Link>
                <Link to={'/'}>Brands</Link>
            </div>

            <input className={s.search} type="text" />

            <div className={s.box}>

            </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header