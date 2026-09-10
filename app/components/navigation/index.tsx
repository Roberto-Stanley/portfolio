import NavTracker from "./navTracker";
import { getMenu } from "@/lib/contentful/menu";

export default async function Navigation() {
  const menu = await getMenu();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 sm:pt-12">
      <NavTracker menu={menu} />
    </div>
  );
}
