import React, { useState, useContext } from 'react';
import { ThemeContext } from '../utils/themeUtil';
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import Icon from '../HelperComponent/icons';
import { themes } from '../utils/const';
import s from './styles';

export default function ThemeSelector(props) {
  const { theme } = props;
  const themeContext = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  function onChange(value) {
    setIsOpen(!isOpen)
    props.onChange(value);
  }

  return (
    <div className={s.themeSelector}>
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={isOpen}
      >
        <MainButton
          iconResting={<Icon type="add" width={18} height={18} fill="#FFF" />}
          iconActive={<Icon type="close" width={18} height={18} fill="#FFF" />}
          backgroundColor={themeContext.floatButtonColor}
          onClick={() => setIsOpen(!isOpen)}
          size={50}
        />
        <ChildButton
          icon={<Icon type="sun" width={18} height={18} fill="#FFF" />}
          backgroundColor={themeContext.floatButtonColor}
          size={40}
          onClick={() => onChange(themes.LIGHT)}
        />
        <ChildButton
          icon={<Icon type="moon" width={18} height={18} fill="#FFF" />}
          backgroundColor={themeContext.floatButtonColor}
          size={40}
          onClick={() => onChange(themes.DARK)}
        />
      </FloatingMenu>
    </div>
    // <div className={s.themeSelector}>
    //   <select onChange={onChange} value={theme}>
    //     <option value={themes.DARK}>{themes.DARK}</option>
    //     <option value={themes.LIGHT}>{themes.LIGHT}</option>
    //   </select>
    // </div>
  );
}