import { Button, Section } from 'components';

// import css from './ProductsReview.module.scss';

const ProductsReview = () => {
  return (
    <Section>
      <div>
        ZX9 speaker Upgrade to premium speakers that are phenomenally built to
        deliver truly remarkable sound.
        <Button styling="dark">See product</Button>
      </div>
      <div>
        ZX7 speaker
        <Button styling="light">See product</Button>
      </div>
      <div>
        YX1 earphones
        <Button styling="light">See product</Button>
      </div>
    </Section>
  );
};

export default ProductsReview;
