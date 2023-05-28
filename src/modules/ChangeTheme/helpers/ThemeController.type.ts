import { Themes } from './ChangeThemeController';

export interface ThemeController {
  get theme(): Themes;
  changeTheme(): void;
}
