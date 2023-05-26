import Image from "next/image"

type shortcut = { title: string, keys: string[] }
type ArticleProps = { title: string, description: string, shortcuts: shortcut[], img: string }

export default function Article(props: ArticleProps) {
    return (
        <div className="h-72 shadow-sm bg-white mt-8 flex">
            <div className="p-6">
                <h4 className="text-xl font-bold">{props.title}</h4>
                <p className="my-4 w-[450px]">{props.description}</p>
                <div className="flex gap-6">
                    {
                        props.shortcuts && props.shortcuts.map((shortcut: any, index: number) => (
                            <div>
                                <p className="font-bold">{shortcut.title}</p>
                                <div className="flex mt-4 gap-2">
                                    {
                                        shortcut.keys.map((key: string, index: number) => (
                                            <p className="text-lg font-bold w-12 text-center border-2 border-gray-400 rounded">{key}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Image src={props.img} alt='image' width={200} height={360} />
            </div>
        </div>
    )

}