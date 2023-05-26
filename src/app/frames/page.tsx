import Article from "@/components/article";

// mockup data
import articles from '../../data.json';

export default function Frames() {
    return (
        <main className="flex py-12 bg-anti-flash-white">
            <div className="w-2/5">
                <p className="text-8xl text-gray-300 text-center pr-8">1</p>
            </div>
            <div className="flex flex-col pr-28">
                <div className="mb-4">
                    <h1 className="font-bold text-4xl mb-10">Frames</h1>

                    <p>Frames in Figma are what you may think of as artboads in other design tools.
                        Frames are a foundational element for your designs that act as a top-level container
                        for most things you create in Figma. There a few different ways to create frames in Figma:
                    </p>
                </div>
                {
                    articles.map((article, index) => (
                        <Article
                            key={index}
                            title={article.title}
                            description={article.description}
                            shortcuts={article.shortcuts}
                            img={article.img}
                        />
                    ))
                }
            </div>
        </main>
    )
}