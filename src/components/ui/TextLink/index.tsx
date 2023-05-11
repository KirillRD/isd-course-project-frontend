import {
  Link,
  URLSearchParamsInit,
  createSearchParams,
} from 'react-router-dom';
import styles from './styles.module.scss';
import { classNames } from 'primereact/utils';
import { CSSProperties } from 'react';

type TextLinkProps = {
  className?: string;
  style?: CSSProperties;
  children: JSX.Element | string | number;
  path: string;
  args?: URLSearchParamsInit;
  reloadDocument?: boolean;
  selection?: boolean;
};

export default function TextLink({
  className,
  style,
  children,
  path,
  args,
  reloadDocument = false,
  selection = false,
}: TextLinkProps) {
  return (
    <Link
      to={{
        pathname: path,
        search: createSearchParams(args).toString(),
      }}
      reloadDocument={reloadDocument}
      style={style}
      className={classNames(styles.link, className, {
        [styles.selectionLink]: selection,
      })}
    >
      {children}
    </Link>
  );
}
