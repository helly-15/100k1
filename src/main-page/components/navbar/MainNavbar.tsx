import React from "react";
import "./MainNavbar.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { CHANGE_LOCALE } from "../../../redux-state/reducers/localeReducer";
import {IStoreState} from "../../../redux-state/interfaces/IStore";

const classnameRoot = "main-navbar";

type Lngs = Record<string, { nativeName: string }>;

const lngs: Lngs = {
  en: { nativeName: "Eng" },
  ru: { nativeName: "Рус" },
};

interface IMainNavbarProps {
  setLocale: (locale: string) => void;
  username: string;
}

const MotionLink = motion(Link);

export const MainNavbarComponent: React.FC<IMainNavbarProps> = ({
  setLocale, username
}) => {
  const { t, i18n } = useTranslation();
  return (
    <header className={`${classnameRoot}__wrapper`}>
      <Link className={`${classnameRoot}__logo`} to="/">
        <motion.img
          className={`${classnameRoot}__logo_img`}
          src="/dice-icon.svg"
          alt="language"
          whileHover={{ scale: 1.2 }}
          animate = {{rotate:360}}
          transition = {{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 5,
            repeatDelay:1,
            type: "spring",
          }
          }
        />
        <h1>{t("title")} </h1>
      </Link>
      <ul className={`${classnameRoot}__personal-settings`}>
        <li className={`${classnameRoot}__personal-settings_lang`}>
          <motion.img
            className={`${classnameRoot}__language_img`}
            src="/planet.svg"
            alt="language"
            whileHover={{ scale: 1.2 }}
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
          { (username && username.length > 1) ? <span>
              {`Hi ${username}!`}
          </span> :
              <>
                  <MotionLink
                      to="/login"
                      whileHover={{ scale: 1.2 }}
                      className={`${classnameRoot}__personal-settings_login`}
                  >
                      {t("login")}
                  </MotionLink>
                  <motion.li
                      whileHover={{ scale: 1.2 }}
                      className={`${classnameRoot}__personal-settings_sign`}
                  >
                      {t("signup")}
                  </motion.li>
              </>


          }

      </ul>
    </header>
  );
};

export const MainNavbar = connect(
  (state: IStoreState) => ({
      username: state.user.username
  }),
  (dispatch) => ({
    setLocale: (locale: string) => {
      dispatch({ type: CHANGE_LOCALE, payload: locale });
    },
  })
)(MainNavbarComponent);
