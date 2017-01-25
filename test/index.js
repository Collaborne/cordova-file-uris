/* jshint node: true */
/* jshint expr: true */

'use strict';

const fileUris = require('../src/index.js');
const WebView = fileUris.WebView;
const chai = require('chai');
const expect = chai.expect;

describe('Main', () => {
	describe('calc URI behavior', () => {
		it('creates URI for WKWebView', () => {
			expect(fileUris.toUri('/image.png', WebView.WK_WEBVIEW)).to.be.equal('/local-filesystem/image.png');
		});

		it('creates URI for WebViews that allow access to "file://"', () => {
			expect(fileUris.toUri('/image.png')).to.be.equal('file:///image.png');
		});
	});
});
