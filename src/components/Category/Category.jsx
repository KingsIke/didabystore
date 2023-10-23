import React, { useState } from 'react';

const NestedDropdown = () => {
  const categories = [
    { name: 'Fashion', subCategories: ['Clothing', 'Bag', 'Shoe'] },
    { name: 'Phone', subCategories: [] },
    { name: 'Beauty', subCategories: [] },
    // Add more categories here
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="nested-dropdown">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li
            key={index}
            onMouseEnter={() => handleCategoryHover(category.name)}
            onMouseLeave={handleCategoryLeave}
          >
            {category.name}
            {category.subCategories.length > 0 && category.name === selectedCategory && (
              <ul className="sub-category-list">
                {category.subCategories.map((subCategory, subIndex) => (
                  <li key={subIndex}>{subCategory}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedDropdown;
