(function () {

  var window = this, undefined;

  video = {
    // player: {},
    build: function(vidID, container) {

      // console.log('build video:', vidID, 'to', container)

      // Check if video object already exists then destroy()
      if ( $('#video').length ) { this.destroy(); }

      // Create DOM element
      $(container).append( '<video id="video" style="width: 100%; height: 100%;"> \
        <source src="https://www.youtube.com/watch?v=' + vidID + '" type="video/youtube" > \
        </video>');


      // Instatiate video player to video.player
      this.player = new MediaElementPlayer('#video', this.settings);

  },
  destroy: function () {

    this.player.pause();
    $('.mejs-container').remove();
    this.player = {};

  },
  settings: {
    plugins : ['flash', 'silverlight'],
    pluginPath : 'js/mediaelement-js/',
    flashName : 'flashmediaelement.swf',
    silverlightName : 'silverlightmediaelement.xap',
    // if the <video width> is not specified, this is the default
    defaultVideoWidth: 480,
    // if the <video height> is not specified, this is the default
    defaultVideoHeight: 270,
    // if set, overrides <video width>
    videoWidth: -1,
    // if set, overrides <video height>
    videoHeight: -1,
    // width of audio player
    audioWidth: 400,
    // height of audio player
    audioHeight: 30,
    // initial volume when the player starts
    startVolume: 1.0,
    // useful for <audio> player loops
    loop: false,
    // enables Flash and Silverlight to resize to content size
    enableAutosize: true,
    // the order of controls you want on the control bar (and other plugins below)
    features: ['playpause','progress','current','tracks'],
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: true,
    // force iPad's native controls
    iPadUseNativeControls: false,
    // force iPhone's native controls
    iPhoneUseNativeControls: false, 
    // force Android's native controls
    AndroidUseNativeControls: false,
    // forces the hour marker (##:00:00)
    alwaysShowHours: false,
    // show framecount in timecode (##:00:00:00)
    showTimecodeFrameCount: false,
    // used when showTimecodeFrameCount is set to true
    framesPerSecond: 25,
    // turns keyboard support on and off for this instance
    enableKeyboard: false,
    // when this player starts, it will pause other players
    pauseOtherPlayers: true,
    // array of keyboard commands
    keyActions: []
    
  }
}

  $(document).ready(function () {

    $('input.render').click( function(){
      var vidID = $('.youtube-id').val();
      video.build( vidID, '.video-container')
    });

    $('input.destroy').click( function(){
      video.destroy();
    });

  });

})();