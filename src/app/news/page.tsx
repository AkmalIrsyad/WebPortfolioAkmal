import { AspectRatio } from '@/components/ui/aspect-ratio'
import NewsArticle from '@/data/news';


async function fetchNews() {
  const res = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news/gaya-hidup', {
    next: { revalidate: 60 }, // Optional: Cache data for 60 seconds
  });
  const data = await res.json();
  return data.data || [];
}

export default async function NewsPage() {
  const articles: NewsArticle[] = await fetchNews();
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">News</h1>
      <div className="flex flex-col gap-5">
        {articles.map((article, index) => {
          return (
            <div
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              key={index}
            >
              <AspectRatio
                className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2"
                ratio={72 / 33}
              >
                <img
                  className="w-full h-full object-cover rounded-base"
                  src={`${article.image.large}`}
                  alt={``}
                />
              </AspectRatio>

              <div className="text-text mt-5 font-base">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {article.title}
                </h2>

                <p className="mt-2">{article.contentSnippet}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={article.link}
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
