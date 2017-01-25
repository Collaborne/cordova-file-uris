'use strict';

const URI = require('urijs');

const WebView = {
	WK_WEBVIEW: 'wkwebview'
};

/**
 * Adds the thumbnail URL (depending on the webview)
 * @param {string} path    Path of the file that should be converted
 * @param {string} webView
 *         Supported values: "wkwebview", "other" (e.g. Android)
 * @param {string}		URI to show the file in a WebView
 */
function toUri(path, webView) {
	let uri;
	switch (webView) {
		case WebView.WK_WEBVIEW:
			uri = URI().path(`/local-filesystem${path}`);
			break;
		default:
			uri = URI().protocol('file').path(path);
	}

	return uri.toString();
}

module.exports = {
	toUri,

	WebView
};
