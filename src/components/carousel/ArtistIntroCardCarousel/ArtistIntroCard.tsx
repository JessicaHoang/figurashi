import Image from "next/image";

export default function ArtistIntroCard() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden items-center justify-center" style={{ backgroundColor: '#EAA074' }}>
      
      {/* Left side */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h2 className="text-3xl text-[#FCF7D9] font-bold mb-4">Jessica — Creator of Figurashi</h2>
        <p className="text-[#FCF7D9] leading-relaxed">
          I’m a designer-engineer who loves building beautiful, collectible-inspired
          experiences. Figurashi is my passion project, blending art, tech, and
          storytelling into a world of characters.
        </p>
      </div>

      {/* Right side */}
      <div className="flex-1 relative min-h-[250px] md:min-h-[350px] m-5 rounded-xl overflow-hidden">
        <Image
          src="/images/artist/davinci-sweetnsour.png" 
          alt="Jessica portrait"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}