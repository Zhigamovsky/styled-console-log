@zhigamovsky/styled-console-log

# **Installation**
```npm install @zhigamovsky/styled-console-log```
### Import
```javascript
import Log from '@zhigamovsky/styled-console-log'
```

###

### Just for example I define dummy variables 
```javascript
let a = { key: 'value', value: 'value', k: 2 };
let c = 2;
let dummy = { a, b: ['value', 'value', 'value'], c, d: 'asdasdsad', l: { } };
```


# **v1.0.0**
## We have new Major Version [v1.0.0]. What's new?
### **The collection of templates has expanded!**
```javascript
Log.hazel('Some test message', a);
Log.check('If you are checking some conditional', a);
Log.event('Log with this types, when some events are emitting', a);
Log.zelda('Just beautiful green template', a);
Log.render('Log with "render", when your render something', a);
Log.merge('Find a use for this template', a);
Log.rozy('I just liked the color', a);
Log.ruddy('Endlessly red template', a);
Log.$1('Hah, yes, it is radial gradient', a);
Log.$2('It is linear gradient', a);
Log.$3('Other some template with gradient', a);
Log.$4('Other some template with gradient', a);
Log.$5('Other some template with gradient', a);
Log.$6('Other some template with gradient', a);
Log.$7('Other some template with gradient', a);
Log.$8('Lorem ipsum dolor sit amet, ...');
```
[Go to Logger Docs Section](#1-log-with-different-ready-made-templates)
![Example 9](examples/Log%209.png)
### **The collection of dividers has expanded also!**

```javascript
Log.divided(Types.hazel);
Log.divided(Types.check);
Log.divided(Types.event);
Log.divided(Types.zelda);
Log.divided(Types.render);
Log.divided(Types.merge);
Log.divided(Types.rozy);
Log.divided(Types.ruddy);
Log.divided(Types.$1);
Log.divided(Types.$2);
Log.divided(Types.$3);
Log.divided(Types.$4);
Log.divided(Types.$5);
Log.divided(Types.$6);
Log.divided(Types.$7);
Log.divided(Types.$8);
```
[Go to Divider Docs Section](#5-divider-like-sense-of-life)
![Example 10](examples/Log%2010.png)

### **We have new Environment - Timing!**
```
Log.setEnvironmentTiming();
Log.setTimingLocale(locale);
Log.setTimingExtendedFormat();
Log.setTimingMinifiedFormat();
Log.disableEnvironmentTiming();
Log.setTimingConfig(config);
```
[Go to Environments Docs Section](#7-environments)

![Example 11](examples/Log%2011.png)

# **Documentation**

## Simple usage
### **1. Log with different ready-made templates**

```javascript
Log.error('Oh, god damn!', c, a, dummy); 
Log.warn('Warn you about a warning!', c, a, dummy);
Log.success('Got it!', c, a, dummy);
Log.dark('Devil within, boo-ga-ga', c, a, dummy);
Log.light('Angel within', c, a, dummy);
Log.info('Lorem ipsum dolor... As trivially as this message', c, a, dummy);
```
![Example 1](examples/Log%201.png)







### **2. Yes! You can display any image in console**

```javascript
Log.image('https://download.seaicons.com/download/i45781/tatice/cristal-intense/tatice-cristal-intense-apple-grey.ico');
```
![Example 2](examples/Log%202.png)







### **2.1 Also you can configuring size image in console**
### For configuring logging your need to import `log` (not `Log`)

```javascript
import { log } from '@zhigamovsky/styled-console-log'

log.image('https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png')({
  background: 'red',  
  height: 150, 
  width: 150
});
```
![Example 2.1](examples/Log%203.png)







### **3. Of course you can display any gif file. Yes, GIFs are animated**
### By default gif has 100x100. For configuring logging your need to import `log` (not `Log`).

```javascript
import Log, { log } from '@zhigamovsky/styled-console-log'

log.gif('https://media2.giphy.com/media/S2vSPMhKtLp9I6VMDY/giphy.gif')({
  background: '#435444',  
  height: 250, 
  width: 250
});
Log.gif('https://media2.giphy.com/media/S2vSPMhKtLp9I6VMDY/giphy.gif');
```
![Example 3](examples/Log%204.png)







### **4. Override ready-made template Styles and Icons**
### Of course, you can override any **Styles** or **Icons**  of the templates as you like.
### Instead of `Types.warn` you can use just `'warn'`, but I Strongly recommended use `Types`
```javascript
import Log, { Types } from '@zhigamovsky/styled-console-log' 

Log.warn('Warn Template before overriding styles and icon...', c, a, dummy);

Log.overrideStyles(Types.warn, 'background: #353535; color: pink; border-style: dash; border-width: 2px;');
Log.overrideIcons(Types.warn, '⚠️');

Log.warn('Warn Template after overriding styles and icon...', c, a, dummy);
```
![Example 4](examples/Log%205.png)







### **5. Divider like sense of life**

### Just useful features for divided porridge from the code in real project. Divider use `background-color` and `border` from his template. If
### By default `Log.divided()` use `'info'` template. 
### Instead of `Types.warn | Types.error | etc... ` you can use just `'warn'`, `'error'`, but I Strongly recommended use `Types`
```javascript
import Log, { Types } from '@zhigamovsky/styled-console-log'

Log.divided();
Log.divided(Types.error);
Log.divided(Types.warn);
Log.divided(Types.success);
Log.divided(Types.light);
Log.divided(Types.dark);
```
![Example 5](examples/Log%206.png)






### **5.1 Overriding make sense**

### If you are override some template, template's divider alse change style to according to new css rules
### `Log.overrideStyles(type: string, styles: inlineCss)`
```javascript
import Log, { Types } from '@zhigamovsky/styled-console-log'

Log.divided(Types.warn);
Log.warn('Warn Template before overriding styles and icon...', c, a, dummy);
Log.overrideStyles(Types.warn, 'background: #353535; color: pink; border-style: dash; border-width: 2px;');
Log.overrideIcons(Types.warn, '⚠️')
Log.warn('Warn Template after overriding styles and icon...', c, a, dummy);
Log.divided(Types.warn);
```
![Example 5.1](examples/Log%207.png)








### **6. Create and add own template**

### If you are not enough ready-made templates, you can create and add your own
### After creation you can use Log with new  template. Divider also works!
### Do not be afraid to experiment!
### `addOwnTemplate(identifier: string)(icon: string)(styles: inlineCss)`
```javascript
import Log, { Types } from '@zhigamovsky/styled-console-log'

Log.addOwnTemplate('jolly')('🦠')('color: lightgreen; padding: 3px; border: 2px solid lightgreen; background: #353535; font-weight: 800;');

Log.jolly('Some text to your own custom template :)', dummy, c, a);
Log.divided(Types.jolly);
```
![Example 5.1](examples/Log%208.png)







### **7. Environments**
### The most important thing for me is the environment.
### Now are available thre environments. `Release`, `Debug` and `Timing`.
### I know well how console.log loads the browser, so I made this environments.
# Environment - Debug
```javascript
Log.setEnvironmentDebug();
```
## So you can set `Debug`, all of console.log with `Log` or `log` are shown.





# Environment - Release 
```javascript
Log.setEnvironmentRelease();
```
## But if you set up `Release` - all of console.log will be hidden without the need to remove them in code. And you can return to debugging at any time without restoring all the logs.






# Environment - Timing 
```javascript
Log.setEnvironmentTiming();
```

## This environment does not conflict with previous ones, and works with them. If you want to see times (and dates) of all logs, see Timing Environment
### After that, absolutely all logs will have a date and time of their execution.
## Alse you can disable it:
```javascript
Log.disableEnvironmentTiming();
```
### At now are available two appearance - `extended` and `minified`. To set one of this try:
```javascript
Log.setTimingExtendedFormat();
Log.hazel('Some test message', a);
Log.check('If you are checking some conditional', a);
Log.event('Log with this types, when some events are emitting', a);
Log.zelda('Just beautiful green template', a);
Log.render('Log with "render", when your render something', a);
Log.merge('Find a use for this template', a);
Log.rozy('I just liked the color', a);
Log.ruddy('Endlessly red template', a);
```
![Example 11.1](examples/Log%2011.png)
## or
```javascript
Log.setTimingMinifiedFormat();
Log.hazel('Some test message', a);
Log.check('If you are checking some conditional', a);
Log.event('Log with this types, when some events are emitting', a);
Log.zelda('Just beautiful green template', a);
Log.render('Log with "render", when your render something', a);
Log.merge('Find a use for this template', a);
Log.rozy('I just liked the color', a);
Log.ruddy('Endlessly red template', a);
```
![Example 11.2](examples/Log%2012.png)

## You can configuring datetime locale
```javascript
Log.setTimingLocale(locale);
```
### typeof `locale` - section "locale" see there:
#### https://www.w3schools.com/jsref/jsref_tolocalestring.asp
#### http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
#### https://tools.ietf.org/html/rfc5646



### by default `locale` - default browser locale

## You can configuring datetime display format
```javascript
Log.setTimingConfig(config);
```
### typeof `config` - section "options" see there:
#### https://www.w3schools.com/jsref/jsref_tolocalestring.asp

### by default `config`:
```javascript 
{
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}
```


# If `@zhigamovsky/styled-console-log` helped you, give me a star on GitHub
<img src="examples/github-icon.jpg" height="200">

# This package is under development. Subscribe to updates if you're interested. Thank you for understanding. I will add many many new features. Good Coding!