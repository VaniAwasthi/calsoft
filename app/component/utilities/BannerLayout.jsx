"use client";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";

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
  titleOneClass,
  titleTwoClass,
  descriptionClass,
}) => {
  return (
    <div className=" relative">
      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        className="w-full h-full  r"

      />
      {/* Overlay (Optional) */}
      {/* <div
        className="absolute top-0 left-0"
        style={{
          backgroundColor: bgColor,
          opacity: overlayOpacity,
          zIndex: zIndex,
        }}
      ></div> */}

      {/* Content Section - Centered */}
      <div className="absolute top-[0%] left-0 z-10 w-full container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-start justify-center min-h-screen text-white">
          <h2 className={`font-bold  text-left${titleOneClass}`}>{title}</h2>
          <h2 className={`font-normal my-3 ${titleTwoClass}`}>{title2}</h2>
          <p
            className={`mt-2 text-sm md:text-lg leading-6 font-light  max-w-[90%] md:max-w-[400px] ${descriptionClass}`}
          >
            {description}
          </p>

          {/* Button */}
          <div className="mt-9">
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={hoverImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
