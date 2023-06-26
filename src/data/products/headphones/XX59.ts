import { ProductLinkProps, ProductImage, ROUTES } from 'utils';
import {
  XX59MainMobileImg,
  XX59MainTabletImg,
  XX59MainDesktopImg,
} from 'assets';

const XX59Images: ProductImage = {
  desktopImg: XX59MainDesktopImg,
  tabletImg: XX59MainTabletImg,
  mobileImg: XX59MainMobileImg,
};

const XX59: ProductLinkProps = {
  img: XX59Images,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'XX59 Headphones',
  target: ROUTES.product,
};

export default XX59;
