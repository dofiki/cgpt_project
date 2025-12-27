import React from "react";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
export interface CardProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  tag: string;
  readTime: string;
  highlight: string;
}

const Card = ({
  image,
  imageAlt,
  title,
  description,
  tag,
  readTime,
  highlight,
}: CardProps) => {
  return (
    <div className="h-100 w-81.25">
      <div className="relative rounded-3xl w-81.25 h-80.25">
        <Image src={image} alt={imageAlt} />
        <div
          className="absolute w-10 h-10 bg-white/40 rounded-full right-2 top-2 text-white
        flex justify-center items-center"
        >
          <Heart />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 pt-1 min-w-74.75">
        <div className="font-pop font-bold">{title}</div>

        <div className="flex text-[14px]">
          <div className="font-pop text-[#676767]">{description}</div>
          <div className="font-pop font-bold text-[#000AFF]">Read More</div>
        </div>

        <div className="flex items-center gap-1.5 text-[14px]">
          <div className="font-medium font-pop">{tag}</div>
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <div className="font-medium font-pop">{readTime}</div>
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <div className="text-[#FF0000] font-bold">{highlight}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
