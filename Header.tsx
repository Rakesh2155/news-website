import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const { fetchNewsBySearch, setLanguage, state } = useNews();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchNewsBySearch(searchQuery);
  };

  const languages: { value: Language; label: string }[] = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'हिंदी' },
    { value: 'tamil', label: 'தமிழ்' },
    { value: 'telugu', label: 'తెలుగు' },
    { value: 'bengali', label: 'বাংলা' },
    { value: 'marathi', label: 'मराठी' },
  ];

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-yellow-400">Bharat</span>News
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link to="/category/politics" className="hover:text-yellow-400 transition-colors">
              Politics
            </Link>
            <Link to="/category/business" className="hover:text-yellow-400 transition-colors">
              Business
            </Link>
            <Link to="/category/technology" className="hover:text-yellow-400 transition-colors">
              Technology
            </Link>
            <Link to="/category/sports" className="hover:text-yellow-400 transition-colors">
              Sports
            </Link>
            <Link to="/category/entertainment" className="hover:text-yellow-400 transition-colors">
              Entertainment
            </Link>
            <Link to="/category/regional" className="hover:text-yellow-400 transition-colors">
              Regional
            </Link>
          </nav>

          {/* Search and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-blue-700 text-white placeholder-blue-300 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-48"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
              >
                <Globe size={20} />
                <span>{languages.find(lang => lang.value === state.selectedLanguage)?.label || 'English'}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {languages.map((language) => (
                    <button
                      key={language.value}
                      onClick={() => handleLanguageChange(language.value)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        state.selectedLanguage === language.value
                          ? 'bg-blue-100 text-blue-800'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {language.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/category/politics"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Politics
              </Link>
              <Link
                to="/category/business"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                to="/category/technology"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/category/sports"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sports
              </Link>
              <Link
                to="/category/entertainment"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link
                to="/category/regional"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Regional
              </Link>
            </nav>

            <div className="mt-4 space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-blue-700 text-white placeholder-blue-300 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
                >
                  <Search size={18} />
                </button>
              </form>

              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
                >
                  <Globe size={20} />
                  <span>{languages.find(lang => lang.value === state.selectedLanguage)?.label || 'English'}</span>
                </button>

                {isLanguageMenuOpen && (
                  <div className="mt-2 bg-blue-700 rounded-md shadow-lg py-1 z-10">
                    {languages.map((language) => (
                      <button
                        key={language.value}
                        onClick={() => handleLanguageChange(language.value)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          state.selectedLanguage === language.value
                            ? 'bg-blue-600 text-white'
                            : 'text-white hover:bg-blue-600'
                        }`}
                      >
                        {language.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;