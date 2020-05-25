@zhigamovsky/styled-console-log
# This package is under development. Subscribe to updates if you're interested. Thank you for understanding)
# It is your own console.log

## Usage

```javascript
import { Log, log, $Types } from '@zhigamovsky/styled-console-log' 
import { $Animations } from '@zhigamovsky/styled-console-log/gifs'

...
    // dummy variables for testing :)
    let a = { key: 'value', value: 'value', k: 2 };
    let c = 2;
    let dummy = { a, b: ['value', 'value', 'value'], c, d: 'asdasdsad', l: { } };
    
    // Log (uppercase) - is default log, without configuration,  but with styles
    Log.error('ERROR', c, a, dummy); 
    Log.warn('WARNING', c, a, dummy);
    Log.success('SUCCESS', c, a, dummy);
    Log.dark('DARK', c, a, dummy);
    Log.light('LIGHT', c, a, dummy);
    Log.info('INFORMATION', c, a, dummy);
    
    // log (lowercase) - is log, with configuration, but it's under developing
    log.error('ERROR', c, a, dummy)();
    log.warn('WARNING', c, a, dummy)();
    log.success('SUCCESS', c, a, dummy)();
    log.dark('DARK', c, a, dummy)();
    log.light('LIGHT', c, a, dummy)();
    log.info('INFORMATION', c, a, dummy)();
    
    // Log (uppercase) - is default log image, without configuration,  but with styles
    Log.image('url to image')
    
    // log (lowercase) - is log, with configuration (height, width, background), and it's under developing
    log.image('https://download.seaicons.com/download/i45781/tatice/cristal-intense/tatice-cristal-intense-apple-grey.ico')({
      background: 'green',
      height: 100, 
      width: 100
    });
    
    // Just for fun
    Log.utils.getOSName({isShowInConsole: true});
    
    // Just for fun, log exist gif files
    Log.gif($Animations.loader1);
    Log.gif($Animations.loader2);
    Log.gif($Animations.run);
    
    // You can override exist style for types (error, light, dark, info, success, warn, ...)
    Log.overrideStyles($Types.dark, 'background: #353535;');
    
    // You can override exist icons for types (error, light, dark, info, success, warn, ...)
    Log.overrideIcons($Types.dark, '->')
    
    // Test your override styles and icons with 'error' type
    Log.error('Custom Error', dummy);
    
    // You can add your own template with your own styles
    // 1# call - set identifier (like error, warn, success, info, but another)
    // 2# call - set icon (icon displaying before and after message)
    // 3# call - set own styles to your template
    Log.addOwnTemplate('jolly')('(J)')('color: pink; padding: 3px; border: 1px solid pink; background: #353535; font-weight: 800;');
    
    // Then your can use your own template like Log.warn, Log.success, etc
    Log.jolly('Some Text', dummy, c, a);
    
    // Just Divider in console.log
    // Without parameters use 'info' type by default
    Log.divided();
    
    // With parameters - Divider style can be one of types (include your own type)
    Log.divided($Types.error);
    Log.divided($Types.warn);
    Log.divided($Types.success);
    Log.divided($Types.light);
    Log.divided($Types.dark);
    
    // Create your own template at once, and use anywhere with this package
    Log.divided($Types.jolly);
    
    // If Debug mode - all of console log are shown (by default - debug)
    Log.setEnvironmentDebug();
    
    // If Release mode - all of console log are hide
    Log.setEnvironmentRelease();
...

```
