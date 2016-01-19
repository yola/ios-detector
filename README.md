# [ios-detector](https://github.com/yola/ios-detector)

A module that adds a CSS class when it detects the browser is on Apple iOS.

[![npm Version](https://img.shields.io/npm/v/ios-detector.svg?style=flat-square)](https://www.npmjs.com/package/ios-detector)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/yola/ios-detector/master/LICENSE)
[![Build Status](https://img.shields.io/travis/yola/ios-detector.svg?style=flat-square)](https://travis-ci.org/yola/ios-detector)
[![Dependencies Status](https://img.shields.io/david/yola/ios-detector.svg?style=flat-square)](https://www.npmjs.com/package/ios-detector)
[![devDependencies Status](https://img.shields.io/david/dev/yola/ios-detector.svg?style=flat-square)](https://www.npmjs.com/package/ios-detector)

## Examples

Adding a `'ios-device'` class to the `<html>` element, if the browser is running on Apple iOS.

```javascript
import detectIOS from 'ios-detector';

detectIOS();
```

Detecting whether the browser is running on Apple iOS.

```javascript
import {isIOSDevice} from 'ios-detector';

if (isIOSDevice()) {
    console.log('The browser is running on Apple iOS.');
}
```

## Installation

Node.js via [npm](https://www.npmjs.com/package/ios-detector)

```bash
$ npm install ios-detector
```

SystemJS via [jspm](http://jspm.io/)

```bash
$ jspm install npm:ios-detector
```

## Scripts

### Install Dependencies

```bash
$ npm install
```

### Run Test Suite:

```bash
$ npm test
```

### Run Linter

```bash
$ ./node_modules/.bin/jshint .
```

## License

Copyright &copy; 2016 [Yola](http://yola.com).
<br>Released under the [MIT License](https://github.com/yola/ios-detector/master/LICENSE).
