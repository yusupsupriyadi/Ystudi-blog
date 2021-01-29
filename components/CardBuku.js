import React from 'react'
import Link from 'next/link';

function CardBuku() {
    return (
        
        <div>
            <Link href="tutorialreact">
                <section className="bg-white dark:bg-gray-900 lg:py-20 lg:flex lg:justify-center">
                    <div className="bg-gray-100 dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg transform -rotate-3 hover:rotate-0 transsition-all duration-300 shadow-xl">
                        <div className="lg:w-1/2">
                            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{ backgroundImage: 'url("https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png")' }} />
                        </div>
                        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                            <h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl"> Belajar <span className="text-indigo-600 dark:text-indigo-400"> React js</span></h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Mau menjadi Front end Web Developer? ,Mari kita belajar react js dari dasar agar kamu bisa menjadi Front end developer yang handal</p>
                            <div className="mt-8">
                                <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800">Start Now</a>
                            </div>
                        </div>
                    </div>
                </section>
            </Link>
        </div>
            
            
        
    )
}

export default CardBuku
