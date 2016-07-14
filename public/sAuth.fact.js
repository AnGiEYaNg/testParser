'use strict';
app.factory('sAuth', ['$window', '$rootScope', '$http', function($window, $rootScope, $http){
	var sAuth = {};

	/*
		Watch for login status change:
			If user logged in, retrieve user info.
			If user logs out, delete session storage.
	*/
	sAuth.watchLoginChange = function() {
	  FB.Event.subscribe('auth.authResponseChange', function(res) {
	    if (res.status === 'connected') {
	      sAuth.getUserInfo();
	    }else{
	      $rootScope.user = {};
	      $window.sessionStorage.setItem("user", null);
	    }
	  });
	};

	/*
		Retrieve user name and id.	
	*/
	sAuth.getUserInfo = function(userId) {
	  FB.api('/me', function(res) {
	    $rootScope.$apply(function() {
	      $rootScope.user = res;
	      /* 
	      	Uncomment the following line if session storage is needed.
	      */
	      // $window.sessionStorage.setItem("user", JSON.stringify(sAuth.user));
	      return res;
	    });
	  });
	}

	return sAuth;
}])