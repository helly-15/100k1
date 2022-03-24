import './FallbackLoading.scss';
import Lottie from 'lottie-react';
import React from 'react';
import loading from '../../../animation/loading/loading.json';

const classnameRoot = 'fallback-loading';

export const FallbackLoading: React.FC = () => (
  <div className={classnameRoot}>
    <div className={`${classnameRoot}__image-wrapper`}>
      <Lottie className={`${classnameRoot}__image`} animationData={loading} />
    </div>
  </div>
);
