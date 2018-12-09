import React from 'react';
import styles from './Footer.css';
import classNames from 'classnames';


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <footer className={classNames({[styles.footer]: true, [styles.footer__04]: true, })}>
        <div className={ styles.footer__main_box__04 }>
          <div className={classNames({[styles.container]: true, [styles.footer__container]: true, })}>
            <a href="#" className={classNames({[styles.footer__logo_box]: true, [styles.footer__logo_box__04]: true, })}>
              <img src="img/arca-logo-white.svg" alt="Arca properties logo" className={ styles.header__logo_img }/>
            </a>
            <ul className={classNames({[styles.footer__nav]: true, [styles.footer__nav__04]: true, })}>
              <li className={ styles.header__menu_item}><a href="/" className={classNames({[styles.header__menu_link]: true, [styles.header__menu_link__white]: true, })}>home</a></li>
              <li className={ styles.header__menu_item}><a href="/about" className={classNames({[styles.header__menu_link]: true, [styles.header__menu_link__white]: true, })}>about</a></li>
              <li className={ styles.header__menu_item}><a href="/faq" className={classNames({[styles.header__menu_link]: true, [styles.header__menu_link__white]: true, })}>faq</a></li>
              <li className={ styles.header__menu_item}><a href="/referrals" className={classNames({[styles.header__menu_link]: true, [styles.header__menu_link__white]: true, })}>referrals</a></li>
            </ul>
            <ul className={classNames({[styles.social]: true, [styles.footer__social__04]: true, [styles.footer__social_box]: true, })}>
              <li className={classNames({[styles.social__item]: true, [styles.social__item__left_margin]: true})}>
                <a href="https://www.linkedin.com/company/arca-property-management/" title="Say hello in LinkedIn!" className={classNames({[styles.social__link]: true, [styles.social__link__linkedin]: true})}></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={ styles.footer__description_box__04 }>
          <div className={classNames({[styles.container]: true, [styles.footer__container]: true})}>
            <span className={classNames({[styles.footer__description]: true, [styles.footer__description__04]: true})}>ask@arcapropertymanagement.com<br/>Made with ♥ in Milan.</span>
            <span className={classNames({[styles.footer__copyright]: true, [styles.footer__copyright__04]: true})}>&copy; Arca Properties, 2018</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
