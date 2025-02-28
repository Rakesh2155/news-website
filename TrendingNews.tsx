import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { Article } from '../types';

interface TrendingNewsProps {
  articles: Article[];
}

const TrendingNews: React.FC<TrendingNewsProps> = ({ articles }) => {
  if (!articles.length) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-3">
          <TrendingUp size={20} className="text-red-600 mr-2" />
          <h2 className="text-lg font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-sm line-clamp-2 hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{article.source.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;