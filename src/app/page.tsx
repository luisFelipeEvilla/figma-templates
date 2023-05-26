import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">

        <div className='flex flex-col bg-black p-9 pt-12 w-[500px] h-[400px] relative'>
          <div className='text-white text-4xl font-semibold'>
            <h1>Learn the basics of Figma</h1>
          </div>

          <div className='text-gray-400 text-base mt-4'>
            This tutorial file will walk you through all the basics of starting
            your design in Figma. For more tutorial content and features,
            overview, visit <a href="https://help.figma.com" target="_blank" className='text-white font-medium'>help.figma.com.</a>
          </div>

          <div className="absolute bottom-0 right-5 flex translate-x-12">
            <div className="w-0 h-0 mr-2 
              border-l-[30px] border-l-transparent
              border-t-[50px] border-t-green-500
              border-r-[30px] border-r-transparent
              rotate-12
            "></div>
            <div className="w-[55px] h-[55px] bg-purple-500"></div>
            <div className="w-[60px] h-[60px] bg-red-500 rounded-full translate-y-[-3rem]"></div>
          </div>
        </div>

        <div>
          <div className={`w-0 h-0 
            border-t-[200px] border-t-transparent
            border-l-[80px] border-l-black
            border-b-[200px] border-b-transparent`}
          >
          </div>
        </div>
      </div>  
    </main>
  )
}
