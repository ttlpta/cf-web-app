import clsx from 'clsx';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronDown, FiX } from 'react-icons/fi';
import Button from '../Button';
import logoHeader from '../../assets/images/logo.svg';
import logoFooter from '../../assets/images/logo-footer.svg';
import flagEn from '../../assets/images/flag-en.svg';
import styles from './Layout.module.scss';



function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logoHeader} alt="Logo" />
          </Link>
        </div>
        <div className={clsx(styles.nav, { [styles.navActive]: toggle })}>
          <nav className={styles.navBar}>
            <NavLink to="/" activeClassName={styles.navItemActive} className={styles.navItem}>
              ニュース
            </NavLink>
            <NavLink to="2" activeClassName={styles.navItemActive} className={styles.navItem}>
              スケジュール
            </NavLink>
            <NavLink to="3" activeClassName={styles.navItemActive} className={styles.navItem}>
              メンバー
            </NavLink>
            <NavLink to="4" activeClassName={styles.navItemActive} className={styles.navItem}>
              プロデューサー
            </NavLink>
            <NavLink to="5" activeClassName={styles.navItemActive} className={styles.navItem}>
              ディスコグラフィー
            </NavLink>
          </nav>
          <span className={styles.closeNav} role="button" tabIndex={0} onKeyDown={null} onClick={() => setToggle(false)}>
            <FiX />
          </span>
        </div>
        <Button className={styles.locale}>
          <img src={flagEn} alt="EN" />
          <span>EN</span>
          <FiChevronDown />
        </Button>
        <Button
          onClick={() => setToggle(true)}
          className={clsx(styles.buttonToggle, { [styles.buttonToggleActive]: toggle })}
        >
          <span className={styles.buttonToggleBar} />
          <span className={styles.buttonToggleBar} />
          <span className={styles.buttonToggleBar} />
        </Button>
      </div>
    </>

  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src={logoFooter} alt="Logo Footer" />
          </div>
          <div className={styles.footerNav}>
            <Link to="/" className={clsx(styles.footerNavItem, 'text-bold')}>
              ニュース
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, 'text-bold')}>
              スケジュール
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, 'text-bold')}>
              メンバー
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, 'text-bold')}>
              プロデューサー
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, 'text-bold')}>
              ディスコグラフィー
            </Link>
          </div>
          <div className={styles.footerIcon}>
            <Link to="/">
              <i className="icon-facebook" />
            </Link>
            <Link to="/">
              <i className="icon-twitter" />
            </Link>
            <Link to="/">
              <i className="icon-youtube" />
            </Link>
          </div>
        </div>
        <hr className={styles.footerDivider} />
        <div className={styles.footerContent}>
          <div className={styles.footerNav}>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              会社概要
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              FAQ&お問い合わせ
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              個人情報の取扱いに関して
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              特定商取引法に関する表記
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              推奨環境について
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              ファンレター・プレゼントについて
            </Link>
            <Link to="/" className={clsx(styles.footerNavItem, styles.copyrightLink)}>
              サイトマップ
            </Link>
          </div>
        </div>
        <p className={styles.copyrightText}>© Muddler</p>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div id="root-content">{children}</div>
      <Footer />
    </>
  );
}
