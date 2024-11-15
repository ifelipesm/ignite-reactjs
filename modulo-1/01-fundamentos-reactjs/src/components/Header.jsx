
import styles from './Header.module.css';
import  lookartlogo  from '../assets/lookartpng.png'
export function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={lookartlogo} />
            <a className={styles.a} href='#'>
              <text className={styles.text}>
                Look
              </text>
            </a>
            <a className={styles.a} href='#'>
              <text className={styles.text}>
                Glasses
              </text>
            </a>
            <a className={styles.a} href='#'>
              <text className={styles.text}>
                Fashion
              </text>
            </a>
            <a className={styles.a} href='#'>
              <text className={styles.text}>
                About
              </text>
            </a>
      </div>
    </header>
  )
}