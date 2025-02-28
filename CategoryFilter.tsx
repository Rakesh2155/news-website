import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const navigate = useNavigate();

  const categories: { value: Category; label: string }[] = [
    { value: 'politics', label: 'Politics' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'regional', label: 'Regional' },
  ];

  const handleCategoryClick = (category: Category | null) => {
    onSelectCategory(category);
    if (category) {
      navigate(`/category/${category}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All News
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;