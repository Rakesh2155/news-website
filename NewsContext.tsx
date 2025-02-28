import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { Article, Category, Language, NewsState } from '../types';
import { fetchNews, fetchTrendingNews } from '../api/newsApi';

// Initial state
const initialState: NewsState = {
  articles: [],
  trending: [],
  loading: false,
  error: null,
  searchQuery: '',
  selectedCategory: null,
  selectedLanguage: 'english',
};

// Action types
type NewsAction =
  | { type: 'FETCH_NEWS_START' }
  | { type: 'FETCH_NEWS_SUCCESS'; payload: Article[] }
  | { type: 'FETCH_TRENDING_SUCCESS'; payload: Article[] }
  | { type: 'FETCH_NEWS_FAILURE'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_CATEGORY'; payload: Category | null }
  | { type: 'SET_LANGUAGE'; payload: Language };

// Reducer
const newsReducer = (state: NewsState, action: NewsAction): NewsState => {
  switch (action.type) {
    case 'FETCH_NEWS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, loading: false, articles: action.payload };
    case 'FETCH_TRENDING_SUCCESS':
      return { ...state, trending: action.payload };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};

// Context
interface NewsContextType {
  state: NewsState;
  fetchNewsByCategory: (category?: Category) => Promise<void>;
  fetchNewsBySearch: (query: string) => Promise<void>;
  setCategory: (category: Category | null) => void;
  setLanguage: (language: Language) => void;
  setSearchQuery: (query: string) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

// Provider component
export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  // Fetch initial news and trending news
  useEffect(() => {
    const loadInitialData = async () => {
      dispatch({ type: 'FETCH_NEWS_START' });
      try {
        const articles = await fetchNews(undefined, state.selectedLanguage);
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: articles });

        const trending = await fetchTrendingNews(state.selectedLanguage);
        dispatch({ type: 'FETCH_TRENDING_SUCCESS', payload: trending });
      } catch (error) {
        dispatch({ 
          type: 'FETCH_NEWS_FAILURE', 
          payload: error instanceof Error ? error.message : 'An unknown error occurred' 
        });
      }
    };

    loadInitialData();
  }, [state.selectedLanguage]);

  // Fetch news by category - wrapped in useCallback to prevent recreation on each render
  const fetchNewsByCategory = useCallback(async (category?: Category) => {
    dispatch({ type: 'FETCH_NEWS_START' });
    try {
      const articles = await fetchNews(category, state.selectedLanguage, state.searchQuery);
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: articles });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_NEWS_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  }, [state.selectedLanguage, state.searchQuery]);

  // Fetch news by search query - wrapped in useCallback
  const fetchNewsBySearch = useCallback(async (query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    dispatch({ type: 'FETCH_NEWS_START' });
    try {
      const articles = await fetchNews(state.selectedCategory || undefined, state.selectedLanguage, query);
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: articles });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_NEWS_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  }, [state.selectedCategory, state.selectedLanguage]);

  // Set category - wrapped in useCallback
  const setCategory = useCallback((category: Category | null) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
    fetchNews(category || undefined, state.selectedLanguage, state.searchQuery)
      .then(articles => {
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: articles });
      })
      .catch(error => {
        dispatch({ 
          type: 'FETCH_NEWS_FAILURE', 
          payload: error instanceof Error ? error.message : 'An unknown error occurred' 
        });
      });
  }, [state.selectedLanguage, state.searchQuery]);

  // Set language - wrapped in useCallback
  const setLanguage = useCallback((language: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  }, []);

  // Set search query - wrapped in useCallback
  const setSearchQuery = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  }, []);

  return (
    <NewsContext.Provider
      value={{
        state,
        fetchNewsByCategory,
        fetchNewsBySearch,
        setCategory,
        setLanguage,
        setSearchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook to use the NewsContext
export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};