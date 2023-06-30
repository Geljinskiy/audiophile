import { ProductImage, ROUTES, ProductProps } from 'utils';
import {
  YX1Gallery1MobileImg,
  YX1Gallery1DesktopImg,
  YX1Gallery1TabletImg,
  YX1Gallery2MobileImg,
  YX1Gallery2DesktopImg,
  YX1Gallery2TabletImg,
  YX1Gallery3MobileImg,
  YX1Gallery3DesktopImg,
  YX1Gallery3TabletImg,
  YX1MainMobileImg,
  YX1MainTabletImg,
  YX1MainDesktopImg,
  YX1WithoutShadowDesktopImg,
  YX1WithoutShadowMobileImg,
  YX1WithoutShadowTabletImg,
} from 'assets';

const YX1Images: ProductImage = {
  desktopImg: YX1MainDesktopImg,
  tabletImg: YX1MainTabletImg,
  mobileImg: YX1MainMobileImg,
};

const YX1ImagesWithoutShadow: ProductImage = {
  desktopImg: YX1WithoutShadowDesktopImg,
  tabletImg: YX1WithoutShadowTabletImg,
  mobileImg: YX1WithoutShadowMobileImg,
};

const YX1Gallery = [
  {
    mobileImg: YX1Gallery1MobileImg,
    tabletImg: YX1Gallery1TabletImg,
    desktopImg: YX1Gallery1DesktopImg,
  },
  {
    mobileImg: YX1Gallery2MobileImg,
    tabletImg: YX1Gallery2TabletImg,
    desktopImg: YX1Gallery2DesktopImg,
  },
  {
    mobileImg: YX1Gallery3MobileImg,
    tabletImg: YX1Gallery3TabletImg,
    desktopImg: YX1Gallery3DesktopImg,
  },
];

const YX1: ProductProps = {
  img: YX1Images,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the YX1 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'YX1',
  target: ROUTES.product,
  features: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  YX1 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  price: 899,
  gallery: YX1Gallery,
  inBox: [
    { 'Earphone Unit': 2 },
    { 'Multi-size Earplugs': 6 },
    { 'User Manual': 1 },
    { 'USB-C Charging Cable': 1 },
    { 'Travel Pouch': 1 },
  ],
  imgWihtoutShadow: YX1ImagesWithoutShadow,
  productCategory: 'earphones',
};

export default YX1;
