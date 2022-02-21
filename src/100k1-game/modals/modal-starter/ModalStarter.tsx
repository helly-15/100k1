import './ModalStarter.scss';
import Lottie from 'lottie-react';
import React from 'react';
import loading from '../../../animation/loading/loading.json';

const classnameRoot = 'modal-starter';

export const ModalStarter: React.FC = () => (
  <div className={classnameRoot}>
    <div className={`${classnameRoot}__image-wrapper`}>
      <Lottie className={`${classnameRoot}__image`} animationData={loading} />
    </div>
  </div>
);
