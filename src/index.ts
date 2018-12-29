const WebView = {
	WK_WEBVIEW: 'wkwebview',
};

/**
 * Adds the thumbnail URL (depending on the webview)
 *
 * We don't use URIJs because it's hard to import in a browser setup without
 * require() support.
 *
 * @param path Path of the file that should be converted
 * @param webView Supported values: "wkwebview", "other" (e.g. Android)
 * @returns URI to show the file in a WebView
 */
function toUri(path: string, webView?: string): string {
	switch (webView) {
		case WebView.WK_WEBVIEW:
			return `/local-filesystem${path}`;
		default:
			return `file://${path}`;
	}
}

export {
	toUri,
	WebView,
};
