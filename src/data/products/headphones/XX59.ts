import { ProductImage, ProductProps } from 'utils';
import {
  XX59Gallery1MobileImg,
  XX59Gallery1DesktopImg,
  XX59Gallery1TabletImg,
  XX59Gallery2MobileImg,
  XX59Gallery2DesktopImg,
  XX59Gallery2TabletImg,
  XX59Gallery3MobileImg,
  XX59Gallery3DesktopImg,
  XX59Gallery3TabletImg,
  XX59MainMobileImg,
  XX59MainTabletImg,
  XX59MainDesktopImg,
  XX59WithoutShadowDesktopImg,
  XX59WithoutShadowMobileImg,
  XX59WithoutShadowTabletImg,
  XX59MobileImg,
} from 'assets';

const XX59Images: ProductImage = {
  desktopImg: XX59MainDesktopImg,
  tabletImg: XX59MainTabletImg,
  mobileImg: XX59MainMobileImg,
};

const XX59ImagesWithoutShadow: ProductImage = {
  desktopImg: XX59WithoutShadowDesktopImg,
  tabletImg: XX59WithoutShadowTabletImg,
  mobileImg: XX59WithoutShadowMobileImg,
};

const XX59Gallery = [
  {
    mobileImg: XX59Gallery1MobileImg,
    tabletImg: XX59Gallery1TabletImg,
    desktopImg: XX59Gallery1DesktopImg,
  },
  {
    mobileImg: XX59Gallery2MobileImg,
    tabletImg: XX59Gallery2TabletImg,
    desktopImg: XX59Gallery2DesktopImg,
  },
  {
    mobileImg: XX59Gallery3MobileImg,
    tabletImg: XX59Gallery3TabletImg,
    desktopImg: XX59Gallery3DesktopImg,
  },
];

const XX59: ProductProps = {
  productImage: XX59Images,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'XX59',
  productTarget: '/product/XX59',
  productFeatures: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  productPrice: 899,
  productGallery: XX59Gallery,
  poroductInBox: [
    { 'Headphone Unit': 1 },
    { 'Replacement Earcups': 2 },
    { 'User Manual': 1 },
    { '3.5mm 5m Audio Cable': 1 },
  ],
  productImgWihtoutShadow: XX59ImagesWithoutShadow,
  productCategory: 'headphones',
  productIcon: XX59MobileImg,
  newProduct: false,
};

export default XX59;
