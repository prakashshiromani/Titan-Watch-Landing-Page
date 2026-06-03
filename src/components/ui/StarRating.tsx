export default function StarRating({ count }: { count: number }) {
    return (
        <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <polygon
                        points="7,1 8.8,5.2 13.4,5.6 10,8.6 11,13.2 7,10.6 3,13.2 4,8.6 0.6,5.6 5.2,5.2"
                        fill={i < count ? "#C8A96A" : "rgba(255,255,255,0.15)"}
                    />
                </svg>
            ))}
        </span>
    );
}
