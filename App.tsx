import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <NewsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/article/:articleId" element={<ArticlePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </NewsProvider>
  );
}

export default App;