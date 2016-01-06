'use strict';

import chai from 'chai';

import {
  applyDetection,
  isIOSDevice
} from '../src/ios-detector';

import {
  forEachUserAgent,
  restoreNavigator,
  setUserAgent,
  userAgents
} from './helpers/user-agents.js';

const htmlEl = document.documentElement;
const iosPlatforms = [
  'iPad',
  'iPhone',
  'iPod'
];

chai.should();

describe('ios-detector', function() {
  describe('isIOSDevice', function() {
    after(restoreNavigator);

    forEachUserAgent(function (browser, platform, userAgent) {
      const isIOSPlatform = iosPlatforms.indexOf(platform) >= 0;
      const verb = isIOSPlatform ? 'is' : 'isn\'t';
      const message = `${verb} running on Apple iOS`;
      const description = `${browser}: ${platform}`;

      describe(description, function() {
        before(() => setUserAgent(userAgent));

        it(message, function() {
          isIOSDevice().should.equal(isIOSPlatform);
        });
      });
    });
  });

  describe('applyDetection', function() {
    beforeEach(() => htmlEl.classList.remove('ios-device'));

    it('should not add a class', function() {
      applyDetection();

      htmlEl.classList.contains('ios-device').should.be.false;
    });

    it('should add a class', function() {
      setUserAgent(userAgents.Safari.iPad);

      applyDetection();

      htmlEl.classList.contains('ios-device').should.be.true;

      restoreNavigator();
    });
  });
});
