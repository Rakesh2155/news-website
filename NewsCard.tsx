import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Article } from '../types';

interface NewsCardProps {
  article: Article;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-64 md:h-80">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <div className="flex items-center text-sm text-gray-300 space-x-4">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{article.source.name}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-4">{article.description}</p>
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">AI Summary</h3>
            <p className="text-gray-600 text-sm">{article.aiSummary}</p>
          </div>
          <Link
            to={`/article/${article.id}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Read Full Article
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{article.source.name}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <div className="bg-gray-100 p-3 rounded-lg mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">AI Summary</h3>
          <p className="text-gray-600 text-sm">{article.aiSummary}</p>
        </div>
        <Link
          to={`/article/${article.id}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;