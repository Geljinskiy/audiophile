import { ProductImage, ROUTES, ProductProps } from 'utils';
import {
  XX99MarkIIGallery1MobileImg,
  XX99MarkIIGallery1DesktopImg,
  XX99MarkIIGallery1TabletImg,
  XX99MarkIIGallery2MobileImg,
  XX99MarkIIGallery2DesktopImg,
  XX99MarkIIGallery2TabletImg,
  XX99MarkIIGallery3MobileImg,
  XX99MarkIIGallery3DesktopImg,
  XX99MarkIIGallery3TabletImg,
  XX99MarkIIMainMobileImg,
  XX99MarkIIMainTabletImg,
  XX99MarkIIMainDesktopImg,
  XX99MarkIIWithoutShadowDesktopImg,
  XX99MarkIIWithoutShadowMobileImg,
  XX99MarkIIWithoutShadowTabletImg,
} from 'assets';

const XX99MarkIIImages: ProductImage = {
  desktopImg: XX99MarkIIMainDesktopImg,
  tabletImg: XX99MarkIIMainTabletImg,
  mobileImg: XX99MarkIIMainMobileImg,
};

const XX99MarkIIImagesWithoutShadow: ProductImage = {
  desktopImg: XX99MarkIIWithoutShadowDesktopImg,
  tabletImg: XX99MarkIIWithoutShadowTabletImg,
  mobileImg: XX99MarkIIWithoutShadowMobileImg,
};

const XX99MarkIIGallery = [
  {
    mobileImg: XX99MarkIIGallery1MobileImg,
    tabletImg: XX99MarkIIGallery1TabletImg,
    desktopImg: XX99MarkIIGallery1DesktopImg,
  },
  {
    mobileImg: XX99MarkIIGallery2MobileImg,
    tabletImg: XX99MarkIIGallery2TabletImg,
    desktopImg: XX99MarkIIGallery2DesktopImg,
  },
  {
    mobileImg: XX99MarkIIGallery3MobileImg,
    tabletImg: XX99MarkIIGallery3TabletImg,
    desktopImg: XX99MarkIIGallery3DesktopImg,
  },
];

const XX99MarkII: ProductProps = {
  img: XX99MarkIIImages,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX99MarkII headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'XX99 Mark II',
  target: ROUTES.product,
  features: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX99MarkII headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  price: 899,
  gallery: XX99MarkIIGallery,
  inBox: [
    { 'Headphone Unit': 1 },
    { 'Replacement Earcups': 2 },
    { 'User Manual': 1 },
    { '3.5mm 5m Audio Cable': 1 },
    { 'Travel Bag': 1 },
  ],
  newProduct: true,
  imgWihtoutShadow: XX99MarkIIImagesWithoutShadow,
  productCategory: 'headphones',
};

export default XX99MarkII;
