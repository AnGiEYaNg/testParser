'use strict';
var app = angular.module("TestParser", []);

app.run(['$rootScope', '$window', 'sAuth',
  function($rootScope, $window, sAuth) {

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({

      appId: '1778335662380031',
      /*
	     Adding a Channel File improves the performance
	     of the javascript SDK, by addressing issues
	     with cross-domain communication in certain browsers.
	   */

      channelUrl: 'channel.html',

      /* Parse XFBML */

      xfbml: true
    });

    sAuth.watchAuthenticationStatusChange();

  };

  (function(d){
    // load the Facebook javascript SDK

    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}]);