import { classNames } from 'primereact/utils';
import styles from './styles.module.scss';

type RatingIconProps = {
  colored?: boolean;
  fill?: boolean;
  hover?: boolean;
};

export default function RatingIcon({
  colored = false,
  fill = false,
  hover = false,
}: RatingIconProps) {
  return (
    <span
      className={classNames('pi text-2xl', {
        'pi-star': !fill,
        'pi-star-fill': fill,
        'text-yellow-500': colored,
        [styles.ratingIconHover]: hover,
      })}
    ></span>
  );
}
