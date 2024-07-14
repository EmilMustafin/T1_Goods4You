import Cart from '../common/cart.svg';
import Minus from '../common/minus.svg';
import Plus from '../common/plus.svg';
import Spinner from '../common/spinner.svg';
import StarFill from '../common/star-fill.svg';
import Star from '../common/star.svg';

export enum Icons {
  PLUS = 'PLUS',
  CART = 'CART',
  STAR = 'STAR',
  STAR_FILL = 'STAR_FILL',
  MINUS = 'MINUS',
  SPINNER = 'SPINNER',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.PLUS]: Plus,
  [Icons.CART]: Cart,
  [Icons.STAR]: Star,
  [Icons.STAR_FILL]: StarFill,
  [Icons.MINUS]: Minus,
  [Icons.SPINNER]: Spinner,
};
