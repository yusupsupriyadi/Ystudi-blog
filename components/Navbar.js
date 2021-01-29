import { useEffect } from "react";

function Navbar() {
    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        if (value === "dark") {
            document.querySelector('html').classList.remove('light')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.removeItem('theme')
    }, []);
    return (
        <div>

            <header className=" bg-white shadow dark:bg-gray-900 ">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <a className="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 " href="#">YSTUDIO</a>
                                {/* Search input on desktop screen */}
                                <div className="mx-10 hidden md:block">
                                    <input type="text" className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400" placeholder="Search" aria-label="Search" />
                                </div>
                                <div>
                                    <button onClick={() => selectTheme('light')} className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"></button>
                                    <button onClick={() => selectTheme('dark')} className="focus:outline-none w-4 h-4 bg-black rounded-full"></button>
                                </div>
                            </div>
                            {/* Mobile menu button */}
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                        <div className="md:flex items-center">
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1 ">
                                <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white">Home</a>
                                <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white">Library</a>
                                <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white">Journey</a>
                                <a className="text-grey-500 dark:text-white py-2 px-4 font-medium transition-colors duration-150 focus:outline-none focus:text-white">Social</a>
                            </div>
                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <a className="block w-1/2 py-2 px-4 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                                <a className="block w-1/2 py-2 px-4 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                            </div>
                            {/* Search input on mobile screen */}
                            <div className="mt-3 md:hidden">
                                <input type="text" className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline" placeholder="Search" aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        </div >
    )
}

export default Navbar
