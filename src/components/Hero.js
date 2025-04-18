

export default function Hero(){
    return(
        
            <div className="max-w-xl space-y-6">
                <p className="text-lg text-gray-400">Hi There!</p>
                <h1 className="text-4xl md:text-5xl font-bold">
                I am <span className="text-green-500">Developer!</span>
                </h1>
                <p className="text-xl text-gray-400">
                I make the complex simple.
                </p>
                <button className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-600 transition">
                Contact Me
                </button>

                <div className="flex flex-col sm:flex-row sm:space-x-8 pt-10 text-sm text-gray-400 space-y-4 sm:space-y-0">
                <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>jhdzanja@gmail.com</p>
                </div>
                <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p>+265-88-736-55-79</p>
                </div>
                <div>
                    <p className="font-semibold text-white">Location</p>
                    <p>Lilongwe, Malawi</p>
                </div>
                </div>
            </div>
        

    )
}