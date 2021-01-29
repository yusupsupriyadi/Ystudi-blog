import React from 'react'
import Link from 'next/link'

function Login() {
    return (
        <div className="container p-32">
            <div className="bg-white dark:bg-gray-800  w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto">
                <div className="py-4 px-6">
                    <Link href="/">
                        <a className="text-center px-32 font-bold text-gray-700 dark:text-white text-3xl">Ystudi</a>
                    </Link>
                    
                    <h3 className="mt-1 text-center font-medium text-gray-600 dark:text-gray-200 text-xl">Welcome Back</h3>
                    
                    <form>
                        <div className="mt-4 w-full">
                            <input className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>
                        <div className="mt-4 w-full">
                            <input className="w-full mt-2 py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 border border-gray-300 dark:border-gray-600 rounded block placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button className="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none" type="button">
                                Login
              </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-700 text-center">
                    <span className="text-gray-600 dark:text-gray-200 text-sm">Don't have an account? </span>
                    <Link href="Register">
                        <a className="text-blue-600 dark:text-blue-400 font-bold mx-2 text-sm hover:text-blue-500">Register</a>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Login
