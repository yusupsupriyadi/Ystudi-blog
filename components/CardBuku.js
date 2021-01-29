import React from 'react'
import Link from 'next/link';

function CardBuku() {
    return (

        <div className="p-8 bg-gray-100 dark:bg-gray-900">
            <Link href="tutorialreact">
            <div className="lg:pt-24 lg:px-24">
            <div className="bg-white transform -rotate-6 hover:rotate-0 transsition-all duration-300 shadow-xl hover:shadow  rounded-xl overflow-hidden">
            <section className="text-gray-700 body-font">
            <div className="container flex flex-col items-center p-2 md:flex-row">
                <div className="mb-10 lg:max-w-lg w-full md:w-1/2 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src="https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png" />
                </div>
                <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
                    <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-2xl title-font">
                        Belajar React Js</h1>
                    <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">React js banyak di gunakan untuk seorang frontend <br/> jadi kamu harus pelajari ini</p>
                    <div className="flex justify-center">
                        <button className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                            Action
              </button>
                    </div>
                </div>
            </div>
        </section>
            </div>
                </div>
            </Link>
            </div>

            
        
    )
}

export default CardBuku
