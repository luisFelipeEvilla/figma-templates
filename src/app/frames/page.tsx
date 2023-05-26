import Image from "next/image"

import articles from '../../data.json';

export default function Frames() {


    const Container = (props: any) => {
        return (
            <div className="h-72 shadow-sm bg-white mt-8 flex">
                <div className="p-6">
                    <h4 className="text-xl font-bold">{props.title}</h4>
                    <p className="my-4 w-[450px]">{props.description}</p>
                    <div className="flex gap-6">
                        {
                            props.shortcuts && props.shortcuts.map((shortcut: any, index: number) => {
                                return (
                                    <div>
                                        <p className="font-bold">{shortcut.title}</p>
                                        <div className="flex mt-4 gap-2">
                                            {
                                                shortcut.keys.map((key: string, index: number) => {
                                                    return <p className="text-lg font-bold w-12 text-center border-2 border-gray-400 rounded">{key}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <Image src={props.img} alt='image'  width={200} height={360} />
                </div>
            </div>
        )
    }
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
                    articles.map((article, index) => {
                        return (
                            <Container key={index} title={article.title} description={article.description}
                                shortcuts={article.shortcuts} img={article.img}
                            ></Container>
                        )
                    })
                }
            </div>
        </main>
    )
}