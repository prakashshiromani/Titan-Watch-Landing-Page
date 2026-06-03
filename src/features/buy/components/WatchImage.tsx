import Image from "next/image";
import { WatchVariant } from "@/constants/watchData";

export default function WatchImage({ variant }: { variant: WatchVariant }) {
    return (
        <div className="relative" style={{ width: "min(80vw, 340px)", height: "min(55vw, 420px)" }}>
            <Image
                src={variant.image}
                alt={`Titan Ceramic Fusion ${variant.label}`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 80vw, 340px"
            />
        </div>
    );
}
