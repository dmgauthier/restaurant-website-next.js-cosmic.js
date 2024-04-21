import { cosmic } from "@/cosmic/client";
import Image from "next/image";

export default async function menu() {
  const { object: menu } = await cosmic.objects
    .findOne({ slug: "menu-brunch", type: "pages" })
    .props("id,title,metadata")
    .depth(1)
    .status("published");
  console.log(menu);
  return (
    <div className="flex justify-center p-4">
      <img src={menu.metadata.image.url} alt="TODO" />
    </div>
  );
}
