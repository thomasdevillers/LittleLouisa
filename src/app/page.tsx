import Image from "next/image";
import BookingForm from "./booking-form";
import FadeIn from "./fade-in";
import Gallery from "./gallery";
import MobileNav from "./mobile-nav";
import ParallaxHero from "./parallax-hero";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#ffffffcc] backdrop-blur-[32px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <a href="#" className="font-[family-name:var(--font-headline)] text-2xl font-light tracking-tighter">
            LITTLE LOUISA
          </a>
          <nav className="hidden md:flex gap-10 items-center">
            {["About", "Gallery", "Amenities", "The Area", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "The Area" ? "area" : item.toLowerCase()}`}
                className="uppercase tracking-[0.2em] text-[10px] font-bold hover:opacity-50 transition-opacity"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              href="#booking"
              className="hidden md:inline-block bg-black text-white px-6 py-2.5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#3c3b3b] transition-all"
            >
              Book now
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero with Parallax */}
      <ParallaxHero>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover parallax-hero"
          aria-label="Walkthrough video of Little Louisa guest house in Colleen Glen"
        >
          <source src="/walkthrough.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 w-full px-6 md:px-12 pb-32">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="font-[family-name:var(--font-headline)] text-white text-5xl md:text-[90px] font-light leading-[0.95] tracking-tighter mb-10">
              Your quiet place<br className="hidden md:block" /> in Colleen Glen.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="bg-white text-black px-10 py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-black hover:text-white transition-all duration-500 text-center"
              >
                Request a booking
              </a>
              <a
                href="#gallery"
                className="border border-white text-white px-10 py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-white hover:text-black transition-all duration-500 text-center"
              >
                See the house
              </a>
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* Rates Strip */}
      <FadeIn>
        <div className="relative z-30 -mt-12 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto bg-white ambient-shadow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
              <div>
                <p className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40 mb-1">Sharing</p>
                <p className="font-[family-name:var(--font-headline)] text-2xl">R495</p>
                <p className="text-[9px] opacity-40 uppercase">per person / night</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40 mb-1">Single</p>
                <p className="font-[family-name:var(--font-headline)] text-2xl">R595</p>
                <p className="text-[9px] opacity-40 uppercase">per person / night</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40 mb-1">Longer stays</p>
                <p className="font-[family-name:var(--font-headline)] text-lg italic">Special rates available</p>
              </div>
            </div>
            <a
              href="#booking"
              className="bg-black text-white px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#3c3b3b] transition-all w-full md:w-auto text-center"
            >
              Request booking
            </a>
          </div>
        </div>
      </FadeIn>

      {/* About */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 mb-8 block">The Retreat</span>
            <h2 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl leading-tight tracking-tighter mb-8">
              A home that breathes with the valley.
            </h2>
            <p className="text-black/70 leading-relaxed text-lg mb-12 max-w-lg">
              Little Louisa is a self-catering guest house tucked into the green quiet of Colleen Glen, Port Elizabeth. No front desk. No wake-up calls. Just two thoughtfully appointed bedrooms, a kitchen that invites slow mornings, a fireplace for cold evenings, and a garden that makes you forget you ever had somewhere to be.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-black/5">
              <div>
                <p className="font-[family-name:var(--font-headline)] text-4xl mb-1">2</p>
                <p className="uppercase tracking-widest text-[9px] font-bold opacity-40">Bedrooms</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-headline)] text-4xl mb-1">4</p>
                <p className="uppercase tracking-widest text-[9px] font-bold opacity-40">Max Guests</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-headline)] text-4xl mb-1">2</p>
                <p className="uppercase tracking-widest text-[9px] font-bold opacity-40">Bathrooms</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src="/photos/livingroom.jpg"
                  alt="Little Louisa living room"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 hidden md:block max-w-xs">
                <p className="font-[family-name:var(--font-headline)] italic text-xl">
                  &ldquo;The kind of place where doing nothing feels like the most productive thing you&rsquo;ve done all year.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 md:px-12 bg-surface-low/30">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 mb-4 block">The Gallery</span>
                <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl tracking-tighter">Every corner, considered.</h2>
              </div>
            </div>
          </FadeIn>
          <Gallery />
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl tracking-tighter max-w-md leading-none">
                Everything You Need
              </h2>
              <span className="uppercase text-[10px] tracking-[0.4em] font-bold opacity-40">Self-Catering Essentials</span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
              {[
                { label: "Full Kitchen", desc: "Cook at your own pace with a fully equipped kitchen — stove, oven, fridge, and all the essentials." },
                { label: "Fireplace", desc: "A wood-burning fireplace for those cool PE evenings when all you want is warmth and quiet." },
                { label: "Private Garden", desc: "Step outside into a peaceful garden — your own green space to read, breathe, or do absolutely nothing." },
                { label: "Free WiFi", desc: "Stay connected when you need to. Disconnect when you don't." },
                { label: "Secure Parking", desc: "Off-street parking on the property. Your car rests as well as you do." },
                { label: "Two Bathrooms", desc: "No queues. Each bedroom has its own bathroom — one with a bath, one with a shower." },
                { label: "Self-Catering", desc: "Your space, your schedule. No meal times, no housekeeping knocks — just freedom." },
                { label: "Quiet Location", desc: "Colleen Glen is the kind of neighbourhood where birdsong is the loudest thing you'll hear." },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-4">
                  <h4 className="uppercase tracking-widest text-[11px] font-bold border-b border-black/10 pb-4">{item.label}</h4>
                  <p className="text-xs text-black/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Area */}
      <section id="area" className="py-32 px-6 md:px-12 bg-surface-low/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <FadeIn>
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 mb-8 block">The Setting</span>
              <h2 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl tracking-tighter mb-12">
                Colleen Glen,<br />Port Elizabeth.
              </h2>
              <p className="text-black/70 mb-12 max-w-lg leading-relaxed text-lg">
                Nestled in one of PE&rsquo;s quietest suburbs, Little Louisa puts you close to everything worth seeing — without any of the noise. Beaches, nature reserves, restaurants, and the city centre are all a short drive away.
              </p>
              <div className="space-y-8">
                {[
                  { name: "Sardinia Bay Beach", desc: "Pristine, uncrowded coastline", time: "15 min drive" },
                  { name: "Schoenmakerskop", desc: "Rock pools and coastal walks", time: "18 min drive" },
                  { name: "Kragga Kamma Game Park", desc: "Big five game viewing", time: "10 min drive" },
                  { name: "The Boardwalk Casino & Entertainment", desc: "Shopping, dining, and cinema", time: "12 min drive" },
                  { name: "Seaview Lion & Predator Park", desc: "Wildlife encounters", time: "20 min drive" },
                  { name: "Van Stadens Wildflower Reserve", desc: "Hiking and river gorge views", time: "25 min drive" },
                  { name: "PE Airport", desc: "Chief Dawid Stuurman International", time: "20 min drive" },
                ].map((place) => (
                  <div key={place.name} className="flex justify-between items-end border-b border-black/5 pb-4">
                    <div>
                      <p className="uppercase tracking-widest text-[11px] font-bold">{place.name}</p>
                      <p className="text-xs text-black/40">{place.desc}</p>
                    </div>
                    <span className="text-xs font-bold shrink-0 ml-4">{place.time}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn>
              <div className="h-[600px] w-full relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13252.5!2d25.75!3d-33.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad3b0f6a0c0a1%3A0x0!2sColleen+Glen%2C+Gqeberha!5e0!3m2!1sen!2sza!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Little Louisa location — Colleen Glen, Port Elizabeth"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 md:py-48 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <FadeIn>
              <h2 className="font-[family-name:var(--font-headline)] text-5xl sticky top-32 tracking-tighter">
                Guest<br />Reflections
              </h2>
            </FadeIn>
          </div>
          <div className="md:w-2/3 space-y-24">
            {[
              {
                quote: "We came for a weekend and genuinely considered never leaving. The fireplace, the garden, the silence — it's the kind of place that recalibrates you.",
                name: "Sarah M.",
                from: "Cape Town",
              },
              {
                quote: "Spotlessly clean, beautifully thought out, and the kitchen had everything we needed. We cooked every meal and loved every minute of it.",
                name: "James & Priya K.",
                from: "Johannesburg",
              },
              {
                quote: "Little Louisa feels like staying at a friend's beautifully kept home — if that friend had impeccable taste and left you completely alone.",
                name: "Anele D.",
                from: "Gqeberha",
              },
            ].map((review) => (
              <FadeIn key={review.name}>
                <div className="relative bg-surface-low/50 p-12 ambient-shadow">
                  <span className="absolute -top-16 -left-8 font-[family-name:var(--font-headline)] text-[160px] text-black/5 select-none leading-none">
                    &ldquo;
                  </span>
                  <p className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl leading-tight tracking-tight relative z-10">
                    {review.quote}
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <span className="uppercase tracking-widest text-[10px] font-bold">{review.name}</span>
                    <span className="text-black/20">&bull;</span>
                    <span className="uppercase tracking-widest text-[10px]">{review.from}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 mb-4 block">Reservations</span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl tracking-tighter mb-4">Request a Booking</h2>
              <p className="text-black/50 text-sm max-w-md mx-auto">
                Fill in your details below and we&rsquo;ll get back to you to confirm availability and finalise your stay.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <BookingForm />
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 mb-4 block">Information</span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl tracking-tighter">Your Questions</h2>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="divide-y divide-black/5 border-y border-black/5">
              {[
                { q: "What is the check-in and check-out time?", a: "Check-in is from 2:00 PM, and check-out is by 10:00 AM. We're flexible where we can — just let us know." },
                { q: "Is Little Louisa pet friendly?", a: "Unfortunately we're unable to accommodate pets at this time. We want to keep the space pristine for guests with allergies." },
                { q: "Is the kitchen fully equipped?", a: "Yes — stove, oven, microwave, fridge, kettle, toaster, pots, pans, crockery, cutlery, and all the basics. You just need to bring your groceries." },
                { q: "How far is it from the beach?", a: "The nearest beaches are about 15–20 minutes by car. Sardinia Bay and Schoenmakerskop are both stunning and well worth the short drive." },
                { q: "Are there special rates for longer stays?", a: "Yes. If you're staying three nights or more, get in touch and we'll work out a rate that suits." },
                { q: "Is there load shedding backup?", a: "We have gas for cooking and hot water, so you'll still eat well and shower warm regardless of Eskom's plans." },
              ].map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="flex justify-between items-center py-8 cursor-pointer list-none">
                    <span className="uppercase tracking-widest text-[11px] font-bold pr-4">{faq.q}</span>
                    <span className="text-lg transition-transform duration-300 group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <div className="pb-8 text-sm text-black/60 leading-relaxed max-w-2xl">{faq.a}</div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
            <div className="md:w-1/3">
              <a href="#" className="font-[family-name:var(--font-headline)] text-4xl block mb-8">LITTLE LOUISA</a>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xs">
                A self-catering retreat in Colleen Glen, Port Elizabeth. Quiet stays for people who value space, comfort, and a good fireplace.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16 md:w-1/3">
              <div>
                <h5 className="uppercase tracking-[0.3em] text-[10px] font-bold mb-8 text-white/30">Navigation</h5>
                <ul className="space-y-4">
                  {[
                    { label: "Home", href: "#" },
                    { label: "About", href: "#about" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Amenities", href: "#amenities" },
                    { label: "The Area", href: "#area" },
                    { label: "Reviews", href: "#reviews" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-xs hover:text-white/50 transition-colors">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="uppercase tracking-[0.3em] text-[10px] font-bold mb-8 text-white/30">Contact</h5>
                <ul className="space-y-4">
                  <li><a href="mailto:info@littlelouisa.co.za" className="text-xs hover:text-white/50 transition-colors">info@littlelouisa.co.za</a></li>
                  <li><a href="tel:+27730012400" className="text-xs hover:text-white/50 transition-colors">073 001 2400</a></li>
                  <li className="text-xs text-white/40">Colleen Glen, Port Elizabeth</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/4 flex flex-col items-start md:items-end gap-8">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 md:text-right">Ready for quiet?</p>
              <a
                href="#booking"
                className="bg-white text-black px-10 py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-white/90 transition-all text-center"
              >
                Book your stay
              </a>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="uppercase tracking-[0.1em] text-[9px] text-white/30">
              &copy; {new Date().getFullYear()} Little Louisa. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27730012400?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20booking%20Little%20Louisa."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
