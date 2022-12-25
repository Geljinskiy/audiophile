import { Button, Section } from 'components';
import css from './CategoriesLinks.module.scss';

// TODO: Add arrow icon for buttons
const CategoriesLinks = () => {
  return (
    <Section>
      <div>Headphones</div>
      <Button styling="transparent">Shop</Button>
      <div>Speakers</div>
      <Button styling="transparent">Shop</Button>
      <div>Earphones</div>
      <Button styling="transparent">Shop</Button>
    </Section>
  );
};

export default CategoriesLinks;
