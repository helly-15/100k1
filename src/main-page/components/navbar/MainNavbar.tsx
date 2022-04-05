import React from "react";
import "./MainNavbar.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CHANGE_LOCALE } from "../../../redux-state/reducers/localeReducer";

const classnameRoot = "main-navbar";

type Lngs = Record<string, { nativeName: string }>;

const lngs: Lngs = {
  en: { nativeName: "Eng" },
  ru: { nativeName: "Рус" },
};

interface IMainNavbarProps {
  setLocale: (locale: string) => void;
}
export const MainNavbarComponent: React.FC<IMainNavbarProps> = ({
  setLocale,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`${classnameRoot}__wrapper`}>
      <Link className={`${classnameRoot}__logo`} to="/">
        <h1>{t("title")} </h1>
      </Link>
      <ul className={`${classnameRoot}__personal-settings`}>
        <li className={`${classnameRoot}__personal-settings_lang`}>
          <img
            className={`${classnameRoot}__language_img`}
            src="/planet.svg"
            alt="language"
          />
          <ul>
            {Object.keys(lngs).map((lng: string) => (
              <button
                className={`${classnameRoot}__personal-settings_lang_option`}
                type="button"
                key={lng}
                onClick={() => {
                  i18n.changeLanguage(lng);
                  setLocale(lng);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    i18n.changeLanguage(lng);
                  }
                }}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </ul>
        </li>
        <li className={`${classnameRoot}__personal-settings_login`}>
          {t("login")}
        </li>
        <li className={`${classnameRoot}__personal-settings_sign`}>
          {t("signup")}
        </li>
      </ul>
    </div>
  );
};

export const MainNavbar = connect(
  () => ({}),
  (dispatch) => ({
    setLocale: (locale: string) => {
      dispatch({ type: CHANGE_LOCALE, payload: locale });
    },
  })
)(MainNavbarComponent);
