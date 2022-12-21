import { Container, FooterLinks, FooterSocialLinks } from 'components';

import css from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.footer__container}>
        <FooterLinks />
        <p className={`${css.footer__about_us} ${css.footer__text}`}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={css.footer__bottom_wrapper}>
          <p className={`${css.footer__copyright} ${css.footer__text}`}>
            Copyright 2021. All Rights Reserved
          </p>
          <FooterSocialLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
