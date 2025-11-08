/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Container from './UI/Container.jsx';

// 2. Define your video data
const videos = [
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL
  },
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=... (another video URL)', // Example URL 2
  },
  {
    poster: '/portfolio/thumbnail.png',
    url: 'https://www.youtube.com/watch?v=... (a third video URL)', // Example URL 3
  },
];

export default function PortfolioSection() {
  // 3. Set up state to track the current video
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    // Cycles to the last video if at the start
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  const nextVideo = () => {
    // Cycles to the first video if at the end
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const currentVideo = videos[currentIndex]; // Get the current video object

  return (
    // 1. INCREASED HEIGHT: Changed py-16 md:py-24 to py-24 md:py-32
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* 2. SMALLER SIZE: Changed w-60 to w-48 */}
      <img
        src="/portfolio/cam-group.svg"
        alt="camera decorative"
        className="pointer-events-none select-none hidden md:block absolute left-0 top-28 w-48 opacity-80"
        draggable={false}
      />

      {/* 2. SMALLER SIZE: Changed w-72 to w-64 */}
      {/* 3. ENSURED POSITION: 'right-0 bottom-0' is correct */}
      <img
        src="/portfolio/Footer-Vector.svg"
        alt="decorative pattern"
        className="pointer-events-none select-none hidden md:block absolute right-0 bottom-0 w-64 opacity-90"
        draggable={false}
      />

      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-ink">The Highlight Reel</h2>
          <p className="mt-2 text-ink/80">Watch the magic we've captured.</p>
        </div>

        {/* Film strip player frame */}
        <div className="relative mx-auto mt-8 max-w-4xl">
          
          {/* Film frame - FIXED to use .svg as per your code */}
          <img
            src="/portfolio/Group11.jpg"
            alt="film frame"
            className="w-full h-auto select-none"
            draggable={false}
          />

          {/* Video area */}
          <div className="absolute inset-0 flex items-center justify-center px-[8%]">
            <div className="relative w-full aspect-[16/9] bg-black/5 overflow-hidden">
              {/* 4. Use state to set the poster image */}
              <img src={currentVideo.poster} alt="reel poster" className="w-full h-full object-cover"/>
              
              {/* Play button */}
              <a
                href={currentVideo.url} // 5. Use state to set the video URL
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 grid place-items-center"
                aria-label="Play highlight reel"
              >
                {/* Updated play button style to match image */}
                <span className="grid place-items-center rounded-lg" style={{ width: 70, height: 50, background: '#FE0000' }}>
                  
                  {/* === FIXED: Replaced inline SVG with an <img> tag === */}
                  <img 
                    src="/portfolio/play-icon.png" 
                    alt="Play" 
                    className="w-8 h-8" 
                  />
                  {/* =================================================== */}

                </span>
              </a>
              
              
            </div>
            <button
                onClick={prevVideo}
                className="absolute left-[1.5%] top-1/2 -translate-y-1/2 p-2 opacity-80 hover:opacity-100"
                aria-label="Previous video"
              >
                {/* Replaced inline SVG with img tag */}
                <img
                  src="/portfolio/Vector10.png"
                  alt="Previous"
                  className="w-6 h-auto"
                />
              </button>
              
              {/* Right Arrow Button */}
              <button
                onClick={nextVideo}
                className="absolute right-[1%] top-1/2 -translate-y-1/2 p-2 opacity-80 hover:opacity-100"
                aria-label="Next video"
              >
                {/* Replaced inline SVG with img tag */}
                <img
                  src="/portfolio/Vector9.png"
                  alt="Next"
                  className="w-6 h-auto"
                />
              </button>
          </div>
        </div>
      </Container>
    </section>
  );
}