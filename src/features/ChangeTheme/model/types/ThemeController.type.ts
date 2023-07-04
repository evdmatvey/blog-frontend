import { Themes } from '../../utils/ChangeThemeController';

export interface ThemeController {
  get theme(): Themes;
  changeTheme(): void;
}
