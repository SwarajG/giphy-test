import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/themeUtil';
import s from './styles';

export default function OfflineModeView() {
  const theme = useContext(ThemeContext);
  return (
    <div className={s.offlineWrapper}>
      <p className={s.offlineMode(theme)}>You are offline</p>
      <p className={s.offlineMode(theme)}>Please check your connection</p>
    </div>
  )
}

