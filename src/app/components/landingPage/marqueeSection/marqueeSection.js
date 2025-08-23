import React from 'react'
import Images from '../../common/Image/Image'

const MarqueeSection = () => {
    return (
        <div className='bg-themeColor pb-10 pt-5'>
            <p className='text-white py-4 text-xl text-center font-semibold'>Trusted by the world's most innovative teams</p>
            <marquee className="bg-white bg-opacity-20 backdrop-blur-sm" direction="left">
                <div className="flex items-center">
                    <Images
                        className="w-36 p-7"
                        src="/images/png/google.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/booking.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/spotify.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/google.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/booking.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/spotify.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/google.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/booking.png"
                        width={1000}
                        height={1000}
                    />
                    <Images
                        className="w-36 p-7"
                        src="/images/png/spotify.png"
                        width={1000}
                        height={1000}
                    />
                </div>
            </marquee>
        </div>
    )
}

export default MarqueeSection