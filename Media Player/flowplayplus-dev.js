// Create the Vimeo script element
var vimeoScript = document.createElement("script");
vimeoScript.src = "https://player.vimeo.com/api/player.js";
vimeoScript.async = true;
// Create the YouTube script element
var youtubeScript = document.createElement("script");
youtubeScript.src = "https://www.youtube.com/player_api";

// Get the reference to the current script element
var currentScript = document.currentScript;

// Append the Vimeo script before the current script
currentScript.parentNode.insertBefore(vimeoScript, currentScript);

// Append the YouTube script before the current script
currentScript.parentNode.insertBefore(youtubeScript, currentScript);

function pauseAllPlayers() {
  const allVideos = document.querySelectorAll("video, iframe");

  allVideos.forEach((video) => {
    if (video.tagName === "VIDEO") {
      video.pause();
    } else if (video.tagName === "IFRAME") {
      // Check if it's a YouTube or Vimeo iframe
      const src = video.getAttribute("src");

      if (src.includes("youtube")) {
        // For YouTube, post a message to pause the video
        video.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      } else if (src.includes("vimeo")) {
        // For Vimeo, post a message to pause the video
        video.contentWindow.postMessage('{"method":"pause"}', "*");
      }
    }
  });

  $('[f-data-video="play-icon"]').show();
  $('[f-data-video="play-button"]').show();
  $('[f-data-video="pause-icon"]').hide();
  $('[f-data-video="pause-button"]').hide();
}

