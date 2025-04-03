"use client";
import Image from "next/image";
import Button from "./ButtonLayout";

const BannerLayout = ({
  image,
  title,
  title2,
  description,
  buttonText,
  buttonImage,
  hoverImage,
  bgColor,
  overlayOpacity,
  zIndex,
  BgClassname = "object-cover w-full h-full [object-position:76%_61%] md:object-center ",
}) => {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full top-0 left-0"
        style={{
          backgroundColor: bgColor,
          opacity: overlayOpacity,
          zIndex: zIndex,
        }}
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Background Image"
          fill
          className={BgClassname}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-start md:justify-center text-white px-6 md:px-32 max-w-7xl ">
        <h2 className="text-lg md:text-4xl font-normal text-left ">{title}</h2>
        <h2 className="text-lg md:text-4xl font-normal mt-2">{title2}</h2>
        <p className="mt-2 text-sm md:text-base leading-snug max-w-[90%] md:max-w-[400px]">
          {description}
        </p>

        {/* Button */}
        <div className="mt-6">
          <Button
            text={buttonText}
            image={buttonImage}
            hoverImage={hoverImage}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
