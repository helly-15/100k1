import React from 'react';
import './MainNavbar.scss';

const classnameRoot = 'main-navbar';

interface IMainNavbarProps {

}

export const MainNavbar: React.FC<IMainNavbarProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <div className={`${classnameRoot}__logo`} />
    <div className={`${classnameRoot}__personal-settings`}>
      <ul className={`${classnameRoot}__personal-settings_lang`}>
        <li>Eng</li>
        <li>Ru</li>
        <li>It</li>
      </ul>
      <div className={`${classnameRoot}__personal-settings_login`}>
        Log in
      </div>
      <div className={`${classnameRoot}__personal-settings_sign`}>
        Sign up
      </div>
    </div>
  </div>
);
