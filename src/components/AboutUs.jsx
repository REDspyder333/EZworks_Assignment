import Container from './UI/Container.jsx';

export default function AboutUs() {
  return (
    <section id="about-us" className="relative py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column: heading, copy, stats */}
          <div className="order-2 lg:order-1">
            
            <h2 className="text-base sm:text-2xl md:text-3xl font-serif text-ink text-center lg:text-left whitespace-nowrap">
              A montage of familiar faces and names.
            </h2>

            <div className="mt-6 text-center text-[0.92rem] leading-6 text-ink/90 max-w-xl mx-auto">
              <p>Some stories come from the biggest names.</p>
              <p>Others begin with bold, rising voices.</p>
              <p>
                We’ve been fortunate to walk alongside both –
                <br className="hidden sm:block" />
                listening, creating, and building stories that
                <br className="hidden sm:block" />
                matter.
              </p> {/* <-- This was the typo, now fixed */}
            </div>

            {/* Stats sticky notes */}
            <div className="mt-10 flex flex-wrap items-end justify-center lg:justify-start gap-6 lg:gap-0">
              {/* 85+ Projects */}
              <div
                // UPDATED: Added z-index
                className="relative w-40 h-40 sm:w-44 sm:h-44 rotate-3 drop-shadow-xl z-10"
                style={{ backgroundImage: 'url(/about/frame-9.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-label="85+ Projects"
              >
              </div>

              {/* 50+ Happy Clients */}
              <div
                // UPDATED: Added negative margin for large screens and z-index
                className="relative w-40 h-40 sm:w-44 sm:h-44 -rotate-300 drop-shadow-xl lg:-ml-8 z-8"
                style={{ backgroundImage: 'url(/about/frame-22.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-label="50+ Happy Clients"
              >
              </div>

              {/* 10+ Experts Team */}
              <div
                // UPDATED: Added negative margin for large screens and z-index
                className="relative w-40 h-40 sm:w-44 sm:h-44 rotate-359 drop-shadow-xl lg:-ml-8 z-5"
                style={{ backgroundImage: 'url(/about/frame-23.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-label="10+ Experts Team"
              >
              </div>
            </div>
          </div>

          {/* Right column: handwritten copy and brand objects */}
          <div className="relative order-1 lg:order-2">
            {/* 1. Paragraph block (unchanged) */}
            <div className="text-[26px] sm:text-[30px] md:text-[34px] leading-[1.4] font-display text-ink/90 text-center lg:text-left">
              <p>Every project is more than just a brief -</p>
              <p>it’s a new chapter waiting to be written.</p>
              <p>Together, we’ve crafted tales that inspire,</p>
              <p>connect, and endure.</p>
            </div>

            {/* 2. New container for both images, moved below the text */}
            {/* This container holds both images and positions them as a group. */}
            <div className="relative mt-10 lg:mt-14 w-full max-w-2xl lg:w-[520px] mx-auto lg:ml-auto">
              
              {/* 3. Enlarged accent (group-10.png) - placed as a background layer */}
              <img
                src="/about/group-10.png"
                alt="Accent"
                // 'absolute' positions it within the parent
                // 'h-[120%]' makes it 20% taller than its parent (adjust as needed)
                // 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' re-centers it
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[150%] pointer-events-none"
                draggable={false}
              />
              {/* 4. Main content (objects.png) - placed on top */}
              <img
                src="/about/objects.png"
                alt="Brand logos and illustration"
                // 'relative' makes it stack on top of the absolute accent image
                // 'w-[50%] h-[50%]' sets the size
                // 'mx-auto' centers the image
                // 'translate-x-4' slightly shifts it to the right
                className="relative pointer-events-none select-none w-[70%] h-auto mx-auto translate-x-1 translate-y-[20%]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}