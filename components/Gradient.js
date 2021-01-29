import React from 'react'

function Gradient() {
    return (
        <div className="bg-gray-200 antialiased min-h-screen items-center justify-center flex">
            <div className="w-full lg:w-3/4">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <div className="bg-gradient-to-t from-red-500 via-green-500 to-blue-500 w-56 h-56">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gradient
