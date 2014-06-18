angular.module('todoApp').service('loggingService', ['$rootScope',  
  function($rootScope) {

		this.info = function(message) {
			if ($rootScope.logs == undefined)
				$rootScope.logs = [];

			$rootScope.logs.push(message);
		}
	}
]);