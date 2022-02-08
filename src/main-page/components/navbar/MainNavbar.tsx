import React from 'react';
import './MainNavbar.scss';

const classnameRoot = 'main-navbar';

interface IMainNavbarProps {

}

export const MainNavbar: React.FC<IMainNavbarProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <div className={`${classnameRoot}__logo`}>
      <img className={`${classnameRoot}__logo_img`} src="./logo.svg" alt="logo" />
    </div>
    <ul className={`${classnameRoot}__personal-settings`}>
      <li className={`${classnameRoot}__personal-settings_lang`}>
        Language
        <ul>
          <li>Eng</li>
          <li>Ru</li>
          <li>It</li>
        </ul>

      </li>
      <li className={`${classnameRoot}__personal-settings_login`}>
        Log in
      </li>
      <li className={`${classnameRoot}__personal-settings_sign`}>
        Sign up
      </li>
    </ul>
  </div>
);
