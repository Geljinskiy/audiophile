import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import {
  XX99MarkIIMainMobileImg,
  XX99MarkIIMainDesktopImg,
  XX99MarkIIMainTabletImg,
} from 'assets';

const XX99MarkIIImages: ProductImage = {
  desktopImg: XX99MarkIIMainDesktopImg,
  tabletImg: XX99MarkIIMainTabletImg,
  mobileImg: XX99MarkIIMainMobileImg,
};

const XX99MarkII: ProductLinkProps = {
  img: XX99MarkIIImages,
  productDesc:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  productName: 'XX99 Mark II Headphones',
  target: ROUTES.product,
  newProduct: true,
};

export default XX99MarkII;
