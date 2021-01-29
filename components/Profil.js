import React from 'react'

function Profil() {
    return (
        <section className="text-gray-700 body-font bg-white dark:bg-gray-900">
            <div className="container px-8  mx-auto  lg:px-4">
                <div className="flex flex-wrap -m-4">
                    <div className=" mx-auto mb-6 lg:w-1/3 lg:mb-0">
                        <div className="h-full text-center py-32">
                            <img alt="testimonial" className=" flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-800 sm:w-24 sm:h-24 transform rotate-0 hover:rotate-6 transsition-all duration-300 shadow-xl" src="https://yusupsupriyadi.000webhostapp.com/images/perfil.png" />
                            <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300">Saya adalah fontend web developer saya lulusan smk sederajat jurusan rekayasa perangkat lunak. Tinggal di bogor jawa barat. </p>
                            <h2 className="mt-12 text-sm font-medium tracking-wider text-gray-900 title-font dark:text-gray-100 text-lg">Yusup Supriyadi</h2>
                            <p className="text-gray-500 dark:text-gray-300">Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil
