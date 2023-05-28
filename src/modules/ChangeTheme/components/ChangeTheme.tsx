import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { ChangeThemeController, Themes } from '../helpers/ChangeThemeController';
import { ThemeController } from '../helpers/ThemeController.type';
import { selectTheme, setTheme } from '../store/theme.slice';
import Button from '@/ui/Button';
import { DarkThemeIcon, LightThemeIcon } from '@/ui/icons';

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
