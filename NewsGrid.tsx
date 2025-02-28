import React from 'react';
import NewsCard from './NewsCard';
import { Article } from '../types';

interface NewsGridProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
        <p>{error}</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">No news articles found. Try a different search or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={article.id} article={article} featured={index === 0} />
      ))}
    </div>
  );
};

export default NewsGrid;