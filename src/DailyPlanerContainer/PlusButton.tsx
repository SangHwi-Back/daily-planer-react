import styles from './plusButton.module.css';
import {Link} from "react-router-dom";

interface Props {
  date: string;
}

export default function PlusButton({ date }: Props) {
  return (
    <Link to={`/insert/${date}`}>
      <div className={styles.plusButton}>+</div>
    </Link>
  )
}
