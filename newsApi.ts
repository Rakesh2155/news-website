import axios from 'axios';
import { Article, Category, Language } from '../types';

// In a real application, you would use environment variables for API keys
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';
const NEWS_API_URL = 'https://newsapi.org/v2';

// Mock data for development (since we don't have actual API keys)
import { mockArticles } from './mockData';

export const fetchNews = async (
  category: Category = 'trending',
  language: Language = 'english',
  query: string = ''
): Promise<Article[]> => {
  // In a real application, you would use the actual API
  // const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
  //   params: {
  //     country: 'in',
  //     category: category === 'trending' ? '' : category,
  //     q: query,
  //     apiKey: NEWS_API_KEY,
  //     language: mapLanguageToApiParam(language),
  //   },
  // });
  // return mapResponseToArticles(response.data.articles, category, language);

  // For development, we'll use mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredArticles = [...mockArticles];
      
      if (category && category !== 'trending') {
        filteredArticles = filteredArticles.filter(article => article.category === category);
      }
      
      if (language) {
        filteredArticles = filteredArticles.filter(article => article.language === language);
      }
      
      if (query) {
        const lowerQuery = query.toLowerCase();
        filteredArticles = filteredArticles.filter(
          article => 
            article.title.toLowerCase().includes(lowerQuery) || 
            article.description.toLowerCase().includes(lowerQuery)
        );
      }
      
      resolve(filteredArticles);
    }, 500); // Simulate network delay
  });
};

export const fetchTrendingNews = async (language: Language = 'english'): Promise<Article[]> => {
  // In a real application, you would fetch trending news
  // For now, we'll just return the top 5 articles from mock data
  const allArticles = await fetchNews('trending', language);
  return allArticles.slice(0, 5);
};

// Helper function to map our language types to API parameters
const mapLanguageToApiParam = (language: Language): string => {
  switch (language) {
    case 'english': return 'en';
    case 'hindi': return 'hi';
    case 'tamil': return 'ta';
    case 'telugu': return 'te';
    case 'bengali': return 'bn';
    case 'marathi': return 'mr';
    default: return 'en';
  }
};

// Helper function to generate AI summaries (in a real app, this would call an AI service)
export const generateAISummary = async (article: Article): Promise<string> => {
  // In a real application, you would call an AI service like OpenAI
  // For now, we'll just return a shortened version of the description
  return article.description.split(' ').slice(0, 15).join(' ') + '...';
};