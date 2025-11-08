/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx'; // <-- Header is included
import Container from '../components/UI/Container';

export default function FilmProductionPage() {
  return (
    <div className="min-h-screen">
      {/* This page doesn't pass props because App.jsx handles state */}
      <Header /> 

      <main>
        <section className="relative pt-32 pb-16 md:py-24 overflow-hidden">
      
          {/* Decorative camera images (positioned absolutely) */}
          <img
            src="/film-production/Camera-01.png"
            alt="Vintage camera"
            className="pointer-events-none select-none hidden md:block absolute top-24 right-16 w-32 opacity-80"
          />
          <img
            src="/film-production/Camera-03.png"
            alt="Camcorder"
            className="pointer-events-none select-none hidden md:block absolute top-[55%] right-32 w-28 opacity-80"
          />
          <img
            src="/film-production/Camera-02.png"
            alt="Tripod"
            className="pointer-events-none select-none hidden md:block absolute bottom-16 right-24 w-28 opacity-80"
          />
          <img
            src="/film-production/Camera-04.png"
            alt="Classic camera"
            className="pointer-events-none select-none hidden md:block absolute bottom-16 left-24 w-28 opacity-80"
          />

          <Container>
            {/* Back Button */}
            <div className="mb-12">
              <Link to="/" className="inline-block" aria-label="Go back">
                <img src="/film-production/back-button.png" alt="Back" className="w-24 h-auto" />
              </Link>
            </div>

            {/* Quote */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-ink">
                "Filmmaking is a chance to live many lifetimes." – Robert Altman
              </h2>
              <img
                src="/film-production/brush-stroke.png"
                alt="brush stroke"
                className="mx-auto mt-3 w-[560px] max-w-full h-auto select-none"
              />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
              
              {/* Left Column: Polaroid Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative bg-white p-4 pb-12 rounded-sm shadow-xl w-[380px]">
                  <div className="relative w-full h-[420px] bg-gray-100 overflow-hidden">
                    <img
                      src="/film-production/main-photo.png"
                      alt="Film Production set"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center font-display text-lg text-ink">Film Production</p>
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-5 text-ink/90 leading-7">
                <p>Who says films are just an escape? We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.</p>
                <p className="font-semibold text-ink">V crafts:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Documentaries</li>
                  <li>Corporate Videos</li>
                  <li>2D Animation Videos</li>
                  <li>3D Animation Videos</li>
                </ul>

                {/* Explore Now */}
                <div className="flex items-center gap-3 pt-4">
                  <span className="font-serif text-lg text-ink">Explore Now</span>
                  <img src="/film-production/arrow.png" alt="arrow" className="w-16 h-auto absolute bottom-[15%]" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}