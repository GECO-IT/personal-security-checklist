// src/routes/articles/index.tsx
import { component$ } from '@builder.io/qwik';
import { StaticGenerate, StaticGenerateHandler, useLocation } from '@builder.io/qwik-city';
import articles from '~/data/articles';

export default component$(() => {
  const lang = useLocation().params.locale;
  return (
    <div class="px-8 py-4">
      <div class="bg-back shadow-md rounded-box min-h-96 px-4 py-8">
        
      <h2 class="text-4xl mb-4">Articles</h2>
      <ul class="flex flex-col gap-4">
        {articles[lang]?.map(article => (
          <li key={article.slug}
            class="rounded-box bg-front shadow-md p-4 max-w-96 drop-shadow-md
            transition hover:drop-shadow-xl hover:scale-105"
            >
            <a href={`/${lang}/article/${article.slug}`}>
              <h3 class="text-2xl mb-2">{article.title}</h3>
              <p class="text-lg">{article.description}</p>
            </a>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
});
export const onStaticGenerate: StaticGenerateHandler = async (): Promise<StaticGenerate> => {
  return {
      params: [
          { locale: 'fr' },
          { locale: 'en' }
      ],
  };
};