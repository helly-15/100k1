import './ModalStarter.scss';
import React from 'react';

const classnameRoot = 'modal-starter';

interface IModalStarter {
    setModalShown: (arg: boolean) => void
}

export const ModalStarter: React.FC<IModalStarter> = ({ setModalShown }) => (
  <div className={classnameRoot}>
    <div className={`${classnameRoot}__image-wrapper`}>
      <img className={`${classnameRoot}__image`} src="/screenStarter.jpg" alt="intro logo" />
      <button
        type="button"
        className={`${classnameRoot}__button`}
        onClick={() => {
          setModalShown(false);
          const simpleGameSound = new Audio('/simple-game.mp3');
          simpleGameSound.play();
        }}
      >
        Поехали!
      </button>
      <button
        type="button"
        className={`${classnameRoot}__button-music`}
        onClick={() => {
          const introSound = new Audio('/zastavka-100-k-1-stereo.mp3');
          introSound.play();
        }}
      >
        {' '}
        𝄞
      </button>
    </div>
  </div>
);
