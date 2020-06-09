import Log, { log } from "..";

export const $Config = {
  styles: {
    general: `
      font-family: system-ui;
      padding: 2px; 
      font-size: 13; 
      border-radius: 2px; 
      font-weight: 600; 
      letter-spacing: 2px; 
      border: 1px dotted;
    `
  },
  debug: true,
  timing: false,
}

export const $Timing = {
  icon: '⏱',
  config: {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  },
  locale: undefined,
  format: 'extended',
}

export const $Icons = {
  warn: '►',
  success: '►',
  error: '►',
  dark: '►',
  light: '►',
  info: '►',
  render: '⚒',
  hazel: '⚒',
  event: '⚒',
  zelda: '⚒',
  merge: '⚒',
  rozy: '⚒',
  ruddy: '⚒',
  check: '⚒',
  $1: '♉',
  $2: '♉',
  $3: '♉',
  $4: '♉',
  $5: '♉',
  $6: '♉',
  $7: '♉',
  $8: '♉',
}

export const $Types = {
  warn: 'warn',
  error: 'error',
  success: 'success',
  dark: 'dark',
  light: 'light',
  info: 'info',
  render: 'render',
  hazel: 'hazel',
  event: 'event',
  zelda: 'zelda',
  merge: 'merge',
  rozy: 'rozy',
  ruddy: 'ruddy',
  check: 'check',
  $1: '$1',
  $2: '$2',
  $3: '$3',
  $4: '$4',
  $5: '$5',
  $6: '$6',
  $7: '$7',
  $8: '$8',
}

export const $Styles = {
  warn: $Config.styles.general  + `
    color: black; background: #FFA600; border-color: orange;
  `,
  error: $Config.styles.general + `
    color: #C70039; background: #ffcccc; border-color: #ffcccc;
  `,
  success: $Config.styles.general + `
    color: #008000; background: #b2d8b2; border-color: #b2d8b2;
  `,
  dark: $Config.styles.general + `
    background: #353535; color: #e5e5e5; border-style: solid; border-width: 0px;
  `,
  light: $Config.styles.general + `
    background: white; color: #353535; border-color: #353535
  `,
  info: $Config.styles.general + `
    background: #0080ff; color: #e5f2ff; border-color: #0080ff;
  `,
  render: $Config.styles.general + `
    padding: 4px; border: 1px dotted #7373ff;  background: #7373ff20; color: #7373ff;
  `,
  event: $Config.styles.general + `
    padding: 4px; border: 1px dotted #ffff00;  background: #ffff0020; color: #ffff00;
  `,
  hazel: $Config.styles.general + `
    padding: 4px; border: 1px dotted #ed8864;  background: rgba(121, 85, 72, 0.2); color: #ed8864;
  `,
  zelda: $Config.styles.general + `
    padding: 4px; border: 1px dotted #43bf43;  background: #43bf4320; color: #43bf43;
  `,
  merge: $Config.styles.general + `
    padding: 4px; border: 1px dotted #a14ed9;  background: #a14ed920; color: #a14ed9;
  `,
  rozy: $Config.styles.general + `
    padding: 4px; border: 1px dotted #ff61ca;  background: #ff61ca20; color: #ff61ca;
  `,
  ruddy: $Config.styles.general + `
    padding: 4px; border: 1px dotted #ff3333;  background: #ff333320; color: #ff3333;
  `,
  check: $Config.styles.general + `
    padding: 4px; border: 1px dotted #ffbe3d;  background: #ffbe3d20; color: #ffbe3d;
  `,
  $1: $Config.styles.general + `
    padding: 5px;  border: 1px dashed white; font-weight: 800; text-transform: uppercase;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    text-shadow: 2px 2px black; color: #ece2ca;
  `,
  $2: $Config.styles.general + `
    padding: 5px;  border: 1px dashed white; font-weight: 800; text-transform: uppercase;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    text-shadow: 2px 2px black; color: #ece2ca;
  `,
  $3: $Config.styles.general + `
    padding: 5px; border: 1px dashed white;  font-weight: 800; text-transform: uppercase;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 60%, rgba(34,193,195,1) 100%);
    text-shadow: 1px 1px black; color: #ece2ca;
  `,
  $4: $Config.styles.general + `
    padding: 5px; border: 1px dashed white;  font-weight: 800; text-transform: uppercase;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    color: black;
  `,
  $5: $Config.styles.general + `
    padding: 5px;  border: 1px dashed white;  font-weight: 800; text-transform: uppercase;
    background-image: linear-gradient( 110.3deg,  rgba(72,85,99,1) 8.8%, rgba(127,146,166,1) 95.1% );
    text-shadow: 1px 2px black; color: #ece2ca;
  `,
  $6: $Config.styles.general + `
    padding: 5px;  border: 1px dashed white; font-weight: 800; text-transform: uppercase;
    background-image: radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% );
    color: rgba(91,21,55,1);
  `,
  $7: $Config.styles.general + `
    padding: 5px;  border: 1px dashed white; font-weight: 800; text-transform: uppercase;
    background-image: linear-gradient( 99.6deg,  rgba(112,128,152,1) 10.6%, rgba(242,227,234,1) 32.9%, rgba(234,202,213,1) 52.7%, rgba(220,227,239,1) 72.8%, rgba(185,205,227,1) 81.1%, rgba(154,180,212,1) 102.4% );
    text-shadow: 1px 1px black; color: white;
  `,
  $8: $Config.styles.general + `
    padding: 5px; border: 1px dashed white;  font-weight: 800; text-transform: uppercase;
    background-image: radial-gradient( circle 1192px at 21.5% 49.5%,  rgba(91,21,55,1) 0.1%, rgba(0,0,0,1) 100.2% );
    text-shadow: 2px 2px black; color: #ece2ca;
  `
}

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
  let timestamp = new Date();
  let timingPrefix = '';
  if($Config.timing) {
    let timing = '';
    if($Timing.format === 'extended') {
      timingPrefix =  $Timing.icon + ' ' + timestamp.toLocaleString($Timing.locale, $Timing.config) + ':' + timestamp.getMilliseconds() + ' ' + $Timing.icon;
    }
    else {
      timingPrefix = timestamp.toLocaleString() + ':' + timestamp.getMilliseconds() + ' |';
    }
  }

  // will add to logs.json with timing in future

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
  console.log('%c%s', style, timingPrefix + title, ...args);
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