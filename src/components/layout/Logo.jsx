import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a65d0914e87aef9bfc9268b/1e3fe4571_logoman.jpeg";

export default function Logo({ className = "w-9 h-9" }) {
  return (
    <div className={`${className} shrink-0 rounded-lg bg-white ring-1 ring-border overflow-hidden flex items-center justify-center`}>
      <Image
        src={LOGO_URL}
        alt="Logo MAN Palopo"
        fittingType="fit"
        className="w-full h-full object-contain"
      />
    </div>
  );
}