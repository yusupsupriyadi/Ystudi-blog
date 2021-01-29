import React from 'react'

function Banner() {
    return (


            <div className=" py-6 py-16 px-16 bg-gray-900 dark:bg-gray-100">
                <div className="w-full xl:w-8/12 ">
                <h1 className="tracking-tight font-semibold text-2xl sm:text-3xl lg:text-5xl text-gray-200 dark:text-gray-800 mb-2 lg:mb-6">Mari Kita Buat Sesuatu<br className="hidden lg:block" /> Dari Awal
                        </h1>
                <div className="leading-relaxed lg:leading-10 lg:text-xl text-gray-200 dark:text-gray-600 mb-6">
                            Tingkatkan kemampuan Anda dengan parsinta dengan mendorong<a href="/skills/laravel" className="shadow-offset-blue text-black font-medium text-primary-500 font-semibold">
                    </a><br />

                    <a href="/skills/vue" className="bg-gray-200 font-semibold text-gray-800 dark:bg-gray-200 dark:text-gray-800 px-2 inline py-1 rounded">
                        melalui seri-seri yang ada disini seperti,</a> <span> </span> <a href="" className="leading-relaxed lg:leading-10 lg:text-xl text-gray-200 dark:text-gray-600 mb-6">, melalui seri-seri yang ada disini seperti
                    </a><br />
                        <a href="/skills/vue" className="shadow-offset-blue text-black font-medium text-blue-500 font-semibold">
                            Vue, <span> </span>
                                </a>
                        <a href="/skills/reactjs" className="shadow-offset-blue text-black font-medium text-blue-500 font-semibold">
                                                React,<span> </span>
                                </a>
                        <a href="/skills/tailwind-css" className="shadow-offset-blue text-black font-medium text-blue-500 font-semibold">
                            Tailwind CSS <span> </span>
                        </a>
                        dan  <a href="/series?curated" className="shadow-offset-blue text-black font-medium text-blue-500 font-semibold">
                                                banyak lagi
                        </a>
                        .
                        </div>
                        <div className="lg:block hidden mt-12">
                            <a className="mr-2 inline-flex items-center justify-center bg-white border focus:ring focus:ring-blue-100 border-blue-500 text-blue-500 rounded-lg px-5 h-11 font-semibold uppercase text-xs" href="/series?curated">
                            Browse Courses
                            </a>
                        <a className="inline-flex items-center justify-center focus:ring focus:ring-primary-100 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-5 h-11 font-semibold uppercase text-xs" href="/series?curated">
                            Sigh up for free
                            </a>
                        </div>
                        <div className="relative lg:mb-0 lg:hidden block" id="search"><div className="relative z-40"><form noValidate action="#" role="search" className="px-3 h-10 flex items-center bg-white rounded-lg overflow-hidden z-40 border border-gray-300"><svg className="w-4 h-4 mr-2 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg><input autoComplete="off" id="search-box" className="px-0 appearance-none focus:outline-none border-transparent focus:outline-none focus:border-transparent w-full focus:ring-transparent" type="text" placeholder="Belajar Laravel" defaultValue /></form></div></div>
                    </div>
                </div>


    )
}

export default Banner
