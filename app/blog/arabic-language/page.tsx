"use client";

import ArticleCard from "@/components/article-card";

export default function ArabicLanguagePage() {
  // Mock data for Arabic language articles
  const arabicArticles = [
    {
      id: 1,
      title: "أساسيات اللغة العربية",
      excerpt: "تعلم أساسيات اللغة العربية للناطقين بغيرها",
      content: "محتوى المقال...",
      author: "أستاذ اللغة العربية",
      date: "2024-01-15",
      image: "/images/arabic-basics.jpg"
    },
    {
      id: 2,
      title: "قواعد النحو الأساسية",
      excerpt: "دليل شامل لقواعد النحو العربي",
      content: "محتوى المقال...",
      author: "أستاذ النحو والصرف",
      date: "2024-01-20",
      image: "/images/grammar.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        مقالات اللغة العربية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arabicArticles.map((article) => (
          <ArticleCard key={article.id} post={article} />
        ))}
      </div>
    </div>
  );
} 