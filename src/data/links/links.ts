import { ROUTES } from 'utils/constants';
import {
  HeadphonesMobileImg,
  HeadphonesTabletImg,
  HeadphonesDesktopImg,
  SpeakersMobileImg,
  SpeakersTabletImg,
  SpeakersDesktopImg,
  EarphonesMobileImg,
  EarphonesTabletImg,
  EarphonesDesktopImg,
} from 'assets';

const links = [
  {
    name: 'headphone',
    target: ROUTES.headphones,
    images: {
      mobile: {
        src: HeadphonesMobileImg,
        width: 182,
      },
      tablet: {
        src: HeadphonesTabletImg,
        width: 182,
      },
      desktop: {
        src: HeadphonesDesktopImg,
        width: 208,
      },
    },
  },
  {
    name: 'speakers',
    target: ROUTES.speakers,
    images: {
      mobile: {
        src: SpeakersMobileImg,
        width: 182,
      },
      tablet: {
        src: SpeakersTabletImg,
        width: 182,
      },
      desktop: {
        src: SpeakersDesktopImg,
        width: 208,
      },
    },
  },
  {
    name: 'earphones',
    target: ROUTES.checkout,
    images: {
      mobile: {
        src: EarphonesMobileImg,
        width: 182,
      },
      tablet: {
        src: EarphonesTabletImg,
        width: 182,
      },
      desktop: {
        src: EarphonesDesktopImg,
        width: 208,
      },
    },
  },
];

export default links;
