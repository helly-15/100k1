import React from "react";
import kot from "../assets/chernycot.png";
import labuten from "../assets/labuten.png";
import komarovo from "../assets/komarovo.png";
import orientir from "../assets/vizuorientir.png";
import './Final.css';

export const Final:React.FC = () => (
        <div className="final">
            <p className="final-text" >
                Финальный раунд : угадайте мелодию по картинкам!
                <span className="final-text_lion">&#129409;</span></p>
            <div className="final-wrapper">
                <div className="final-wrapper_raw">
                    <img src={ kot } className="final-img" alt="logo"/>
                    <img src={ labuten } className="final-img" alt="logo"/>
                </div>
                <div className="final-wrapper_raw">
                    <img src={ komarovo } className="final-img" alt="logo"/>
                    <img src={ orientir } className="final-img" alt="logo"/>
                </div>
            </div>
        </div>
    )
