import { ProductImage, ROUTES, ProductProps } from 'utils';
import {
  ZX9Gallery1MobileImg,
  ZX9Gallery1DesktopImg,
  ZX9Gallery1TabletImg,
  ZX9Gallery2MobileImg,
  ZX9Gallery2DesktopImg,
  ZX9Gallery2TabletImg,
  ZX9Gallery3MobileImg,
  ZX9Gallery3DesktopImg,
  ZX9Gallery3TabletImg,
  ZX9MainMobileImg,
  ZX9MainTabletImg,
  ZX9MainDesktopImg,
  ZX9WithoutShadowMobileImg,
  ZX9WithoutShadowTabletImg,
  ZX9WithoutShadowDesktopImg,
  ZX9MobileImg,
} from 'assets';

const ZX9Images: ProductImage = {
  desktopImg: ZX9MainDesktopImg,
  tabletImg: ZX9MainTabletImg,
  mobileImg: ZX9MainMobileImg,
};

const ZX9Gallery = [
  {
    mobileImg: ZX9Gallery1MobileImg,
    tabletImg: ZX9Gallery1TabletImg,
    desktopImg: ZX9Gallery1DesktopImg,
  },
  {
    mobileImg: ZX9Gallery2MobileImg,
    tabletImg: ZX9Gallery2TabletImg,
    desktopImg: ZX9Gallery2DesktopImg,
  },
  {
    mobileImg: ZX9Gallery3MobileImg,
    tabletImg: ZX9Gallery3TabletImg,
    desktopImg: ZX9Gallery3DesktopImg,
  },
];

const ZX9ImagesWithoutShadow: ProductImage = {
  desktopImg: ZX9WithoutShadowDesktopImg,
  tabletImg: ZX9WithoutShadowTabletImg,
  mobileImg: ZX9WithoutShadowMobileImg,
};

const ZX9: ProductProps = {
  productImage: ZX9Images,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the ZX9 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'ZX9',
  productTarget: '/product/ZX9',
  productFeatures: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  ZX9 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  productPrice: 4_500,
  productGallery: ZX9Gallery,
  poroductInBox: [
    { 'Earphone Unit': 2 },
    { 'Multi-size Earplugs': 6 },
    { 'User Manual': 1 },
    { 'USB-C Charging Cable': 1 },
    { 'Travel Pouch': 1 },
  ],
  newProduct: true,
  productImgWihtoutShadow: ZX9ImagesWithoutShadow,
  productCategory: 'speakers',
  productIcon: ZX9MobileImg,
};

export default ZX9;
