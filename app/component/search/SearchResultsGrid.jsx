"use client";

export function SearchResultsGrid({ searchResults }) {
  return (
    <>
      <style jsx global>{`
        .card-hover {
          position: relative;
          overflow: hidden;
        }

        .card-hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #f59e0b;
          transform: translateY(-100%);
          transition: all 0.3s ease;
          z-index: 1;
        }

        .card-hover:hover::before {
          transform: translateY(0);
          height: 100%;
          background: rgba(245, 158, 11, 0.1);
        }

        .card-hover:hover {
          background-color: rgba(245, 158, 11, 0.05);
        }

        .card-content {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="flex-1">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-lg shadow-sm border-t-4 border-orange-500 card-hover transition-all duration-300"
            >
              <div className="p-6 card-content flex flex-col items-start justify-between h-full">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                      {result.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                <div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-fit ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
