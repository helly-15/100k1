import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from "../../../animation/error/error.json";
import "./ErrorBoundary.scss";

const classnameRoot = "error-boundary";

export const ErrorBoundary: React.FC = () => (
  <div className={classnameRoot}>
    <Lottie className={`${classnameRoot}__image`} animationData={error} />
    <Link className={`${classnameRoot}__button button_return`} to="/">
      <span> To main page </span>
    </Link>
  </div>
);
