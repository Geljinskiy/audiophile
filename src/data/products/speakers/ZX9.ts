import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import { ZX9MainDesktopImg, ZX9MainMobileImg, ZX9MainTabletImg } from 'assets';

const ZX9Images: ProductImage = {
  desktopImg: ZX9MainDesktopImg,
  tabletImg: ZX9MainTabletImg,
  mobileImg: ZX9MainMobileImg,
};

const ZX9: ProductLinkProps = {
  img: ZX9Images,
  productDesc:
    'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
  productName: 'ZX9 SPEAKER',
  target: ROUTES.product,
  newProduct: true,
};

export default ZX9;
