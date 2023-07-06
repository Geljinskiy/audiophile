import { ProductImage, ROUTES, ProductProps } from 'utils';
import {
  XX99MarkIGallery1MobileImg,
  XX99MarkIGallery1DesktopImg,
  XX99MarkIGallery1TabletImg,
  XX99MarkIGallery2MobileImg,
  XX99MarkIGallery2DesktopImg,
  XX99MarkIGallery2TabletImg,
  XX99MarkIGallery3MobileImg,
  XX99MarkIGallery3DesktopImg,
  XX99MarkIGallery3TabletImg,
  XX99MarkIMainMobileImg,
  XX99MarkIMainTabletImg,
  XX99MarkIMainDesktopImg,
  XX99MarkIWithoutShadowDesktopImg,
  XX99MarkIWithoutShadowMobileImg,
  XX99MarkIWithoutShadowTabletImg,
  XX99MKIMobileImg,
} from 'assets';

const XX99MarkIImages: ProductImage = {
  desktopImg: XX99MarkIMainDesktopImg,
  tabletImg: XX99MarkIMainTabletImg,
  mobileImg: XX99MarkIMainMobileImg,
};

const XX99MarkIImagesWithoutShadow: ProductImage = {
  desktopImg: XX99MarkIWithoutShadowDesktopImg,
  tabletImg: XX99MarkIWithoutShadowTabletImg,
  mobileImg: XX99MarkIWithoutShadowMobileImg,
};

const XX99MarkIGallery = [
  {
    mobileImg: XX99MarkIGallery1MobileImg,
    tabletImg: XX99MarkIGallery1TabletImg,
    desktopImg: XX99MarkIGallery1DesktopImg,
  },
  {
    mobileImg: XX99MarkIGallery2MobileImg,
    tabletImg: XX99MarkIGallery2TabletImg,
    desktopImg: XX99MarkIGallery2DesktopImg,
  },
  {
    mobileImg: XX99MarkIGallery3MobileImg,
    tabletImg: XX99MarkIGallery3TabletImg,
    desktopImg: XX99MarkIGallery3DesktopImg,
  },
];

const XX99MarkI: ProductProps = {
  img: XX99MarkIImages,
  productDesc:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX99MarkI headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  productName: 'XX99 Mark I',
  target: '/product/XX99MarkI',
  features: [
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX99MarkI headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
  ],
  price: 1_750,
  gallery: XX99MarkIGallery,
  inBox: [
    { 'Headphone Unit': 1 },
    { 'Replacement Earcups': 2 },
    { 'User Manual': 1 },
    { '3.5mm 5m Audio Cable': 1 },
  ],
  newProduct: true,
  imgWihtoutShadow: XX99MarkIImagesWithoutShadow,
  productCategory: 'headphones',
  icon: XX99MKIMobileImg,
};

export default XX99MarkI;
