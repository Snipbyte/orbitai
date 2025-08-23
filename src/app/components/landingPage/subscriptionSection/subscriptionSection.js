import React from 'react'

const SubscriptionSection = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px] bg-themeColor text-white relative">
            <div className="absolute top-20 inset-0 bg-purple-500 w-[950px] h-60 mx-auto rounded-full opacity-50"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold mb-4">AI-driven SaaS for everyone.</h1>
                <div className="flex justify-center items-center space-x-4">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="p-2 rounded-md text-black"
                    />
                    <button className="bg-white text-purple-800 font-semibold p-2 rounded-md hover:bg-gray-200">
                        Get Started
                    </button>
                </div>
                <p className="mt-4 text-sm text-gray-300">By subscribing you agree to with our Privacy Policy</p>
            </div>
        </div>
    )
}

export default SubscriptionSection