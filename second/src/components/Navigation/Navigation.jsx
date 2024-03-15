
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        {/* <img src="images\Frame 2 1.png" alt="logo" /> */}
        <h1>Logo</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
