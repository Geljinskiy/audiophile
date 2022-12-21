import {
  Container,
  FooterLinks,
  FooterSocialLinks,
  FooterBodyText,
} from 'components';

import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.footer__container}>
        <FooterLinks />
        <div className={css.footer__wrapper}>
          <FooterBodyText />
          <FooterSocialLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
