import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainNavbar } from '../../components/navbar/MainNavbar';
import { MainMasonry } from '../../components/masonry/MainMasonry';
import { App100k1 } from '../../../100k1-game/App100k1';
// todo add classnames library cn
const classnameRoot = 'main';

interface IMainProps {

}

export const Main: React.FC<IMainProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <MainNavbar />
    <div className={`${classnameRoot}__games-wrapper`}>
      <Switch>
        <Route exact path="/">
          <MainMasonry />
        </Route>
        <Route path="/100k1">
          <App100k1 />
        </Route>
      </Switch>
    </div>

  </div>
);
