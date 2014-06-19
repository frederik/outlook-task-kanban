angular.module('todoApp', []);

angular.module('todoApp', []).config(function($sceProvider) {
	// Completely disable SCE to support IE7.
	$sceProvider.enabled(false);
});