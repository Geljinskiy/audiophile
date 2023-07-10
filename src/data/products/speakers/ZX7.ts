import { ProductImage, ROUTES, ProductProps } from 'utils';
import {
  ZX7Gallery1MobileImg,
  ZX7Gallery1DesktopImg,
  ZX7Gallery1TabletImg,
  ZX7Gallery2MobileImg,
  ZX7Gallery2DesktopImg,
  ZX7Gallery2TabletImg,
  ZX7Gallery3MobileImg,
  ZX7Gallery3DesktopImg,
  ZX7Gallery3TabletImg,
  ZX7MainMobileImg,
  ZX7MainTabletImg,
  ZX7MainDesktopImg,
  ZX7WithoutShadowDesktopImg,
  ZX7WithoutShadowTabletImg,
  ZX7WithoutShadowMobileImg,
  ZX7MobileImg,
} from 'assets';

const ZX7Images: ProductImage = {
  desktopImg: ZX7MainDesktopImg,
  tabletImg: ZX7MainTabletImg,
  mobileImg: ZX7MainMobileImg,
};

const ZX7Gallery = [
  {
    mobileImg: ZX7Gallery1MobileImg,
    tabletImg: ZX7Gallery1TabletImg,
    desktopImg: ZX7Gallery1DesktopImg,
  },
  {
    mobileImg: ZX7Gallery2MobileImg,
    tabletImg: ZX7Gallery2TabletImg,
    desktopImg: ZX7Gallery2DesktopImg,
  },
  {
    mobileImg: ZX7Gallery3MobileImg,
    tabletImg: ZX7Gallery3TabletImg,
    desktopImg: ZX7Gallery3DesktopImg,
  },
];

const ZX7ImagesWithoutShadow: ProductImage = {
  desktopImg: ZX7WithoutShadowDesktopImg,
  tabletImg: ZX7WithoutShadowTabletImg,
  mobileImg: ZX7WithoutShadowMobileImg,
};

const ZX7: ProductProps = {
  productImage: ZX7Images,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the ZX7 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'ZX7',
  productTarget: '/product/ZX7',
  productFeatures: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  ZX7 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  productPrice: 3_500,
  productGallery: ZX7Gallery,
  poroductInBox: [
    { 'Speaker Unit': 2 },
    { 'Speaker Cloth Panel': 2 },
    { 'User Manual': 1 },
    { '3.5mm 7.5m Audio Cable': 1 },
    { '7.5m Optical Cable': 1 },
  ],
  productImgWihtoutShadow: ZX7ImagesWithoutShadow,
  productCategory: 'speakers',
  productIcon: ZX7MobileImg,
  newProduct: false,
};

export default ZX7;
