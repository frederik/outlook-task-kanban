angular.module('todoApp', []);

angular.module('todoApp', []).config(function($sceProvider) {
	// Completely disable SCE to support IE7.
    $sceProvider.enabled(false);
})
/*
angular.module('todoApp').controller('logger', ['$scope', 'loggingService',  
  function($scope, loggingService) {
	loggingService.register($scope);
}]);*/