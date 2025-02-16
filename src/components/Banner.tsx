import { roboto } from "@/utils/fonts";

export default function Banner() {
  return (
    <div>
      <div className="w-full h-screen bg-hero-pattern bg-cover sepia">
        <div className="flex  p-56 h-full ">
          <h1 className={`text-4xl font-bold text-white ${roboto.className}`}>Welcome to my website</h1>
          </div>
      </div>
    </div>
  );
}