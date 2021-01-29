import React from 'react'
import Link from 'next/link';

function Banner2() {
    return (
        <div>
        <section className="text-gray-700 bg-gray-100 dark:bg-gray-200  body-font">
            <div className="container px-8 py-20 mx-auto lg:px-4">
                <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                    <h2 className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">tidak ada kesuksesan dalam diam</h2>
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
                            Mari Kita Buat Sesuatu
                            Dari Awal
                    </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">Tingkatkan kemampuan Anda di Ystudi dengan mendorong
keterampilan Anda ke tingkat berikutnya, melalui seri-seri yang ada disini seperti <span className="shadow-offset-blue text-blue-500 font-semibold"> Html</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> React</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> Next</span> , <span className="shadow-offset-blue text-blue-500 font-semibold"> Tailwind CSS</span> dan banyak lagi .</p>
                </div>
                    <div className="flex lg:justify-center">
                        <Link href="auth/Register">
                            <button className="inline-flex px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 focus:shadow-outline focus:outline-none">Register</button>
                        </Link>
                        <Link href="auth/Login">
                            <button className="inline-flex items-center px-4 py-2 ml-4 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none">Login</button>
                        </Link>
                    
                    
                </div>
                </div></section></div>
    )
}

export default Banner2
