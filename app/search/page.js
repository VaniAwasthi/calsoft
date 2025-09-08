"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
import { SearchFilters } from "@/app/component/search/SearchFilters";
import { SearchResultsGrid } from "@/app/component/search/SearchResultsGrid";
import { HeroSection } from "@/app/component/search/HeroSection";
import { globalSearch } from "../store/actions/globalSearch";
import { useSearchParams } from "next/navigation";
import { fetchBlogFilterList } from "@/app/store/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";

function SearchResults() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const initialSearchQuery = searchParams.get("s") || "";

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredResults, SetfilteredResults] = useState(searchResults);

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    services: [],
    technology: [],
    industry: [],
  });

  const filters = useSelector((state) => state.blogs);

  const performSearch = async (query) => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await globalSearch(query, selectedFilters);
      if (response?.data) {
        setSearchResults(response.data.results);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function search(value) {
    if (value === "") SetfilteredResults(searchResults);
    else
      SetfilteredResults(
        searchResults.filter((blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase())
        )
      );
  }

  useEffect(() => {
    performSearch(initialSearchQuery);
  }, [initialSearchQuery, selectedFilters]);

  if (!initialSearchQuery) {
    return (
      <div className="min-h-screen bg-gray-50">
        <HeroSection initialSearchQuery="" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">Enter a search term to find results</p>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchBlogFilterList());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection initialSearchQuery={initialSearchQuery} />

      <div className="container mx-auto px-4">
        <div className="py-12">
          {isLoading ? (
            <div className="text-center">
              <p>Searching...</p>
            </div>
          ) : (
            <div className="flex gap-8">
              <SearchFilters
                initialSearchQuery={initialSearchQuery}
                filterData={filters}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                debounceSearch={search}
              />
              <SearchResultsGrid searchResults={filteredResults} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
