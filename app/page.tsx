// app/page.tsx
import { Hero } from "@/cosmic/blocks/landing-page/Hero";
import { Sections } from "@/cosmic/blocks/landing-page/Sections";
import { ImageCarousel } from "@/cosmic/blocks/image-gallery/ImageCarousel";
export default async function HomePage() {
  return (
    <>
      <ImageCarousel query={{ slug: "acceuil", type: "pages" }}  />
      {/* <Hero query={{ slug: "acceuil", type: "pages" }} className="hero" /> */}
      <Sections query={{ slug: "acceuil", type: "pages" }} />
    </>
  );
}
