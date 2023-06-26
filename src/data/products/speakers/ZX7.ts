import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import { ZX7MainDesktopImg, ZX7MainMobileImg, ZX7MainTabletImg } from 'assets';

const ZX7Images: ProductImage = {
  desktopImg: ZX7MainDesktopImg,
  tabletImg: ZX7MainTabletImg,
  mobileImg: ZX7MainMobileImg,
};

const ZX7: ProductLinkProps = {
  img: ZX7Images,
  productDesc:
    'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
  productName: 'ZX7 SPEAKER',
  target: ROUTES.product,
};

export default ZX7;
