import './Video.css';
import { useState, useRef, useEffect } from 'react';

const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const Video = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const isInViewFlag = isInView(video);
        if (isInViewFlag) {
          if (!isPlaying) {
            video.play();
            setIsPlaying(true);
          }
        } else {
          if (isPlaying) {
            video.pause();
            setIsPlaying(false);
          }
        }
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const videos = document.querySelectorAll('.video-container');
        const currentIndex = Array.from(videos).findIndex((video) => video.contains(videoRef.current));

        let nextIndex;
        if (event.key === 'ArrowUp') {
          nextIndex = currentIndex - 1;
        } else {
          nextIndex = currentIndex + 1;
        }

        if (nextIndex >= 0 && nextIndex < videos.length) {
          videos[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const progressLoop = () => {
      if (videoRef.current && videoRef.current.duration) {
        const progress = Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100);
        setProgress(progress);
      }
    };

    const intervalId = setInterval(progressLoop, 1000); // Call progressLoop every second

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          setIsPlaying(true);
        })
        .catch(error => {
          setIsPlaying(false);
          console.error('Auto-play was prevented:', error);
        });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="video-container">
      <h2>{title}</h2>
      <video
        ref={videoRef}
        src={src}
        width='304px'
        height='540px'
        onClick={togglePlayPause}
      />
      <div className="video-controls">
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
       
          <progress
            id="progress"
            max="100"
            value={progress}
          />
       
        <button className={isLiked ? 'active' : undefined} onClick={toggleLike}>{isLiked ? 'Unlike' : 'Like'} </button>
      </div>
    </div>
  );
};

export default Video;
