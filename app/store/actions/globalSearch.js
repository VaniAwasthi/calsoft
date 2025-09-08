import axiosInstance from "../api-config/axiosInstance";
import { toast } from "sonner";

export async function globalSearch(searchParams, selectedFilters = {}) {
  try {
    // Ensure keyword is always passed (even if empty string)
    const query = new URLSearchParams({ keyword: searchParams || "" });

    // Mapping from selectedFilters keys to API param names
    const filterMapping = {
      industry: "industries",
      categories: "categories",
      services: "tags", // assuming services → tags
      technology: "topics", // assuming technology → topics
    };

    Object.entries(filterMapping).forEach(([filterKey, apiKey]) => {
      const values = selectedFilters[filterKey];
      if (Array.isArray(values) && values.length > 0) {
        query.append(apiKey, values.join(","));
      }
    });
    const response = await axiosInstance.get(
      `/global-filter?${query.toString()}`
    );
    return response;
  } catch (error) {
    console.error(error, "Something went wrong");
    toast.error("Search failed. Please try again.");
    return null;
  }
}
