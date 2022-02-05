import React from 'react';
import { MainNavbar } from '../../components/navbar/MainNavbar';
import { MainMasonry } from '../../components/masonry/MainMasonry';
// todo add classnames library cn
const classnameRoot = 'main';

interface IMainProps {

}

export const Main: React.FC<IMainProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <MainNavbar />
    <div className={`${classnameRoot}__games-wrapper`}>
      <MainMasonry />
    </div>
  </div>
);
