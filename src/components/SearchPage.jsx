import React, { useState } from "react";

const mockData = [
  { id: 1, title: "React Basics", category: "Programming" },
  { id: 2, title: "JavaScript Fundamentals", category: "Programming" },
  { id: 3, title: "Healthy Eating", category: "Health" },
  { id: 4, title: "Yoga for Beginners", category: "Health" },
  { id: 5, title: "Understanding CSS", category: "Design" },
  { id: 6, title: "Tailwind CSS Tips", category: "Design" },
  { id: 7, title: "Advanced React Patterns", category: "Programming" },
  { id: 8, title: "Mindfulness Meditation", category: "Health" },
  { id: 9, title: "Building with Flexbox", category: "Design" },
  { id: 10, title: "State Management in React", category: "Programming" },
  { id: 11, title: "Tailwind CSS Tips", category: "Design" },
  { id: 12, title: "Advanced React Patterns", category: "Programming" },
  { id: 13, title: "Mindfulness Meditation", category: "Health" },
  { id: 14, title: "Building with Flexbox", category: "Design" },
  { id: 15, title: "State Management in React", category: "Programming" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [results, setResults] = useState(mockData);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const filteredResults = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) &&
        (filter === "All" || item.category === filter)
    );
    setResults(filteredResults);
    setVisibleCount(4); // Reset visible count on new search
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    const filteredResults = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) &&
        (selectedFilter === "All" || item.category === selectedFilter)
    );
    setResults(filteredResults);
    setVisibleCount(4); // Reset visible count on filter change
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded shadow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Search Blog</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Health">Health</option>
          <option value="Design">Design</option>
        </select>
        <div>
          {results.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-gray-200 last:border-none"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          ))}
          {results.length > visibleCount && (
            <button
              onClick={loadMore}
              className="w-full mt-4 py-2"
            >
              Load More...
            </button>
          )}
        </div>
        {results.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
