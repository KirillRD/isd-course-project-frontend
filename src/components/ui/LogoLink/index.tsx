import { PagePath } from '@/structures/enums';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
// eslint-disable-next-line import/no-unresolved
import logo from '/logo.svg';

export default function LogoLink() {
  return (
    <Link to={PagePath.HOME}>
      <img className={styles.logo} src={logo} />
    </Link>
  );
}
