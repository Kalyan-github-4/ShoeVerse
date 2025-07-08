import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from './Sidebar/Sidebar';
import products from "./Data/Data";
import { useState } from 'react';
import Card from "./Components/Cards"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setActiveFilter("");
  };

  // Handle recommended filter clicks
  const handleClick = (value) => {
    setActiveFilter(value);
    setSelectedCategory(value === "" ? null : value); // Set category for filtering
  };

  // Filter by category or other attributes
  function filterData(products, selected, query) {
    let filteredProducts = products;

    // Apply search filter if query exists
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category/attribute filter if selected exists
    if (selected) {
      // Check if the selection is a price range
      if (typeof selected === 'string' && selected.includes('-')) {
        const [min, max] = selected.split('-').map(Number);
        filteredProducts = filteredProducts.filter(({ newPrice }) => {
          // Convert price string to number (remove commas and convert to number)
          const price = parseFloat(newPrice.replace(',', ''));

          if (max === 0) { // Handle "Over $150" case
            return price >= min;
          }
          return price >= min && price <= max;
        });
      } else {
        // Original filtering for non-price selections
        filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected || // Keep as string comparison
          title.toLowerCase().includes(selected.toLowerCase())
        );
      }
    } 

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={title + Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filterData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleCategoryChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} activeFilter={activeFilter} />
      <Products result={result} />
    </>
  );
}

export default App;