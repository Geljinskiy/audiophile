import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import {
  XX99MarkIMainMobileImg,
  XX99MarkIMainTabletImg,
  XX99MarkIMainDesktopImg,
} from 'assets';

const XX99MarkIImages: ProductImage = {
  desktopImg: XX99MarkIMainDesktopImg,
  tabletImg: XX99MarkIMainTabletImg,
  mobileImg: XX99MarkIMainMobileImg,
};

const XX99MarkI: ProductLinkProps = {
  img: XX99MarkIImages,
  productDesc:
    'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  productName: 'XX99 Mark I Headphones',
  target: ROUTES.product,
};

export default XX99MarkI;
