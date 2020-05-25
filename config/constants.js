import Log, { log } from "..";

export const $Errors = {
  ID_NOT_UNIQUE: {
    KEY: 'ID_NOT_UNIQUE',
    throw: value => ({
      type: 'ID_NOT_UNIQUE',
      value,
      message: `Immpossible to add own template '${value}'. '${value}' does exist in enumerable of props Log. Try enter another identifier.`
    }),
    message: value => `Immpossible to add own template '${value}'. '${value}' does exist in enumerable of props Log. Try enter another identifier.`
  },
  ICON_NOT_STRING: {
    KEY: 'ICON_NOT_STRING',
    throw: value => ({
      type: 'ICON_NOT_STRING',
      value,
      message: `Immpossible to add icon '${value}'. Icon must be a string.`
    }),
    message: value => `Immpossible to add icon '${value}'. Icon must be a string.`
  },
  STYLES_NOT_STRING: {
    KEY: 'ICON_NOT_STRING',
    throw: value => ({
      type: 'STYLES_NOT_STRING',
      value,
      message: `Immpossible to add styles '${value}'. Styles must be a string.`
    }),
    message: value => `Immpossible to add styles '${value}'. Styles must be a string.`
  },
  OV_STYLES_TYPE_DSNT_EXIST: {
    KEY: 'OV_STYLES_TYPE_DSNT_EXIST',
    throw: value => ({
      type: 'OV_STYLES_TYPE_DSNT_EXIST',
      value,
      message: `Immpossible to override style '${value}'. '${value}' does not exist in enumerable of Types. Try to add own Type with Log.addOwnType(...args).`
    }),
    message: value => `Immpossible to override style '${value}'. '${value}' does not exist in enumerable of Types. Try to add own Type with Log.addOwnType(...args).`
  },
  OV_ICONS_TYPE_DSNT_EXIST: {
    KEY: 'OV_ICONS_TYPE_DSNT_EXIST',
    throw: value => ({
      type: 'OV_ICONS_TYPE_DSNT_EXIST',
      value,
      message:`Immpossible to override icon '${value}'. '${value}' does not exist in enumerable of Types. Try to add own Type with Log.addOwnType(...args).`
    }),
    message: value => `Immpossible to override icon '${value}'. '${value}' does not exist in enumerable of Types. Try to add own Type with Log.addOwnType(...args).`
  }
}

export const $Logger = async (type, config, ...args) => {
  if(!$Config.debug) return;
  let title = '';
  let icon = $Icons[type];
  let style = $Styles[type];
  if( 
    typeof args[0] == 'bigint' ||
    typeof args[0] == 'boolean'|| 
    typeof args[0] == 'number' ||
    typeof args[0] == 'string' || 
    typeof args[0] == 'undefined'
  ){
    title =  ' ' + icon + ' ' + args[0] + ' ' + icon + ' '
    args.shift();
  }
  else title = ' ' + icon + ' ';
  console.log('%c%s', style, title, ...args);
}

export const $Styles = {
  warn: $Config.styles.general  + 'color: black; background: #FFA600; border-color: orange;',
  error: $Config.styles.general + 'color: #C70039; background: #ffcccc; border-color: #ffcccc;',
  success: $Config.styles.general + 'color: #008000; background: #b2d8b2; border-color: #b2d8b2;',
  dark: $Config.styles.general + 'background: #353535; color: #e5e5e5; border-style: solid; border-width: 0px;',
  light: $Config.styles.general + 'background: white; color: #353535; border-color: #353535',
  info: $Config.styles.general + 'background: #0080ff; color: #e5f2ff; border-color: #0080ff;',
}

export const $Icons = {
  warn: '►',
  success: '►',
  error: '►',
  dark: '►',
  light: '►',
  info: '►'
}

export const $Types = {
  warn: 'warn',
  error: 'error',
  success: 'success',
  dark: 'dark',
  light: 'light',
  info: 'info'
}

export const $Config = {
  styles: {
    general: 'font-family: system-ui;padding: 2px; font-size: 13; border-radius: 2px; font-weight: 600; letter-spacing: 2px; border: 1px dotted;'
  },
  debug: true
}

export const $Utils = {
  getOSName: config => {
    let OSName = 'Unknown OS';
    if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows"; 
    if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS"; 
    if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX"; 
    if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";
    if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows"; 
    if (navigator.appVersion.indexOf("Android") !== -1) OSName = "Android";
    if (navigator.appVersion.indexOf("iOS") !== -1) OSName = "iOS";    
    if(!$Config.debug) {
      config && config.isShowInConsole && $Logger($Types.info, null, 'Operation System -> ' + OSName);
    }
    return {
      isDetected: !OSName === 'Unknown OS',
      value: OSName
    }
  }
}

export const $Own = {
  addOwnTemplate: identifier => {
    if(!Object.keys(Log).includes(identifier)) {
      return icon => {
        if(typeof icon === 'string') {
          return styles => {
            if(typeof styles === 'string') {
              $Types[identifier] = identifier;
              $Styles[identifier] = styles;
              $Icons[identifier] = icon;
              Log[identifier] = (...args) => $Logger($Types[identifier], null, ...args);
              log[identifier] = (...args) => config => $Logger($Types[identifier], config, ...args);
            } else throw $Errors.STYLES_NOT_STRING.throw(styles)
          }
        } else throw $Errors.ICON_NOT_STRING.throw(icon)
      }
    } else throw $Errors.ID_NOT_UNIQUE.throw(identifier)
  },
  divided: (type = $Types.info) => {
    if(!$Config.debug) return;
    console.log('%c ', $Styles[type] + `
      width: 100%; 
      padding: 0 92vw 1px 0; 
      font-size: 5pt;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      border-top-right-radius: 150%;
      border-bottom-right-radius: 150%;
    `);
  },
  overrideStyles: (type, inlineCss) => {
    if(Object.keys($Styles).includes(type)){
      $Styles[type] +=  inlineCss;
    }
    else $Logger($Types.error, null, $Errors.OV_STYLES_TYPE_DSNT_EXIST.message(type));
  },
  overrideIcons: (type, text) => {
    if(Object.keys($Icons).includes(type)){
      $Icons[type] = text;
    }
    else $Logger($Types.error, null, $Errors.OV_ICONS_TYPE_DSNT_EXIST.message(type))
  }
}

export function loadImage(url, config = null) {
  if(!$Config.debug) return;
  const hookOut = {
    zoom: config => {
      if(config && config.height && config.width) return `
        background-size: contain;
      `
    },
    background: config => {
      if(config && config.background) return `
        background-color: ${config.background};
      `
    }
  }
  return new Promise((resolve, reject) => {
    try {
      let image;
      if(config && config.height && config.width){
        image = new Image(config.width, config.height);
      }
      else image = new Image();
      image.onload = function() {
        let styles =  ` 
          font-size: 1px; 
          padding: ${this.height * .5}px ${this.width * .5}px; 
          background-image: url(${image.src}); 
          background-position: center; 
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: center;
          ${hookOut.zoom(config)}
          ${hookOut.background(config)}
        `;
        resolve();
        console.log('%c ', styles)  
      }
      image.src = url;
      image.onerror = () => {
        $Logger($Types.error, null, 'Error while load image')
        resolve();
      }
    } catch(e) {
      $Logger($Types.error, null, 'Error while load image', e)
    }
  })
}