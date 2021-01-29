import React from 'react'

function ListBahasa() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
                    Explore Ystudi
                </h2>
                    <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
                        Jika Anda sudah tahu apa yang Anda cari, Ystudio telah membagi menjadi berbagai topik mulai dari <span className="shadow-offset-blue text-blue-500 font-semibold">framework</span> hingga <span className="shadow-offset-blue text-blue-500 font-semibold">bahasa</span> yang bisa Anda pilih.
                </p>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-6  sm:grid-cols-3 lg:grid-cols-6">
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-puple-500 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">HTML</h6>
                    </div>
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full  sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://parsinta.com/images/subject/css.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">CSS</h6>
                    </div>
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://parsinta.com/images/subject/js.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">JAVASCRIPT</h6>
                    </div>
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://parsinta.com/images/subject/reactjs.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">REACT</h6>
                    </div>
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://parsinta.com/images/subject/nextjs.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">NEXT</h6>
                    </div>
                    <div className="text-center dark:text-gray-200">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-45 transsition-all duration-300 shadow-xl">
                            <img src="https://parsinta.com/images/subject/tailwind-css.svg" alt=""/>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">TAILWIND</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListBahasa
