'user strict';
app.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.user = $rootScope.user;
}])