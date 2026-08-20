'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { articles, Article } from '../data/articlesData';
import { ArrowRight, BookOpen, Clock, Search, X } from 'lucide-react';

export const ArticlesList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sort articles descending by date (newest first)
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }, []);

  // Filter articles based on search query (title, summary, tags, category)
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return sortedArticles;
    const query = searchQuery.toLowerCase().trim();
    return sortedArticles.filter((article: Article) => {
      const matchTitle = article.title.toLowerCase().includes(query);
      const matchSummary = article.summary.toLowerCase().includes(query);
      const matchCategory = article.category?.toLowerCase().includes(query);
      const matchTags = article.tags?.some(tag => tag.toLowerCase().includes(query));
      return matchTitle || matchSummary || matchCategory || matchTags;
    });
  }, [searchQuery, sortedArticles]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Digital Growth <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Strategies, tutorials, and local SEO secrets to help your Eastern Cape business dominate the local market.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or trade..."
                className="w-full bg-zinc-900/90 text-white placeholder-zinc-500 pl-12 pr-10 py-3.5 rounded-2xl border border-zinc-800 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 text-sm transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-zinc-500 text-left mt-2 pl-2">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </p>
            )}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-xl mx-auto">
            <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Matching Articles Found</h3>
            <p className="text-zinc-400 text-sm mb-6">
              We couldn't find any articles matching "{searchQuery}". Try searching for terms like "SEO", "Port Elizabeth", "Tax", or "Cost".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 bg-yellow-400 text-black font-bold text-sm rounded-full hover:bg-yellow-300 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/articles/${article.slug}`}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all group flex flex-col shadow-xl"
              >
                {article.imageUrl ? (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-zinc-800 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-zinc-600" />
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 mb-3">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-6 flex-1">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-bold mt-auto group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

