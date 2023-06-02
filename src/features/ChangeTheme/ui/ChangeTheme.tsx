import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { ChangeThemeController, Themes } from '../utils/ChangeThemeController';
import { ThemeController } from '../model/types/ThemeController.type';
import { selectTheme, setTheme } from '../model/store/theme.slice';
import Button from '@/shared/ui/Button';
import { DarkThemeIcon, LightThemeIcon } from '@/shared/ui/icons';

const ChangeTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const [themeController, setThemeController] = useState<ThemeController>();

  useEffect(() => {
    if (document) {
      ChangeThemeController.Initialize();
      dispatch(setTheme(window.localStorage.getItem('theme') as Themes));

      setThemeController(
        new ChangeThemeController(document.querySelector('html') as HTMLHtmlElement),
      );
    }
  }, []);

  const changeTheme = () => {
    if (themeController) {
      themeController.changeTheme();
      dispatch(setTheme(themeController.theme));
    }
  };

  return (
    <Button color="base" size="base" type="icon-only" withIcon outlined onClick={changeTheme}>
      {theme === 'light' ? (
        <LightThemeIcon width={20} height={20} />
      ) : (
        <DarkThemeIcon width={20} height={20} />
      )}
    </Button>
  );
};

export default ChangeTheme;