///////////////////////////////HTML VIDEO///////////////////////////////////
function initializeVideoPlayer(video) {
  // Get DOM elements
  const wrapper = video.closest('[f-data-video="wrapper"]');
  const posterBtn = wrapper.querySelector('[f-data-video="poster-button"]');
  const poster = wrapper.querySelector('[f-data-video="overlay"]');
  const posterBg = wrapper.querySelector('[f-data-video="poster"]');
  const keyboardShortcuts = wrapper.getAttribute("f-data-video-shortcut");
  const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
  const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
  const forwardBtn = wrapper.querySelector('[f-data-video="forward-button"]');
  const backwardBtn = wrapper.querySelector('[f-data-video="backward-button"]');
  const replayBtn = wrapper.querySelector('[f-data-video="replay-button"]');
  const pauseIcon = wrapper.querySelector('[f-data-video="pause-icon"]');
  const playIcon = wrapper.querySelector('[f-data-video="play-icon"]');
  const progress = wrapper.querySelector('[f-data-video="progress"]');
  const progressBar = wrapper.querySelector('[f-data-video="progress-bar"]');
  const videoLoading = wrapper.querySelector('[f-data-video="loading"]');
  const fullscreenBtn = wrapper.querySelector('[f-data-video="fullscreen"]');
  const minimizeBtn = wrapper.querySelector('[f-data-video="minimize"]');
  const currentTime = wrapper.querySelector('[f-data-video="current-time"]');
  const duration = wrapper.querySelector('[f-data-video="duration"]');
  const volumeSlider = wrapper.querySelector('[f-data-video="volume-slider"]');
  const volumeBtn = wrapper.querySelector('[f-data-video="volume-button"]');
  const playbackSpeedBtn = wrapper.querySelectorAll("[f-data-video-speed]");
  const vidQualityBtn = wrapper.querySelectorAll("[f-data-video-quality]");
  const defaultQuality = wrapper.querySelector('[f-data-quality="default"]');
  const preview = wrapper.querySelector('[f-data-video="video-preview"]');
  const qualityText = wrapper.querySelector('[f-data-video="quality-text"]');
  const speedText = wrapper.querySelector('[f-data-video="speed-text"]');
  const previewWrapper = wrapper.querySelector(
    '[f-data-video="preview-wrapper"]'
  );
  const allVideos = document.querySelectorAll('[f-data-video="video-element"]');

  //variables
  let track = 0;
  const forwardTime = 10; // Amount of time to forward (in seconds)
  const backwardTime = 10; // Amount of time to backward (in seconds)
  var curTime = 0;
  let isDragging = false;
  const previewOffsetLeft = wrapper.querySelector(
    "[f-data-video-preview-offset-left]"
  )
    ? Number(
        wrapper
          .querySelector("[f-data-video-preview-offset-left]")
          .getAttribute("f-data-video-preview-offset-left")
      )
    : "";

  function formatTime(time) {
    // Format time in MM:SS format
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function defaultBehavior() {
    // Hide certain elements and set initial volume
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (minimizeBtn) {
      minimizeBtn.style.display = "none";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    if (duration) {
      duration.textContent = formatTime(video.duration);
    }
    if (previewWrapper) {
      previewWrapper.style.opacity = 0;
    }
    video.volume = volumeSlider ? volumeSlider.value : 1;
  }

  function playVideo() {
    // Play the video and update UI
    pauseAllPlayers();
    video.play();
    if (playBtn) {
      playBtn.style.display = "none";
    }
    if (playIcon) {
      playIcon.style.display = "none";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "block";
    }
    // if (posterBtn) {
    //   posterBtn.style.opacity = "0";
    // }
    if (pauseBtn) {
      pauseBtn.style.display = "block";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "none";
    }
  }

  function pauseVideo() {
    // Pause the video and update UI
    video.pause();
    if (playBtn) {
      playBtn.style.display = "block";
    }
    if (playIcon) {
      playIcon.style.display = "block";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    // if (posterBtn) {
    //   posterBtn.style.opacity = "1";
    // }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "";
    }
  }

  function forward() {
    video.currentTime += forwardTime;
  }

  function backward() {
    video.currentTime -= backwardTime;
  }

  function toggleFullscreen() {
    // Toggle fullscreen mode
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        console.error("Fullscreen request failed:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  function handlePosterClick() {
    // Handle click on poster to play/pause
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  }

  function handleReplayClick() {
    // Handle click on replay button
    video.currentTime = 0;
    playVideo();
  }

  function updateLoadingProgress(e) {
    if (video.buffered.length > 0) {
      const bufferedEnd = e.target.buffered.end(e.target.buffered.length - 1); // Get the end time of the buffered range
      const bufferedPercentage = (bufferedEnd / video.duration) * 100;
      videoLoading.style.width = `${bufferedPercentage}%`;
    }
  }

  function handleProgressBarClick(e) {
    // Handle click on progress bar to seek
    const x = e.pageX - progressBar.getBoundingClientRect().left;
    const clickedTime = (x * video.duration) / progressBar.offsetWidth;

    video.currentTime = clickedTime;
    handleTimeUpdate();
    //updateLoadingProgress();
  }

  if (progressBar) {
    isDragging = false;
    let isThrottled = false;

    const throttleTime = 50; // Adjust this value for smoother or faster tracking

    function throttle(callback, delay) {
      if (!isThrottled) {
        callback();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    }

    function handleProgressBarStart(event) {
      event.preventDefault();
      //pauseVideo();
      isDragging = true;
      const eventObject = isTouchDevice ? event.touches[0] : event;
      handleProgressBarClick(eventObject);
    }

    function handleProgressBarMove(event) {
      event.preventDefault();
      if (isDragging) {
        throttle(() => {
          const eventObject = isTouchDevice ? event.touches[0] : event;
          handleProgressBarClick(eventObject);
        }, throttleTime);
      }
    }

    function handleProgressBarEnd() {
      isDragging = false;
    }

    const isTouchDevice = "ontouchstart" in document.documentElement;

    if (isTouchDevice) {
      progressBar.addEventListener("touchstart", handleProgressBarStart);
      document.addEventListener("touchmove", handleProgressBarMove);
      document.addEventListener("touchend", handleProgressBarEnd);
    } else {
      progressBar.addEventListener("mousedown", handleProgressBarStart);
      document.addEventListener("mousemove", handleProgressBarMove);
      document.addEventListener("mouseup", handleProgressBarEnd);
    }
  }

  function handlePlaybackSpeed(speed) {
    console.log(Number(speed));
    video.playbackRate = speed;

    if (speedText) {
      if (Number(speed) === 1) {
        speedText.textContent = "Normal";
      } else {
        speedText.textContent = speed + "x";
      }
    }
  }

  function handleVideoQuality(quality) {
    curTime = video.currentTime;
    if (qualityText) {
      qualityText.textContent = quality;
    }
    // Find the corresponding source with the selected quality
    var selectedSource = video.querySelector(
      'source[f-data-video-src-quality="' + quality + '"]'
    );

    // Update the video source and reload
    video.src = selectedSource.src;
    video.load();
    video.currentTime = curTime;
    //playVideo();
  }

  function handleVolumeSliderInput() {
    // Handle volume slider input
    if (volumeSlider) {
      video.volume = volumeSlider.value;
    }
  }

  function handleTimeUpdate() {
    // Update progress bar, current time, and handle video end
    track = (video.currentTime / video.duration) * 100;
    progress.style.width = `${track}%`;
    currentTime.textContent = formatTime(video.currentTime);
    if (video.currentTime >= video.duration) {
      if (replayBtn) {
        replayBtn.style.display = "block";
      }
      pauseVideo();
    }
  }

  video.addEventListener("loadedmetadata", () => {
    // Update duration once metadata is loaded
    if (duration) {
      duration.textContent = formatTime(video.duration);
    }
  });

  function handleVolumeVideo() {
    if (volumeSlider) {
      if (video.volume > 0) {
        volumeSlider.value = 0;
        video.volume = 0;
        volumeBtn.style.opacity = 0.5;
      } else {
        volumeSlider.value = 0.5;
        video.volume = 0.5;
        volumeBtn.style.opacity = 1;
      }
    }
  }

  // Keyboard controls
  function handleKeyboardControls(event) {
    if (keyboardShortcuts) {
      const key = event.key.toLowerCase();
      if (key === " " || key === "arrowdown" || key === "arrowup") {
        event.preventDefault();
      }
      if (!video.paused) {
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            const percentage = parseInt(key) * 10;
            const seekTime = (percentage / 100) * video.duration;
            video.currentTime = seekTime;
            break;
          }
          case " ": // Spacebar
          case "k": // K
            video.paused ? playVideo() : pauseVideo();
            break;
          case "arrowleft": // Left arrow
            backward();
            break;
          case "arrowright": // Right arrow
            forward();
            break;
          case "arrowup": // Up arrow
            video.volume += 0.1;
            if (volumeSlider) {
              volumeSlider.value = video.volume;
            }
            break;
          case "arrowdown": // Down arrow
            video.volume -= 0.1;
            if (volumeSlider) {
              volumeSlider.value = video.volume;
            }
            break;
          case "m": // M
            video.muted = !video.muted;
            break;
          case "f": // F
            toggleFullscreen();
            break;
          case "l": // L
            video.loop = !video.loop;
            break;
        }
      }
    }
  }

  // New function to handle video preview on progress bar hover
  function handleProgressBarHover(e) {
    if (preview) {
      const x = e.pageX - progressBar.getBoundingClientRect().left;
      const hoveredTime = (x * video.duration) / progressBar.offsetWidth;
      preview.currentTime = hoveredTime;

      // Set the preview div to follow the scrolled progress bar
      const progressBarWidth = progressBar.offsetWidth;
      const scrolledX =
        (hoveredTime / video.duration) * progressBarWidth + previewOffsetLeft;
      if (previewWrapper) {
        previewWrapper.style.left = `${scrolledX}px`;
        previewWrapper.style.opacity = 1;
      }
    }
  }

  function handleProgressBarHoverOut() {
    // Hide the preview when not hovering
    if (preview) {
      previewWrapper.style.opacity = 0;
    }
  }

  // Add event listeners
  if (posterBtn) {
    posterBtn.addEventListener("click", handlePosterClick);
  }
  if (playBtn) {
    playBtn.addEventListener("click", playVideo);
  }
  if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseVideo);
  }
  if (forwardBtn) {
    forwardBtn.addEventListener("click", forward);
  }
  if (backwardBtn) {
    backwardBtn.addEventListener("click", backward);
  }
  if (replayBtn) {
    replayBtn.addEventListener("click", handleReplayClick);
  }
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
  if (progressBar) {
    progressBar.addEventListener("click", handleProgressBarClick);
  }
  if (volumeSlider) {
    volumeSlider.addEventListener("input", handleVolumeSliderInput);
    volumeSlider.addEventListener("touchstart", handleVolumeSliderInput);
  }
  if (progressBar) {
    progressBar.addEventListener("mousemove", handleProgressBarHover);
  }
  if (progressBar) {
    progressBar.addEventListener("mouseout", handleProgressBarHoverOut);
  }
  if (volumeBtn) {
    volumeBtn.addEventListener("click", handleVolumeVideo);
  }
  if (playbackSpeedBtn) {
    playbackSpeedBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        var speed = this.getAttribute("f-data-video-speed");
        // Do something with the speed value
        console.log("Clicked on button with speed:", speed);
        handlePlaybackSpeed(speed);
      });
    });
  }
  if (vidQualityBtn) {
    vidQualityBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        var quality = this.getAttribute("f-data-video-quality");
        handleVideoQuality(quality);
      });
    });
  }
  if (video) {
    video.addEventListener("timeupdate", handleTimeUpdate);
  }
  if (videoLoading) {
    video.addEventListener("progress", updateLoadingProgress);
  }
  document.addEventListener("keydown", handleKeyboardControls);

  defaultBehavior();

  if (defaultQuality) {
    handleVideoQuality(defaultQuality.getAttribute("f-data-video-quality"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize video players
  const videos = document.querySelectorAll('[f-data-video="video-element"]');
  videos.forEach((video) => {
    if (video.closest('[f-data-video="wrapper"]')) {
      initializeVideoPlayer(video);
    }
  });
});
////////////////////////////END OF HTML VIDEO////////////////////////////////

///////////////////////////////YOUTUBE VIDEO/////////////////////////////////
let currentVideo = null;

function initializeYoutubePlayer(youtube) {
  //get dom elements
  const wrapper = youtube.closest('[f-data-video="wrapper"]');
  const keyboardShortcuts = wrapper.getAttribute("f-data-video-shortcut");
  const posterBtn = wrapper.querySelector('[f-data-video="poster-button"]');
  const poster = wrapper.querySelector('[f-data-video="overlay"]');
  const posterBg = wrapper.querySelector('[f-data-video="poster"]');
  const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
  const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
  const forwardBtn = wrapper.querySelector('[f-data-video="forward-button"]');
  const backwardBtn = wrapper.querySelector('[f-data-video="backward-button"]');
  const replayBtn = wrapper.querySelector('[f-data-video="replay-button"]');
  const pauseIcon = wrapper.querySelector('[f-data-video="pause-icon"]');
  const playIcon = wrapper.querySelector('[f-data-video="play-icon"]');
  const progress = wrapper.querySelector('[f-data-video="progress"]');
  const progressBar = wrapper.querySelector('[f-data-video="progress-bar"]');
  const fullscreenBtn = wrapper.querySelector('[f-data-video="fullscreen"]');
  const minimizeBtn = wrapper.querySelector('[f-data-video="minimize"]');
  const currentTime = wrapper.querySelector('[f-data-video="current-time"]');
  const duration = wrapper.querySelector('[f-data-video="duration"]');
  const volumeSlider = wrapper.querySelector('[f-data-video="volume-slider"]');
  const volumeBtn = wrapper.querySelector('[f-data-video="volume-button"]');
  const playbackSpeedBtn = wrapper.querySelectorAll("[f-data-video-speed]");
  const vidQualityBtn = wrapper.querySelectorAll("[f-data-video-quality]");
  const qualityText = wrapper.querySelector('[f-data-video="quality-text"]');
  const speedText = wrapper.querySelector('[f-data-video="speed-text"]');

  // Variable
  const videoID = youtube.getAttribute("f-data-video-id");
  const videoWidth = wrapper.offsetWidth;
  const videoHeight = wrapper.offsetHeight;
  const videoControls = youtube.getAttribute("f-data-video-controls");
  const forwardTime = 5; // Amount of time to forward (in seconds)
  const backwardTime = 5; // Amount of time to backward (in seconds)
  let videoDuration = 0;
  let isDragging = false;
  let videoDurationDefault = 0;
  let quality = "auto";
  let speed = 1;
  let volume = 100;

  function defaultBehavior() {
    // Hide certain elements and set initial volume
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (minimizeBtn) {
      minimizeBtn.style.display = "none";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    if (volumeSlider) {
      volumeSlider.value = 0.5; // Set default volume value
    }
    updateVolumeIcon(0.5); // Update volume icon
  }

  function formatTime(time) {
    // Format time in MM:SS format
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function createPlayer() {
    console.log(wrapper.offsetWidth, wrapper.offsetHeight);
    const player = new YT.Player(youtube, {
      width: videoWidth,
      height: videoHeight,
      videoId: videoID,
      playerVars: {
        controls: videoControls,
        showRelatedVideos: false,
        showinfo: 0, // Hide video title
        rel: 0,
        modestbranding: 0,
        customControls: true,
        enablejsapi: 1,
        iv_load_policy: 3
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
    return player;
  }

  // Initialize video player
  const video = createPlayer();

  function onPlayerReady(event) {
    defaultBehavior();
    getVideoDuration();
  }

  function getVideoDuration() {
    videoDurationDefault = video.getDuration();
    if (duration) {
      duration.textContent = formatTime(videoDurationDefault);
    }
  }

  function playVideoUI() {
    // Play the video and update UI
    if (playBtn) {
      playBtn.style.display = "none";
    }
    if (playIcon) {
      playIcon.style.display = "none";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "";
    }
    if (poster) {
      poster.style.display = "";
    }
    if (pauseBtn) {
      pauseBtn.style.display = "block";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "none";
    }
  }

  function pauseVideoUI() {
    // Pause the video and update UI
    if (playBtn) {
      playBtn.style.display = "block";
    }
    if (playIcon) {
      playIcon.style.display = "block";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "";
    }
  }

  function playVideo() {
    pauseAllPlayers();
    video.playVideo();
  }

  function pauseVideo() {
    video.pauseVideo();
  }

  function forward() {
    video.seekTo(videoDuration + forwardTime, true); // Adjust the time as desired (in seconds)
  }

  function backward() {
    video.seekTo(videoDuration - backwardTime, true); // Adjust the time as desired (in seconds)
  }

  function handleTimeUpdate() {
    videoDuration = video.getCurrentTime() + 1;

    if (currentTime) {
      currentTime.textContent = formatTime(videoDuration);
    }
    if (duration) {
      duration.textContent = formatTime(videoDurationDefault);
    }

    const progressPercentage = (videoDuration / videoDurationDefault) * 100;
    if (progress) {
      progress.style.width = progressPercentage + "%";
    }
  }

  function handlePosterClick(player) {
    const playerState = video.getPlayerState();

    if (playerState === YT.PlayerState.PLAYING) {
      pauseVideo();
    } else if (
      playerState === YT.PlayerState.PAUSED ||
      playerState === YT.PlayerState.CUED
    ) {
      playVideo();
    }
  }

  function handleVideoEnded() {
    if (replayBtn) {
      replayBtn.style.display = "block";
    }
    if (poster) {
      poster.style.display = "none";
    }
    pauseVideo();
  }

  function handleProgressBarClick(e) {
    // Handle click on progress bar to seek
    const progressBarWidth = progressBar.offsetWidth;
    const clickX = e.offsetX;
    const progressPercentage = (clickX / progressBarWidth) * 100;

    const newTime = (progressPercentage / 100) * videoDurationDefault;

    video.seekTo(newTime, true);
    handleTimeUpdate();
    playVideo();
  }

  if (progressBar) {
    isDragging = false;
    let isThrottled = false;

    const throttleTime = 50; // Adjust this value for smoother or faster tracking

    function throttle(callback, delay) {
      if (!isThrottled) {
        callback();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    }

    function handleProgressBarStart(event) {
      event.preventDefault();
      //pauseVideo();
      isDragging = true;
      const eventObject = isTouchDevice ? event.touches[0] : event;
      handleProgressBarClick(eventObject);
    }

    function handleProgressBarMove(event) {
      event.preventDefault();
      if (isDragging) {
        throttle(() => {
          const eventObject = isTouchDevice ? event.touches[0] : event;
          handleProgressBarClick(eventObject);
        }, throttleTime);
      }
    }

    function handleProgressBarEnd() {
      isDragging = false;
    }

    const isTouchDevice = "ontouchstart" in document.documentElement;

    if (isTouchDevice) {
      progressBar.addEventListener("touchstart", handleProgressBarStart);
      document.addEventListener("touchmove", handleProgressBarMove);
      document.addEventListener("touchend", handleProgressBarEnd);
    } else {
      progressBar.addEventListener("mousedown", handleProgressBarStart);
      document.addEventListener("mousemove", handleProgressBarMove);
      document.addEventListener("mouseup", handleProgressBarEnd);
    }
  }

  function updateVolumeIcon(volume) {
    if (volumeBtn) {
      if (volume < 0.1) {
        volumeBtn.style.opacity = 0.5;
      } else {
        volumeBtn.style.opacity = 1;
      }
    }
  }

  function handleVolumeSliderInput() {
    // Handle volume slider input
    video.setVolume(volumeSlider.value * 100);
    updateVolumeIcon(volumeSlider.value);
  }

  function handleReplayClick() {
    // Handle click on replay button
    video.seekTo(0, true);
    playVideo();
  }

  function handlePlaybackSpeed(speed) {
    video.setPlaybackRate(Number(speed));
    if (speedText) {
      if (Number(speed) === 1) {
        speedText.textContent = "Normal";
      } else {
        speedText.textContent = speed + "x";
      }
    }
  }

  function handleVideoQuality(res) {
    if (qualityText) {
      qualityText.textContent = quality;
    }
    // Handle video quality change (not supported in YouTube Player API)
    alert("Changing video quality is not supported for YouTube videos.");
  }

  function handleVolumeVideo() {
    volume = video.getVolume();
    console.log(volume);
    if (volumeSlider) {
      if (volume > 0) {
        video.setVolume(0);
        volumeSlider.value = 0;
        volumeBtn.style.opacity = 0.5;
      } else {
        video.setVolume(50);
        volumeSlider.value = 0.5;
        volumeBtn.style.opacity = 1;
      }
    }
  }

  function handleFullscreenClick() {
    // Handle fullscreen button click (not supported in YouTube Player API)
    alert("Fullscreen mode is not supported for YouTube videos.");
  }

  function handleLoop() {
    // Handle loop button click (not supported in YouTube Player API)
    alert("Loop mode is not supported for YouTube videos.");
  }

  function handleKeyboardEvent(event) {
    if (keyboardShortcuts) {
      const key = event.key;
      const vol = volumeSlider.value;
      if (key === " " || key === "ArrowDown" || key === "ArrowUp") {
        event.preventDefault();
      }
      if (video === currentVideo) {
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            const percent = parseInt(key) * 10;
            const newTime = (percent / 100) * videoDurationDefault;
            video.seekTo(newTime, true);
            break;
          case " ":
          case "k":
            if (video.getPlayerState() === YT.PlayerState.PAUSED) {
              playVideo();
            } else {
              pauseVideo();
            }
            break;
          case "ArrowLeft":
            backward();
            break;
          case "ArrowRight":
            forward();
            break;
          case "ArrowUp":
            // video.setVolume(video.getVolume() + 10);
            if (volumeSlider) {
              volumeSlider.value = Number(vol) + 0.1;
              handleVolumeSliderInput();
            }
            break;
          case "ArrowDown":
            if (volumeSlider) {
              volumeSlider.value = Number(vol) - 0.1;
              handleVolumeSliderInput();
            }
            break;
          case "m":
            handleVolumeVideo();
            break;
          case "f":
            // Fullscreen mode is not supported in YouTube Player API
            alert("Fullscreen mode is not supported for YouTube videos.");
            break;
          case "l":
            // Loop mode is not supported in YouTube Player API
            alert("Loop mode is not supported for YouTube videos.");
            break;
          default:
            break;
        }
      }
    }
  }

  // Add event listeners
  if (posterBtn) {
    posterBtn.addEventListener("click", handlePosterClick);
  }
  if (playBtn) {
    playBtn.addEventListener("click", playVideo);
  }
  if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseVideo);
  }
  if (forwardBtn) {
    forwardBtn.addEventListener("click", forward);
  }
  if (backwardBtn) {
    backwardBtn.addEventListener("click", backward);
  }
  if (progressBar) {
    progressBar.addEventListener("click", handleProgressBarClick);
  }
  if (volumeSlider) {
    volumeSlider.addEventListener("input", handleVolumeSliderInput);
    volumeSlider.addEventListener("touchstart", handleVolumeSliderInput);
  }
  if (replayBtn) {
    replayBtn.addEventListener("click", handleReplayClick);
  }
  if (volumeBtn) {
    volumeBtn.addEventListener("click", handleVolumeVideo);
  }
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", handleFullscreenClick);
  }
  if (playbackSpeedBtn) {
    playbackSpeedBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        speed = this.getAttribute("f-data-video-speed");
        handlePlaybackSpeed(speed);
      });
    });
  }
  if (vidQualityBtn) {
    vidQualityBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        quality = this.getAttribute("f-data-video-quality");
        handleVideoQuality(quality);
      });
    });
  }
  document.addEventListener("keydown", handleKeyboardEvent);

  // Video methods
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      // Pause the current video if there is one
      if (currentVideo && currentVideo !== video) {
        currentVideo.pauseVideo();
      }
      currentVideo = video;
      playVideoUI();
      setInterval(handleTimeUpdate, 100); // Update progress continuously
    } else if (event.data === YT.PlayerState.PAUSED) {
      pauseVideoUI();
      clearInterval(handleTimeUpdate); // Stop updating progress when pauseds
    } else if (event.data === YT.PlayerState.ENDED) {
      handleVideoEnded();
      pauseVideo();
      clearInterval(handleTimeUpdate); // Stop updating progress when ended
    }
  }

  defaultBehavior();
  createPlayer();
}

