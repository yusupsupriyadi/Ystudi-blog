import React from 'react'

function Footer() {
    return (
        
        <footer className="text-gray-700 bg-white dark:bg-gray-800 body-font">
            <div className="p-10">
                <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
                    <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img src="../badges/WhitePink.svg" alt="" />
                    </a>
                    <div className="flex flex-wrap items-center justify-center mx-auto text-base md:ml-auto md:mr-auto">
                        <a href="#" className="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800 dark:text-gray-200 lg:text-lg">
                            Prices</a>
                        <a href="#" className="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800 dark:text-gray-200 lg:text-lg">
                            Contact</a>
                        <a href="#" className="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800 dark:text-gray-200 lg:text-lg">
                            Services</a>
                        <a href="#" className="justify-center mr-5 text-sm text-center text-gray-600 hover:text-gray-800 dark:text-gray-200 lg:text-lg">
                            About</a>
                    </div>
                    <div className="inline-flex items-center justify-center md:justify-start ">
                        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                            <a className="text-blue-807 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-4 text-blue-870 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                    </path>
                                </svg>
                            </a>
                            <a className="ml-4 text-blue-870 dark:text-gray-200 dark:hover:text-blue-500 hover:text-blue-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center px-5 py-6 mx-auto text-base bg-blueGray-900 fle7-wrap md:ml-auto md:mr-auto">
                    <div className="flex flex-wrap items-center justify-center mx-auto text-base">
                        <p className="mr-5 text-sm text-center text-gray-800 dark:-gray-100 dark:text-gray-200 lg:text-lg">© Ystudi — 2020
              </p>
                        <a href="#" className="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700 dark:text-gray-200 lg:text-lg"> Privacy
                Policy</a>
                        <a href="#" className="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700 dark:text-gray-200 lg:text-lg"> Terms Of
                Service</a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
