import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articlesData';
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, Lightbulb, Share2 } from 'lucide-react';

interface ArticleViewProps {
  onOpenBooking: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-zinc-400 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/articles" className="text-yellow-400 font-bold hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-black">
      <Helmet>
        <title>{article.title} | Allegro Digital PE</title>
        <meta name="description" content={article.metaDescription} />
      </Helmet>

      {/* Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold mb-8 bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-800"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>

        {/* Category Tag */}
        <div className="mb-4">
          <span className="bg-yellow-400/10 text-yellow-400 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-yellow-400/20">
            Local Growth Playbook (2026)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author & Date Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-zinc-800 text-sm font-bold text-zinc-400 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-sm">{article.author}</div>
              <div className="text-zinc-500 text-xs flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-yellow-400/90"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4 text-yellow-400" /> Share
          </button>
        </div>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden mb-12 shadow-2xl relative border border-zinc-800">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-yellow-400/40 rounded-3xl p-6 sm:p-8 mb-12 shadow-[0_0_30px_rgba(250,204,21,0.08)]">
            <div className="flex items-center gap-2 text-yellow-400 font-extrabold text-lg mb-4 font-heading">
              <Lightbulb className="w-6 h-6" /> Key Takeaways for Business Owners
            </div>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Conversion Banner at Bottom */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-yellow-400/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-4 relative z-10">
            Ready to Dominate <span className="text-yellow-400">Port Elizabeth Search?</span>
          </h2>
          
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm sm:text-base relative z-10">
            Get your high-speed, lead-generating single-page website launched for just R1,499 once-off + R800/mo hosting & support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-black font-extrabold rounded-full hover:bg-yellow-300 transition-colors shadow-[0_0_25px_rgba(250,204,21,0.3)] text-base"
            >
              Book a Free Strategy Call →
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-zinc-400 relative z-10">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> R1,499 Once-off Setup</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> R800/mo Retainer</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Local PE Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};
