
import Link from 'next/link';
import style from './Header.module.scss';
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.menu}>
            <li><Link href="/" className={style.menu__link}>HomePage</Link></li>
            <li><Link href="/products" className={style.menu__link}>Products</Link></li>
            <li><Link href="/about" className={style.menu__link}>ABout</Link></li>
            <li><Link href="" className={style.menu__link}>menu 4</Link></li>
        </ul>
    </div>
  )
}

export default Header