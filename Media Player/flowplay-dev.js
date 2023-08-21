function initializeVideoPlayer(video) {
  // Get DOM elements
  const wrapper = video.closest('[f-data-video="wrapper"]');
  const posterBtn = wrapper.querySelector('[f-data-video="poster-button"]');
  const poster = wrapper.querySelector('[f-data-video="overlay"]');
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
  const allVideos = document.querySelectorAll('[f-data-video="video-element"]');

  //variables
  let track = 0;
  const forwardTime = 10; // Amount of time to forward (in seconds)
  const backwardTime = 10; // Amount of time to backward (in seconds)
  var curTime = 0;

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

  function pauseAllVideos(currentVideo) {
    allVideos.forEach((v) => {
      if (v !== currentVideo) {
        v.pause();
        resetUI(v);
      }
    });
  }

  function resetUI(v) {
    // Reset UI elements for the specified video
    const wrapper = v.closest('[f-data-video="wrapper"]');
    const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
    const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
    const pauseIcon = wrapper.querySelector('[f-data-video="pause-icon"]');
    const playIcon = wrapper.querySelector('[f-data-video="play-icon"]');

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
    video.volume = volumeSlider ? volumeSlider.value : 1;
  }

  function playVideo() {
    // Play the video and update UI
    pauseAllVideos(video);
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

  function handleProgressBarClick(e) {
    // Handle click on progress bar to seek
    const x = e.pageX - progressBar.getBoundingClientRect().left;
    const clickedTime = (x * video.duration) / progressBar.offsetWidth;
    video.currentTime = clickedTime;
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
    playVideo();
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

  // Add event listeners
  if (poster) {
    poster.addEventListener("click", handlePosterClick);
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
  document.addEventListener("keydown", handleKeyboardControls);

  defaultBehavior();
}

const htmlVids = document.querySelectorAll('[f-data-video="video-element"]');
const maxIterations = 3;
const ytEl = document.querySelectorAll('[f-data-video="youtube-element"]');
const vimEl = document.querySelectorAll('[f-data-video="vimeo-element"]');

if (maxIterations > 3 || vimEl.length > 0 || ytEl.length > 0) {
  alert(
    "You have exceeded the free plan. Kindly consider upgrading your subscription to enable the inclusion of more than five HTML videos and to utilize the functionality of both Vimeo and YouTube platforms."
  );
}

for (let i = 0; i < Math.min(maxIterations, htmlVids.length); i++) {
  const htmlVid = htmlVids[i];
  initializeVideoPlayer(htmlVid);
}
