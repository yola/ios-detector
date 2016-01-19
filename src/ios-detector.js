'use strict';

/* global navigator */

/**
 * An array of iOS devices to be detected.
 * These strings are found within a browser's user agent.
 */
const iOSDevices = [
  'iPad',
  'iPhone',
  'iPod'
];

/**
 * RegEx for detecting iOS devices
 * @see isIOSDevice()
 */
const iOSDevicesExp = new RegExp(iOSDevices.join('|'));

/**
 * Determines whether the browser is running on Apple iOS
 * @returns {Boolean}
 */
export function isIOSDevice() {
  return iOSDevicesExp.test(navigator.userAgent) && ! window.MSStream;
}

/**
 * Sets a CSS class if the browser is running on Apple iOS
 * @returns {void}
 */
export function applyDetection() {
  if (isIOSDevice()) {
    document.documentElement.classList.add('ios-device');
  }
}

export default applyDetection;
