import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react"
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux-state/store/store";
import { Main } from "./main-page/screen/main/Main";
import "./localization/i18n";
import {FallbackLoading} from "./100k1-game/modals/fallback-loading/FallbackLoading";
import './api/firebase/firebaseApi';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <PersistGate loading = {<FallbackLoading/>} persistor = {persistor}>
              <Main />
          </PersistGate>

      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