document.addEventListener("DOMContentLoaded", () => {
  // Array to store player instances
  const players = [];

  // Initialize video players
  const videos = document.querySelectorAll('[f-data-video="youtube-element"]');

  // Expose onYouTubeIframeAPIReady globally
  window.onYouTubeIframeAPIReady = function () {
    videos.forEach((video) => {
      const player = initializeYoutubePlayer(video);
      players.push(player);
    });
  };
});
/////////////////////////////////END OF YOUTUBE/////////////////////////////////

////////////////////////////////VIMEO VIDEO////////////////////////////////////
function initializeVimeoPlayer(vimeo) {
  //get dom elements
  const wrapper = vimeo.closest('[f-data-video="wrapper"]');
  const keyboardShortcuts = wrapper.getAttribute("f-data-video-shortcut");
  const vimeoVideoClass = wrapper.querySelector(
    '[f-data-video="vimeo-player"]'
  );
  const posterBtn = wrapper.querySelector('[f-data-video="poster-button"]');
  const poster = wrapper.querySelector('[f-data-video="overlay"]');
  const posterBg = wrapper.querySelector('[f-data-video="poster"]');
  const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
  const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
  const forwardBtn = wrapper.querySelector('[f-data-video="forward-button"]');
  const backwardBtn = wrapper.querySelector('[f-data-video="backward-button"]');
  const replayBtn = wrapper.querySelector('[f-data-video="replay-button"]');
  const pauseIcon = wrapper.querySelector('[f-data-video="pause-icon"]');
  const playIcon = wrapper.querySelector('[f-data-video="play-icon"]');
  const progress = wrapper.querySelector('[f-data-video="progress"]');
  const progressBar = wrapper.querySelector('[f-data-video="progress-bar"]');
  const fullscreenBtn = wrapper.querySelector('[f-data-video="fullscreen"]');
  const minimizeBtn = wrapper.querySelector('[f-data-video="minimize"]');
  const currentTime = wrapper.querySelector('[f-data-video="current-time"]');
  const duration = wrapper.querySelector('[f-data-video="duration"]');
  const volumeSlider = wrapper.querySelector('[f-data-video="volume-slider"]');
  const volumeBtn = wrapper.querySelector('[f-data-video="volume-button"]');
  const playbackSpeedBtn = wrapper.querySelectorAll("[f-data-video-speed]");
  const vidQualityBtn = wrapper.querySelectorAll("[f-data-video-quality]");
  const qualityText = wrapper.querySelector('[f-data-video="quality-text"]');
  const speedText = wrapper.querySelector('[f-data-video="speed-text"]');

  //variable
  const videoID = vimeo.getAttribute("f-data-video-id");
  const videoWidth = wrapper.offsetWidth;
  const videoHeight = wrapper.offsetHeight;
  const videoControls = vimeo.getAttribute("f-data-video-controls");
  const forwardTime = 5; // Amount of time to forward (in seconds)
  const backwardTime = 5; // Amount of time to backward (in seconds)
  var videoDuration = 0;
  let isDragging = false;
  var videoDurationDefault = 0;
  var track = 0;
  var quality = "auto";
  var speed = 1;
  var options = {
    id: videoID,
    width: videoWidth,
    height: videoHeight,
    controls: videoControls
  };

  var video = new Vimeo.Player(vimeo, options);
  console.log("video loaded", video);
  function defaultBehavior() {
    // Hide certain elements and set initial volume
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (minimizeBtn) {
      minimizeBtn.style.display = "none";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    video.volume = volumeSlider ? volumeSlider.value : 1;
    video.getDuration().then(function (x) {
      videoDuration = formatTime(x);
      videoDurationDefault = x;
      if (duration) {
        duration.textContent = videoDuration;
      }
    });
  }

  function formatTime(time) {
    // Format time in MM:SS format
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function playVideo() {
    // Play the video and update UI
    pauseAllPlayers();
    video.play();
    if (playBtn) {
      playBtn.style.display = "none";
    }
    if (playIcon) {
      playIcon.style.display = "none";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "";
    }
    // if (posterBtn) {
    //   posterBtn.style.opacity = "0";
    // }
    if (pauseBtn) {
      pauseBtn.style.display = "block";
    }
    if (replayBtn) {
      replayBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "none";
    }
  }

  function pauseVideo() {
    // Pause the video and update UI
    video.pause();
    if (playBtn) {
      playBtn.style.display = "block";
    }
    if (playIcon) {
      playIcon.style.display = "block";
    }
    if (pauseIcon) {
      pauseIcon.style.display = "none";
    }
    // if (posterBtn) {
    //   posterBtn.style.opacity = "1";
    // }
    if (pauseBtn) {
      pauseBtn.style.display = "none";
    }
    if (posterBg) {
      posterBg.style.display = "";
    }
  }

  function handlePosterClick() {
    // Handle click on poster to play/pause
    video.getPaused().then((isPaused) => {
      if (isPaused) {
        playVideo();
      } else {
        pauseVideo();
      }
    });
  }

  function forward() {
    video.getCurrentTime().then((time) => {
      video.setCurrentTime(time + forwardTime); // Adjust the time as desired (in seconds)
    });
  }

  function backward() {
    video.getCurrentTime().then((time) => {
      video.setCurrentTime(time - backwardTime); // Adjust the time as desired (in seconds)
    });
  }

  function handleTimeUpdate(data) {
    // Update progress bar, current time, and handle video end
    currentTime.textContent = formatTime(data.seconds + 1);
    track = data.percent * 100 + "%";
    progress.style.width = track;
  }

  function handleVideoEnded() {
    replayBtn.style.display = "block";
    pauseVideo();
  }

  function handleProgressBarClick(e) {
    // Handle click on progress bar to seek
    const progressBarWidth = progressBar.offsetWidth;
    const clickX = e.offsetX;
    const progressPercentage = (clickX / progressBarWidth) * 100;
    progress.style.width = progressPercentage;
    const newTime = (progressPercentage / 100) * videoDurationDefault;
    video.setCurrentTime(newTime).then(playVideo);
    //handleTimeUpdate();
  }

  if (progressBar) {
    isDragging = false;
    let isThrottled = false;

    const throttleTime = 50; // Adjust this value for smoother or faster tracking

    function throttle(callback, delay) {
      if (!isThrottled) {
        callback();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    }

    function handleProgressBarStart(event) {
      event.preventDefault();
      //pauseVideo();
      isDragging = true;
      const eventObject = isTouchDevice ? event.touches[0] : event;
      handleProgressBarClick(eventObject);
    }

    function handleProgressBarMove(event) {
      event.preventDefault();
      if (isDragging) {
        throttle(() => {
          const eventObject = isTouchDevice ? event.touches[0] : event;
          handleProgressBarClick(eventObject);
        }, throttleTime);
      }
    }

    function handleProgressBarEnd() {
      isDragging = false;
    }

    const isTouchDevice = "ontouchstart" in document.documentElement;

    if (isTouchDevice) {
      progressBar.addEventListener("touchstart", handleProgressBarStart);
      document.addEventListener("touchmove", handleProgressBarMove);
      document.addEventListener("touchend", handleProgressBarEnd);
    } else {
      progressBar.addEventListener("mousedown", handleProgressBarStart);
      document.addEventListener("mousemove", handleProgressBarMove);
      document.addEventListener("mouseup", handleProgressBarEnd);
    }
  }

  function handleVolumeSliderInput() {
    // Handle volume slider input
    if (volumeSlider) {
      video.setVolume(volumeSlider.value);
      video.getVolume().then((volume) => {
        if (volume < 0.1) {
          volumeBtn.style.opacity = 0.5;
        } else {
          volumeBtn.style.opacity = 1;
        }
      });
    }
  }

  function handleReplayClick() {
    // Handle click on replay button
    video.setCurrentTime(0);
    playVideo();
  }

  function handlePlaybackSpeed(speed) {
    video.setPlaybackRate(speed);
    if (speedText) {
      if (Number(speed) === 1) {
        speedText.textContent = "Normal";
      } else {
        speedText.textContent = speed + "x";
      }
    }
  }

  function handleVideoQuality(res) {
    video.getQualities().then((qualities) => {
      const isQualityChangeEnabled = qualities.some((quality) => {
        return quality === res;
      });

      if (qualityText) {
        qualityText.textContent = quality;
      }

      if (isQualityChangeEnabled) {
        // Change the video quality
        video.setQuality(res).then(() => {
          // Handle any additional logic after changing the video quality
        });
      } else {
        alert("Changing video quality is not enabled for this video.");
      }
    });
  }

  function handleVolumeVideo() {
    video.getVolume().then((volume) => {
      if (volume > 0) {
        video.setVolume(0);
        volumeSlider.value = 0;
        volumeBtn.style.opacity = 0.5;
      } else {
        video.setVolume(0.5);
        volumeSlider.value = 0.5;
        volumeBtn.style.opacity = 1;
      }
    });
  }

  function handleFullscreenClick() {
    video.getFullscreen().then((isFullscreen) => {
      if (isFullscreen) {
        video.exitFullscreen();
      } else {
        video.requestFullscreen();
      }
    });
  }

  function handleLoop() {
    video.getLoop().then((isLooped) => {
      video.setLoop(isLooped);
    });
  }

  function handleKeyboardEvent(event) {
    if (keyboardShortcuts) {
      const key = event.key;
      if (key === " " || key === "ArrowDown" || key === "ArrowUp") {
        event.preventDefault();
      }

      video.getPaused().then((isPaused) => {
        if (!isPaused) {
          switch (key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              const percent = parseInt(key) * 10;
              const newTime = (percent / 100) * videoDurationDefault;
              video.setCurrentTime(newTime);
              break;
            case " ":
            case "k":
              video.getPaused().then((isPaused) => {
                if (isPaused) {
                  playVideo();
                } else {
                  pauseVideo();
                }
              });
              break;
            case "ArrowLeft":
              backward();
              break;
            case "ArrowRight":
              forward();
              break;
            case "ArrowUp":
              if (volumeSlider) {
                volumeSlider.value = Number(volumeSlider.value) + 0.1;
                handleVolumeSliderInput();
              }
              break;
            case "ArrowDown":
              if (volumeSlider) {
                volumeSlider.value = volumeSlider.value - 0.1;
                handleVolumeSliderInput();
              }
              break;
            case "m":
              handleVolumeVideo();
              break;
            case "f":
              handleFullscreenClick();
              break;
            case "l":
              handleLoop();
              break;
            default:
              break;
          }
        }
      });
    }
  }

  // Add event listeners
  if (posterBtn) {
    posterBtn.addEventListener("click", handlePosterClick);
  }
  if (playBtn) {
    playBtn.addEventListener("click", playVideo);
  }
  if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseVideo);
  }
  if (forwardBtn) {
    forwardBtn.addEventListener("click", forward);
  }
  if (backwardBtn) {
    backwardBtn.addEventListener("click", backward);
  }
  if (progressBar) {
    progressBar.addEventListener("click", handleProgressBarClick);
  }
  if (volumeSlider) {
    volumeSlider.addEventListener("input", handleVolumeSliderInput);
    volumeSlider.addEventListener("touchstart", handleVolumeSliderInput);
  }
  if (replayBtn) {
    replayBtn.addEventListener("click", handleReplayClick);
  }
  if (volumeBtn) {
    volumeBtn.addEventListener("click", handleVolumeVideo);
  }
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", handleFullscreenClick);
  }
  if (playbackSpeedBtn) {
    playbackSpeedBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        speed = this.getAttribute("f-data-video-speed");
        handlePlaybackSpeed(speed);
      });
    });
  }
  if (vidQualityBtn) {
    vidQualityBtn.forEach(function (button) {
      button.addEventListener("click", function () {
        quality = this.getAttribute("f-data-video-quality");
        handleVideoQuality(quality);
      });
    });
  }

  document.addEventListener("keydown", handleKeyboardEvent);

  // Video method
  video.on("timeupdate", handleTimeUpdate);
  video.on("ended", handleVideoEnded);
  video.on("loaded", function () {
    const vimeoIframe = $('[f-data-video="vimeo-element"]').find("iframe");

    if (vimeoVideoClass) {
      vimeoIframe.addClass(vimeoVideoClass.getAttribute("class"));
    }
  });

  defaultBehavior();
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize video players
  const videos = document.querySelectorAll('[f-data-video="vimeo-element"]');
  vimeoScript.onload = function () {
    if (videos.length > 0) {
      videos.forEach((video) => {
        initializeVimeoPlayer(video);
      });
    }
  };
});

////////////////////////////////END OF VIMEO///////////////////////////
