export default function LoadValidationMatter() {
  return (
    <div className="mr-4 sm:mr-12 lg:mr-24 px-2 sm:px-4 lg:px-0">
      {/* Top section - 5 circles */}
      {/* Top row - 3 circles */}
      <div className="flex justify-center gap-2 sm:gap-3 lg:gap-5 mb-2 sm:mb-3 lg:mb-0">
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60">
          <CircleCard
            text="Test coverage silos across functional & performance requirements"
            cutPosition="bottom-right"
          />
        </div>
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60">
          <CircleCard
            text="Unpredictable user behaviour under load"
            cutPosition="upper-double"
          />
        </div>
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60">
          <CircleCard
            text="High defect leakage post-UAT"
            cutPosition="bottom-left"
          />
        </div>
      </div>

      {/* Bottom row - 2 circles */}
      <div className="flex justify-center gap-2 sm:gap-3 lg:gap-5">
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60">
          <CircleCard
            text="Manual regression cycles, that slow down sprints"
            cutPosition="bottom-double"
          />
        </div>
        <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 ">
          <CircleCard
            text="Compliance-critical workflows unverified under stress"
            cutPosition="bottom-double"
          />
        </div>
      </div>

      {/* Main content area with left pills and right pills */}
    </div>
  );
}

function CircleCard({ text, cutPosition }) {
  const gradientStyles = {
    top: {
      background: `conic-gradient(from 0deg, transparent 0deg, transparent 30deg, rgba(46, 48, 146, 1) 30deg, rgba(186, 0, 7, 1) 330deg, transparent 330deg, transparent 360deg)`,
    },
    bottom: {
      background: `conic-gradient(from 0deg, rgba(46, 48, 146, 1) 0deg, rgba(186, 0, 7, 1) 165deg, transparent 165deg, transparent 195deg, rgba(186, 0, 7, 1) 195deg, rgba(46, 48, 146, 1) 360deg)`,
    },
    "bottom-right": {
      background: `conic-gradient(from 0deg, rgba(46, 48, 146, 1) 0deg, rgba(186, 0, 7, 1) 135deg, transparent 135deg, transparent 165deg, rgba(186, 0, 7, 1) 165deg, rgba(46, 48, 146, 1) 360deg)`,
    },
    "bottom-left": {
      background: `conic-gradient(from 0deg, rgba(46, 48, 146, 1) 0deg, rgba(186, 0, 7, 1) 195deg, transparent 195deg, transparent 225deg, rgba(186, 0, 7, 1) 225deg, rgba(46, 48, 146, 1) 360deg)`,
    },
    "upper-double": {
      background: `conic-gradient(from 0deg, rgba(46, 48, 146, 1) 0deg, rgba(186, 0, 7, 1) 135deg, transparent 135deg, transparent 165deg, rgba(186, 0, 7, 1) 165deg, rgba(186, 0, 7, 1) 195deg, transparent 195deg, transparent 225deg, rgba(186, 0, 7, 1) 225deg, rgba(46, 48, 146, 1) 360deg)`,
    },
    "bottom-double": {
      background: `conic-gradient(from 0deg, rgba(46, 48, 146, 1) 0deg, rgba(186, 0, 7, 1) 15deg, transparent 15deg, transparent 45deg, rgba(46, 48, 146, 1) 45deg, rgba(186, 0, 7, 1) 315deg, transparent 315deg, transparent 345deg, rgba(46, 48, 146, 1) 345deg)`,
    },
  };

  return (
    <div className="relative w-full h-full aspect-square">
      {/* Gradient border background with curved cut */}
      <div
        className="absolute inset-0 rounded-full"
        style={gradientStyles[cutPosition]}
      />

      {/* White border ring - complete circle */}
      <div className="absolute inset-[0.25rem] sm:inset-[0.375rem] lg:inset-[0.5rem] bg-white rounded-full" />

      {/* Inner blue circle with content - complete circle */}
      <div
        className="absolute inset-[0.5rem] sm:inset-[0.75rem] lg:inset-[1rem] rounded-full flex items-center justify-center p-[8%] sm:p-[9%] lg:p-[10%]"
        style={{ backgroundColor: "#2e3092" }}
      >
        <p className="text-white text-xs sm:text-base lg:text-xl font-medium text-center leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
