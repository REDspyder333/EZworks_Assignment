/* eslint-disable react/no-unescaped-entities */
import Header from '../components/Header';
import Container from '../components/UI/Container';
import { Link } from 'react-router-dom';

export default function BrandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* We add padding-top to account for the fixed header */}
        <section className="relative pt-32 pb-16 md:py-24 overflow-hidden">
          
          {/* Decorative icons (positioned absolutely) */}
          <img
            src="/branding/vector-04.svg" // Assumed path
            alt="Award icon"
            className="pointer-events-none select-none hidden md:block absolute top-[15%] right-16 w-24 opacity-80"
          />
          <img
            src="/branding/vector-03.svg" // Assumed path
            alt="List icon"
            className="pointer-events-none select-none hidden md:block absolute top-[55%] right-32 w-24 opacity-80"
          />
          <img
            src="/branding/vector-01.svg" // Assumed path
            alt="Star icon"
            className="pointer-events-none select-none hidden md:block absolute bottom-16 right-24 w-24 opacity-80"
          />
          <img
            src="/branding/vector-02.svg" // Assumed path
            alt="User icon"
            className="pointer-events-none select-none hidden md:block absolute bottom-16 left-24 w-24 opacity-80"
          />

          <Container>
            {/* Back Button */}
            <div className="mb-12">
              <Link to="/" className="inline-block" aria-label="Go back">
                {/* Use the 'back-button.png' from your assets */}
                <img src="/branding/frame-2.png" alt="Back" className="w-24 h-auto" />
              </Link>
            </div>

            {/* Quote */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-ink">
                "A brand is a voice, and a product is a souvenir." – Lisa Gansky
              </h2>
              {/* Use the 'brush-stroke.jpg' from your assets */}
              <img
                src="/branding/vector-5.png"
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
                    {/* This is the branding image from your Services section */}
                    <img
                      src="/branding/hero.png"
                      alt="Branding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center font-display text-lg text-ink">Branding</p>
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-5 text-ink/90 leading-7">
                <p>A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.</p>
                <p>We shape brands that people remember, return to, and fall in love with.</p>
                <p className="font-semibold text-ink">V creates:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Branding & Communication</li>
                  <li>Market Mapping</li>
                  <li>Content Management</li>
                  <li>Social Media Management</li>
                  <li>Rebranding</li>
                </ul>

                {/* Explore Now */}
                <div className="flex items-center gap-3 pt-4">
                  <span className="font-serif text-lg text-ink">Explore Now</span>
                  {/* This uses the 'arrow.jpg' from your assets */}
                  <img src="/branding/vector.png" alt="arrow" className="w-16 h-auto absolute bottom-[12%]" />
                </div>
              </div>
            </div>
          </Container>
          
        </section>
      </main>
    </div>
  );
}