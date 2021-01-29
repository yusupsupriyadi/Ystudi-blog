import { useEffect } from "react";

function Mode() {
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
        <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
            <div className="w-5/12">
                <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-10 flex items-center justify-between">
                    <div className="font-semibold text-lg text-gray-800 dark:text-white">Swicher</div>
                    <div>
                        <button onClick={() => selectTheme('light')} className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"></button>
                        <button onClick={() => selectTheme('dark')} className="focus:outline-none w-4 h-4 bg-black rounded-full"></button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                    <div className="px-10 py-8">
                        <h1 className="text-2xl font-bold text-gray-500 dark:text-white mb-10">LOrem ISUM palenghai</h1>
                        <div className="leading-relaxed text-gray-800 dark:text-gray-300 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum ex et quae tempore ratione quis, ipsum sit impedit voluptas voluptatibus odio repellendus itaque a ad molestias veniam voluptatem veritatis!
            </div>
                    </div>
                    <div className="px-10 py-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-900 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum ex et quae tempore ratione quis, ipsum sit impedit voluptas voluptatibus odio repellendus itaque a ad molestias veniam voluptatem veritatis!
        </div>
                </div>
            </div>
        </div>
    )
}

export default Mode
