'use strict';

const nativeNavigator = navigator;

export const userAgents = require('./user-agents.json');

/**
 * Overrides the native navigator object with the given user Agent string
 * @param {string} userAgent
 * @returns {void}
 */
export function setUserAgent(userAgent) {
  window.navigator = {
    userAgent: userAgent
  };
}

/**
 * Restores the native navigator object
 * @returns {void}
 */
export function restoreNavigator() {
  window.navigator = nativeNavigator;
}

/**
 * Callback for user agent iteration
 * @callback UserAgentCallback
 * @param {string} browser
 * @param {string} platform
 * @param {string} userAgent
 */

/**
 * Iterates over each user agent string passing values to the given callback
 * @param {UserAgentCallback} callback
 * @returns {void}
 */
export function forEachUserAgent(callback) {
  for (let browser in userAgents) {
    let platforms = userAgents[browser];

    for (let platform in platforms) {
      let userAgent = platforms[platform];

      callback(browser, platform, userAgent);
    }
  }
}
