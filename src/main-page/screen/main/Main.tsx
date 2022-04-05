import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MainNavbar } from "../../components/navbar/MainNavbar";
import { MainMasonry } from "../../components/masonry/MainMasonry";
import { App100k1 } from "../../../100k1-game/App100k1";
import "./Main.scss";
import { FallbackLoading } from "../../../100k1-game/modals/fallback-loading/FallbackLoading";
import { RoundChoice } from "../round-choice/RoundChoice";

const classnameRoot = "main";

interface IMainProps {}

export const Main: React.FC<IMainProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <Suspense fallback={<FallbackLoading />}>
      <MainNavbar />
      <div className={`${classnameRoot}__games-wrapper`}>
        <Switch>
          <Route exact path="/">
            <MainMasonry />
          </Route>
          <Route path="/gameTitle/:gameTitle/roundchoice">
            <RoundChoice />
          </Route>
          <Route path="/100k1/round/:round">
            <App100k1 />
          </Route>
        </Switch>
      </div>
    </Suspense>
  </div>
);
