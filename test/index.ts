import { expect } from 'chai';
import 'mocha';

import { toUri, WebView } from '../src/index';

describe('Main', () => {
	describe('calc URI behavior', () => {
		it('creates URI for WKWebView', () => {
			expect(toUri('/image.png', WebView.WK_WEBVIEW)).to.be.equal('/local-filesystem/image.png');
		});

		it('creates URI for WebViews that allow access to "file://"', () => {
			expect(toUri('/image.png')).to.be.equal('file:///image.png');
		});
	});
});
