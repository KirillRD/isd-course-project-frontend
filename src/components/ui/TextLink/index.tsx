import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { classNames } from 'primereact/utils';

type TextLinkProps = {
  children: JSX.Element | string | number;
  path: string;
  selection?: boolean;
};

export default function TextLink({
  children,
  path,
  selection = false,
}: TextLinkProps) {
  return (
    <Link
      to={path}
      className={classNames(styles.link, { [styles.selectionLink]: selection })}
    >
      {children}
    </Link>
  );
}
