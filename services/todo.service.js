'use strict';

//Menu service used for managing  menus
angular.module('todoApp').service('todoService', ['loggingService', 
	function(loggingService) {			
			this.readAll = function($scope) {

				$scope.todos = [];          
			    $scope.open = [];   
			    $scope.inProgress = [];   
			    $scope.done = [];   

			   	try {	
					if (window.external !== undefined && window.external.OutlookApplication !== undefined) {
			            var ol = window.external.OutlookApplication;

			            var ns= ol.GetNameSpace("MAPI");

			            var inbox=ns.GetDefaultFolder(13); //see http://msdn.microsoft.com/en-US/library/office/ff861868(v=office.15).aspx
			            //to access sub folders, use .Folders(1)

			            var items = inbox.Items; 		          
			            items.Sort("Importance", true);

				          var i = 1;
				          while(true) {		
				           if (items(i) === undefined)				           	
				           	break;				          
				              
				           if (i > 200)
				              break;
				            
				            switch(items(i).Status) {
				              case 0:
				                $scope.open.push(createTodoFromOutlook(items(i)));
				              break;
				              case 1:
				                $scope.inProgress.push(createTodoFromOutlook(items(i)));
				              break;
				              case 2:
				                $scope.done.push(createTodoFromOutlook(items(i)));
				              break;
				              default:
				                $scope.todos.push(createTodoFromOutlook(items(i)));
				              break;
				            }

				           i++;
			          	 }		          

		           } else {
		            $scope.outsideOfOutlook = true;
		           }   
				
			} catch(e) {
		         loggingService.info(e);
		    }

		   }

			var createTodoFromOutlook = function(item) {
				return {
					text: item.Subject, 
					status: item.Status, 
					priority: item.Importance, 
					notes: item.Notes
				};
			}
	}
]);