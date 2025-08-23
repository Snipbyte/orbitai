import React from "react";
import Images from "../../common/Image/Image";

const HeroSection = () => {
    return (
        <section className="w-full bg-themeColor min-h-screen px-4 sm:px-6 lg:px-6 pt-5 pb-10">
            <div className="flex flex-col lg:gap-12 items-start">
                <h1 className="text-3xl sm:text-7xl md:text-9xl lg:text-[120px] leading-tight lg:leading-[110px] font-black tracking-wide text-white">
                    ABOUT
                </h1>
                <div className="flex flex-col lg:flex-row items-start gap-4">
                    <div className="w-full lg:w-[20%]">
                        <h1 className="text-3xl sm:text-7xl md:text-9xl lg:text-[120px] leading-tight lg:leading-[110px] font-black tracking-wide text-white">US</h1>
                        <p className="mt-4 text-white text-sm">
                            Pioneering Artificial Intelligence Solutions
                        </p>
                        <p className="my-2 text-white max-w-sm text-sm leading-relaxed">
                            Innovative AI: Cutting-edge algorithms and models designed to empower businesses and individuals.
                        </p>
                        <p className="text-white max-w-sm text-sm leading-relaxed">
                            Scalable Solutions: Tailored AI systems that adapt to diverse industries and use cases.
                        </p>
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <Images
                            src="/images/jpg/ab1.jpg"
                            alt="AI Technology"
                            className="rounded-[30px] w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover shadow-[0_0_50px_rgba(155,80,255,0.8)]"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full lg:w-[30%]">
                        <Images
                            src="/images/jpg/ab2.jpg"
                            alt="AI Philosophy"
                            className="rounded-[30px] w-full h-36 sm:h-40 lg:h-44 object-cover mb-6 shadow-[0_0_50px_rgba(155,80,255,0.8)]"
                        />

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3">
                            Our Philosophy
                        </h2>
                        <p className="text-white max-w-md text-sm leading-relaxed">
                            At xAI, we are committed to accelerating human discovery through artificial intelligence, creating solutions that are ethical, innovative, and transformative.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;