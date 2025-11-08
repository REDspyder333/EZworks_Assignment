/* eslint-disable react/prop-types */
import Container from './UI/Container.jsx';
import { Link } from 'react-router-dom';

function Card({
  image, // This will be the main photograph
  label,
  rotation = 0,
  tape, // This will be the tape graphic
  href,
}) {
  const Wrapper = ({ children }) =>
    href ? <Link to={href} className="block focus:outline-none" aria-label={label}>{children}</Link> : <>{children}</>;

  return (
    <div
      className="relative drop-shadow-xl"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* polaroid frame (main image and label) - Rendered FIRST */}
      <Wrapper>
        <div className="bg-white p-4 pb-12 rounded-sm hover:scale-[1.01] transition-transform">
          <div className="relative w-[320px] h-[380px] bg-gray-100 overflow-hidden">
            <img
              src={image} // FIXED: Using 'image' prop for the main photo
              alt={label}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <p className="mt-3 text-center font-display text-lg text-ink">{label}</p>
        </div>
      </Wrapper>

      {/* tape - Rendered SECOND (on top) */}
      <img
        src={tape} // FIXED: Using 'tape' prop for the tape graphic
        alt="tape"
        // ADDED: z-10 ensures it's on top of the Wrapper
        className="absolute -top-9 left-1/2 -translate-x-1/2 w-56 select-none pointer-events-none z-10"
        draggable={false}
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services-showcase" className="relative pt-14 pb-24">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-ink">The storyboard reveals the breadth of our craft.</h2>
          {/* Brush underline from asset */}
          <div className="mx-auto mt-3">
            <img src="/services/vector-5.svg" alt="brush underline" className="mx-auto w-[560px] max-w-full h-auto select-none" draggable={false} />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 flex flex-col md:flex-row gap-y-20 md:gap-x-8 lg:gap-x-12 justify-center items-center md:items-start">
          
          {/* FIXED: 'image' prop gets the main photo, 'tape' prop gets the tape graphic */}
          <Card image="/services/tape-1.png" label="Film Production" rotation={-8} tape="/services/image-6.png" href="/film-production" />
          
          <div className="md:mt-12">
            {/* FIXED: 'image' prop gets the main photo, 'tape' prop gets the tape graphic */}
            <Card image="/services/tape-2.png" label="Branding" rotation={0} tape="/services/image-7.png" href="/branding" />
          </div>
          
          {/* FIXED: 'image' prop gets the main photo, 'tape' prop gets the tape graphic */}
          <Card image="/services/tape-3.png" label="Art Curation" rotation={8} tape="/services/image-8.png" href="/art-curation" />
        </div>
      </Container>

      {/* Lace border at bottom */}
      <div className="absolute -bottom-2 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <img src="/services/lace.svg" alt="lace" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}