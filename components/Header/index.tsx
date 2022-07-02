
import style from './Header.module.scss';
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.menu}>
            <li><a href="/" className={style.menu__link}>HomePage</a></li>
            <li><a href="/products" className={style.menu__link}>Products</a></li>
            <li><a href="/about" className={style.menu__link}>ABout</a></li>
            <li><a href="" className={style.menu__link}>menu 4</a></li>
        </ul>
    </div>
  )
}

export default Header