import { Suspense } from "react";
import { SearchFilters } from "@/app/component/search/SearchFilters";
import { SearchResultsGrid } from "@/app/component/search/SearchResultsGrid";
import { HeroSection } from "@/app/component/search/HeroSection";

async function SearchResults({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialSearchQuery = resolvedSearchParams.s || "";

  const pageKey = `search-${initialSearchQuery}-${Date.now()}`;

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

  // const searchResults = await fetchSearchResults(initialSearchQuery)

  const searchResults = [
    {
      id: 1,
      title: "Calsoft Launches CalTIA: Intelligent Test Management Platform",
      description:
        "CalTIA: On-prem AI-driven solution to ensure faster testing, reliable deployments & optimize regression....",
      category: "News",
      link: "#",
    },
    {
      id: 2,
      title: "Calsoft Test Impact Analyzer (CalTIA)",
      description:
        "Learn how Calsoft's CalTIA optimizes testing with machine learning, reduces regression time, and integrates seamless....",
      category: "Brochure",
      link: "#",
    },
    {
      id: 3,
      title: "CalTIA – Optimize Testing Process",
      description:
        "AI-Driven Testing Solution Optimize Testing and Accelerate Your GTM with On-Prem AI-Driven Regression Testing and Te....",
      category: "eBriefs",
      link: "#",
    },
    {
      id: 4,
      title: "Master in Regression Testing with AI",
      description:
        "Learn advanced techniques for AI-powered regression testing and optimization strategies....",
      category: "Webinars",
      link: "#",
    },
    {
      id: 5,
      title: "Monthly Newsletter June 2025",
      description:
        "Stay updated with the latest developments in AI testing and automation technologies....",
      category: "Hyphen-Newsletter",
      link: "#",
    },
    {
      id: 6,
      title: "AI-Powered Test Optimization for Enterprise Engineering Teams",
      description:
        "Comprehensive guide to implementing AI-driven testing solutions in enterprise environments....",
      category: "eBriefs",
      link: "#",
    },
  ];

  const filterData = {
    categories: [
      "Awards",
      "Brochure",
      "eBriefs",
      "Hawkeye-articles",
      "Hyphen-Newsletter",
      "News",
      "Podcast-webinar",
      "Podcasts",
      "Case Studies",
      "White Papers",
      "Research Reports",
      "Technical Guides",
    ],
    services: [
      "AI/ML Services",
      "Cloud Migration",
      "DevOps Consulting",
      "Quality Assurance",
      "Product Engineering",
      "Data Analytics",
      "Cybersecurity",
      "Mobile Development",
      "Web Development",
      "API Development",
    ],
    technology: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Kubernetes",
      "Docker",
      "React",
      "Node.js",
      "Python",
      "Java",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
    industry: [
      "Healthcare",
      "Finance",
      "E-commerce",
      "Manufacturing",
      "Education",
      "Retail",
      "Automotive",
      "Telecommunications",
      "Media & Entertainment",
      "Government",
    ],
  };

  return (
    <div key={pageKey} className="min-h-screen bg-gray-50">
      <HeroSection initialSearchQuery={initialSearchQuery} />

      <div className="container">
        <div className="py-12">
          <div className="flex gap-8">
            <SearchFilters
              initialSearchQuery={initialSearchQuery}
              filterData={filterData}
            />
            <SearchResultsGrid searchResults={searchResults} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage({ searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}
