function RingButton() {
    return (
        <div className="bg-white p-10 rounded-lg shadow flex justify-between">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-blue-200"> 
                Primary
            </button>
            <button type="button" className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-yellow-200">
                Warning
            </button>
            <button type="button" className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-red-200">
                Delete
            </button>
            <button type="button" className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-green-200">
                Success
            </button>
        </div>
    )
}

export default RingButton
