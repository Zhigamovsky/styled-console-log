@zhigamovsky/styled-console-log
# This package is under development. Subscribe to updates if you're interested. Thank you for understanding)
# It is your own console.log

## Usage

```javascript
import Log, { log, Types } from '@zhigamovsky/styled-console-log' 

...
    // dummy variables for testing :)
    let a = { key: 'value', value: 'value', k: 2 };
    let c = 2;
    let dummy = { a, b: ['value', 'value', 'value'], c, d: 'asdasdsad', l: { } };
    
    // Log (uppercase) - is default log, without configuration,  but with styles
    Log.error('Oh, god damn!', c, a, dummy); 
    Log.warn('Warn you about a warning!', c, a, dummy);
    Log.success('Got it!', c, a, dummy);
    Log.dark('Devil within, boo-ga-ga', c, a, dummy);
    Log.light('Angel within', c, a, dummy);
    Log.info('Lorem ipsum dolor... As trivially as this message', c, a, dummy);
    
    // log (lowercase) - is log, with configuration, but it's under developing
    log.error('Oh, god damn!', c, a, dummy)();
    log.warn('Warn you about a warning!', c, a, dummy)();
    log.success('Got it!', c, a, dummy)();
    log.dark('Devil within, boo-ga-ga', c, a, dummy)();
    log.light('Angel within', c, a, dummy)();
    Llog.info('Lorem ipsum dolor... As trivially as this message', c, a, dummy)();
    
    // Log (uppercase) - is default log image, without configuration,  but with styles
    Log.image('url/to/image')
    
    // log (lowercase) - is log, with configuration (height, width, background), and it's under developing
    log.image('url/to/image')({
      background: 'green',
      height: 100, 
      width: 100
    });
    
    // Just for fun
    Log.utils.getOSName({isShowInConsole: true});
    
    // Just for fun, log exist gif files
    Log.gif('url/to/gif');
    
    // You can override exist style for types (error, light, dark, info, success, warn, ...)
    // #1 Strongly Recommended
    Log.overrideStyles($Types.dark, 'background: #353535;');
    // but you also can use #2 
    Log.overrideStyles('dark', 'background: #353535;');
    
    // You can override exist icons for types (error, light, dark, info, success, warn, ...)
    // #1 Strongly Recommended
    Log.overrideIcons($Types.error, '🦠')
    // but you also can use #2 
    Log.overrideIcons('error', '🦠')
    
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
    // #1 Strongly Recommended
    Log.divided($Types.error);
    Log.divided($Types.warn);
    Log.divided($Types.success);
    Log.divided($Types.light);
    Log.divided($Types.dark);
    // But you also can use 'dark', 'light', 'success', 'warn', 'error' etc..
    
    // Create your own template at once, and use anywhere with this package
    // #1 Strongly Recommended
    Log.divided($Types.jolly);
    // But you also can use 'jolly' :)
    
    // If Debug mode - all of console log are shown (by default - debug)
    Log.setEnvironmentDebug();
    
    // If Release mode - all of console log are hide
    Log.setEnvironmentRelease();
...

```
