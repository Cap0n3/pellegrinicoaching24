import React from "react";
import { Star, StarHalf } from "lucide-react";

export type RangedNumber = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

interface RatingStarsProps {
    rating: RangedNumber;
}

const starColors = {
    filled: "#ffb23e",
    empty: "#dfdfdf",
};

export default function RatingStars({
    rating = 2.5 as RangedNumber,
}: RatingStarsProps) {
    // Calculate the number of full and half stars
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;

    return (
        <div className="relative">
            <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} fill={starColors.empty} strokeWidth={0} />
                ))}
                <div className="absolute top-0 flex gap-1">
                    {Array.from({ length: fullStars }, (_, index) => (
                        <Star
                            key={index}
                            fill={starColors.filled}
                            strokeWidth={0}
                        />
                    ))}
                    {halfStars === 1 && (
                        <StarHalf fill={starColors.filled} strokeWidth={0} />
                    )}
                </div>
            </div>
        </div>
    );
}
