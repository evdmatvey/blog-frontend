import { ThemeController } from '../model/types/ThemeController.type';

export type Themes = 'light' | 'dark';

enum ThemeVariables {
  BG = '--bg',
  MAIN_BG = '--main-bg',
  NAV_BG = '--nav-bg',
  WHITE = '--white',
  BLACK = '--black',
  ACCENT = '--accent',
  SCROLLBAR_TRACK = '--scrollbar-track',
  MOBILE_NAV_BG = '--mobile-nav-bg',
}

enum LightThemeValues {
  '--bg' = '#ffffff',
  '--main-bg' = '#ebebeb',
  '--nav-bg' = '#ffffff',
  '--white' = '#ffffff',
  '--black' = '#000000',
  '--accent' = '#2fc83e',
  '--scrollbar-track' = '#cecece',
  '--mobile-nav-bg' = '#f9f9f9',
}

enum DarkThemeValues {
  '--bg' = '#202020',
  '--main-bg' = '#303030',
  '--nav-bg' = '#232323',
  '--white' = '#000000',
  '--black' = '#ffffff',
  '--accent' = '#28bc37',
  '--scrollbar-track' = '#202020',
  '--mobile-nav-bg' = '#3d3d3d',
}

export class ChangeThemeController implements ThemeController {
  constructor(private readonly _root: HTMLHtmlElement) {
    this._currentTheme = this._getInitialTheme();
    this._setInitialTheme();
  }

  private _currentTheme: Themes;

  static Initialize() {
    if (window) {
      const initializedTheme = window.localStorage.getItem('theme') || 'light';
      window.localStorage.setItem('theme', initializedTheme);
    }
  }

  public changeTheme() {
    if (this._currentTheme === 'light') {
      this._setDarkTheme();
    } else if (this._currentTheme === 'dark') {
      this._setLightTheme();
    }

    this._setThemeStorage(this._currentTheme);
  }

  public get theme(): Themes {
    return this._currentTheme;
  }

  private _setInitialTheme() {
    if (this._currentTheme === 'dark') {
      this._changeStylesToDarkTheme();
    } else if (this._currentTheme === 'light') {
      this._changeStylesToLightTheme();
    }
  }

  private _setDarkTheme() {
    this._currentTheme = 'dark';
    this._changeStylesToDarkTheme();
  }

  private _setLightTheme() {
    this._currentTheme = 'light';
    this._changeStylesToLightTheme();
  }

  private _changeStylesToLightTheme() {
    this._root.style.setProperty(ThemeVariables.ACCENT, LightThemeValues[ThemeVariables.ACCENT]);
    this._root.style.setProperty(ThemeVariables.BG, LightThemeValues[ThemeVariables.BG]);
    this._root.style.setProperty(ThemeVariables.BLACK, LightThemeValues[ThemeVariables.BLACK]);
    this._root.style.setProperty(ThemeVariables.MAIN_BG, LightThemeValues[ThemeVariables.MAIN_BG]);
    this._root.style.setProperty(ThemeVariables.NAV_BG, LightThemeValues[ThemeVariables.NAV_BG]);
    this._root.style.setProperty(ThemeVariables.WHITE, LightThemeValues[ThemeVariables.WHITE]);
    this._root.style.setProperty(
      ThemeVariables.MOBILE_NAV_BG,
      LightThemeValues[ThemeVariables.MOBILE_NAV_BG],
    );
    this._root.style.setProperty(
      ThemeVariables.SCROLLBAR_TRACK,
      LightThemeValues[ThemeVariables.SCROLLBAR_TRACK],
    );
  }

  private _changeStylesToDarkTheme() {
    this._root.style.setProperty(ThemeVariables.ACCENT, DarkThemeValues[ThemeVariables.ACCENT]);
    this._root.style.setProperty(ThemeVariables.BG, DarkThemeValues[ThemeVariables.BG]);
    this._root.style.setProperty(ThemeVariables.BLACK, DarkThemeValues[ThemeVariables.BLACK]);
    this._root.style.setProperty(ThemeVariables.MAIN_BG, DarkThemeValues[ThemeVariables.MAIN_BG]);
    this._root.style.setProperty(ThemeVariables.NAV_BG, DarkThemeValues[ThemeVariables.NAV_BG]);
    this._root.style.setProperty(ThemeVariables.WHITE, DarkThemeValues[ThemeVariables.WHITE]);
    this._root.style.setProperty(
      ThemeVariables.MOBILE_NAV_BG,
      DarkThemeValues[ThemeVariables.MOBILE_NAV_BG],
    );
    this._root.style.setProperty(
      ThemeVariables.SCROLLBAR_TRACK,
      DarkThemeValues[ThemeVariables.SCROLLBAR_TRACK],
    );
  }

  private _getInitialTheme(): Themes {
    return window!.localStorage.getItem('theme') as Themes;
  }

  private _setThemeStorage(theme: Themes) {
    window!.localStorage.setItem('theme', theme);
  }
}
