import { classNames } from 'primereact/utils';
import styles from './styles.module.scss';

type LikeIconProps = {
  colored?: boolean;
  fill?: boolean;
  hover?: boolean;
};

export default function LikeIcon({
  colored = false,
  fill = false,
  hover = false,
}: LikeIconProps) {
  return (
    <span
      className={classNames('pi text-2xl', {
        'pi-thumbs-up': !fill,
        'pi-thumbs-up-fill': fill,
        'text-primary': colored,
        [styles.likeIconHover]: hover,
      })}
    ></span>
  );
}
