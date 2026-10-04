export function Footer() {
  return (
    <footer id="contact" className="bg-[#F4F3F0] text-[#222222] pb-7 font-bold text-[calc(1rem+2pt)] w-full">
      <div className="w-full px-[10pt]">
        <div className="text-center text-[#222222]">
          <p className="opacity-40">&copy; {new Date().getFullYear()} resume.dhnaath.com.</p>
          <p className="mt-[1.5pt] opacity-40">All rights reserved. Made with love.</p>
        </div>
      </div>
    </footer>
  );
}