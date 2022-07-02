import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <main>
       <ul className='menu'>
          <li><a href="" className='menu__link'>Home Page</a></li>
          <li><a href="" className='menu__link'>ABout</a></li>
          <li><a href="" className='menu__link'>Products</a></li>
          <li><a href="" className='menu__link'>Contact</a></li>
        </ul>
        <Header />
    </main>

  )
}

export default Home
