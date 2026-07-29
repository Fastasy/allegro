import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articlesData';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const ArticlesList: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>Blog & Insights | Allegro Digital PE</title>
        <meta name="description" content="Read the latest insights on local SEO, web design, and digital marketing for businesses in Port Elizabeth and the Eastern Cape." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Digital Growth <span className="text-yellow-400">Insights</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Strategies, tutorials, and local SEO secrets to help your Eastern Cape business dominate the local market.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-xl mx-auto">
            <BookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Published Yet</h3>
            <p className="text-zinc-400 text-sm">
              We're preparing fresh local growth playbooks, SEO guides, and digital insights. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                to={`/articles/${article.slug}`}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all group flex flex-col shadow-xl"
              >
                {article.imageUrl ? (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
