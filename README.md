# cordova-file-uris
Helper function for Cordova applications to create URIs to show device files within a WebView

Different webviews require different URLs to show device files. For example, iOS
WKWebView doesn't allow access to `file://` but relies on a local web server.
Hence, these files need to be accessed via `http://localhost:<port>/local-filesystem/`.
