import Image from "next/image";

export default function Card({ data }) {
  function truncateWords(text, wordLimit) {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  return (
    <div className="flex flex-col gap-4 items-start hover:shadow-xl rounded-lg">
      <div className="rounded-lg bg-[#E0E0E0] relative w-full overflow-hidden group">
        {/* Image container - separate from sheet */}
        <div className="w-full h-80 overflow-hidden rounded-t-lg group-hover:h-0 transition-all duration-500 ease-in-out">
          <Image
            src={data.image || "/placeholder.svg"}
            alt={data.name}
            className="w-full h-full object-cover"
            width={400}
            height={320}
          />
        </div>

        {/* Blue sheet - starts below image, expands upward on hover */}
        <div className="w-full h-24 bg-[#2E3092] text-white rounded-b-lg group-hover:rounded-lg group-hover:h-[416px] flex flex-col justify-center px-4 py-3 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-1">
            <div>
              <p className="text-lg font-medium leading-tight">{data.name}</p>
              <p className="text-sm opacity-95 leading-tight">{data.post}</p>
            </div>
            {/* Description appears on hover */}
            <div className="hidden group-hover:block  opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-4">
              <p className="text-sm leading-relaxed">
                {truncateWords(data.description, 60)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom description - unchanged */}
      <p className="text-sm h-36 sm:h-24 p-2 group-hover:opacity-50 transition-opacity duration-300">
        {truncateWords(data.description, 15)}
      </p>
    </div>
  );
}
