angular.module("app").directive("videoDirective", function($window){

return {
    restrict: "E",
    templateUrl: "../views/videoTemp.html",
    scope:{
      videoid: '@'
    },
    link: function(scope, element, att){
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
       $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player('muteYouTubeVideoPlayer', {
          videoId: scope.videoid, // YouTube Video ID
          width: 1280,               // Player width (in px)
          height: 720,              // Player height (in px)
          playerVars: {
            autoplay: 1,        // Auto-play the video on load
            controls: 0,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 0,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            cc_load_policty: 0, // Hide closed captions
            iv_load_policy: 0,  // Hide the Video Annotations
            autohide: 0         // Hide video controls when playing
          },
          events: {
            onReady: function(e) {
              e.target.mute();
            }
          }
        });
       }

    }





}


})
