import Image from "next/image";
import Link from "next/link";

import styles from './Card.module.css';

export interface CardProps {
  href: string;
  imageUrl: string;
  title: string;
}

const Card = ({
  href,
  imageUrl,
  title
}: CardProps) => {
  return (
    <Link href={href}>
      <div className={`glass ${styles.container}`}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          className={styles.image}
          src={imageUrl}
          width={240}
          height={170}
          alt={title}
        />
      </div>
    </Link>
  )
}

export default Card