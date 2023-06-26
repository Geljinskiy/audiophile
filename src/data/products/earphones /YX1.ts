import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import { YX1MainDesktopImg, YX1MainTabletImg, YX1MainMobileImg } from 'assets';

const YX1Images: ProductImage = {
  desktopImg: YX1MainDesktopImg,
  tabletImg: YX1MainTabletImg,
  mobileImg: YX1MainMobileImg,
};

const YX1: ProductLinkProps = {
  img: YX1Images,
  productDesc:
    'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
  productName: 'YX1 WIRELESS EARPHONES',
  target: ROUTES.product,
  newProduct: true,
};

export default YX1;
