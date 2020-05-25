import { $Config, $Logger, $Types, $Utils, $Own, loadImage } from "./config/constants";

const Log = {
  warn: (...args) => $Logger($Types.warn, null, ...args),
  error: (...args) => $Logger($Types.error, null, ...args),
  success: (...args) => $Logger($Types.success, null, ...args),
  dark: (...args) => $Logger($Types.dark, null, ...args),
  light: (...args) => $Logger($Types.light, null, ...args),
  info: (...args) => $Logger($Types.info, null, ...args),
  image: (url) => loadImage(url),
  gif: (url) => loadImage(url, { width: 100, height: 100}),
  utils: $Utils,
  setEnvironmentDebug: () => $Config.debug = true,
  setEnvironmentRelease: () => $Config.debug = false,
  overrideStyles: $Own.overrideStyles,
  overrideIcons: $Own.overrideIcons,
  addOwnTemplate: $Own.addOwnTemplate,
  divided: $Own.divided
}

export const log = {
  warn: (...args) => config => $Logger($Types.warn, config, ...args),
  error: (...args) => config => $Logger($Types.error, config, ...args),
  success: (...args) => config => $Logger($Types.success, config, ...args),
  dark: (...args) => config => $Logger($Types.dark, config, ...args),
  light: (...args) => config => $Logger($Types.light, config, ...args),
  info: (...args) => config => $Logger($Types.info, config, ...args),
  image: (url) => config => loadImage(url, config),
  gif: (url) => config => loadImage(url, { width: 100, height: 100, ...config}),
  utils: $Utils,
  setEnvironmentDebug: () => $Config.debug = true,
  setEnvironmentRelease: () => $Config.debug = false,
  overrideStyles: $Own.overrideStyles,
  overrideIcons: $Own.overrideIcons,
  addOwnTemplate: $Own.addOwnTemplate,
  divided: $Own.divided
}
export let Types = $Types;
export default Log;