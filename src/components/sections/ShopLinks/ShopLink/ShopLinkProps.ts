type Device = {
  src: string;
  width: number;
};

type ShopLinkProps = {
  name: string;
  images: {
    mobile: Device;
    tablet: Device;
    desktop: Device;
  };
  target: string;
  className?: string
};

export default ShopLinkProps;
