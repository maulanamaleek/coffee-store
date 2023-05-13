
import Image from 'next/image';
import Button from '../Button';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image width={300} height={300} alt="" src="/static/coffee3d.png" />
      <h1 className={styles.title}>Coffee Store</h1>
      <p className={styles.subtitle}>Find Nearby Coffee Stores</p>
      <Button
        text="Find Stores"
        onClick={() =>{}}
        style={{
          fontSize: '1.2rem'
        }}
      />
    </div>
  )
}

export default Banner