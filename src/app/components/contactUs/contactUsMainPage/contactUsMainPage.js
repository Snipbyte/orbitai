import React from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { FaCalculator, FaChevronDown, FaPhone } from "react-icons/fa";
import Images from "../../common/Image/Image";
import Button from "../../common/button/button";
import { MdOutlineLocalPhone, MdOutlinePhone } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

const ContactUsMainPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-themeColor md:p-10 p-3">
            <div className="bg-desColor shadow-[0_0_50px_rgba(155,80,255,0.5)] rounded-2xl md:flex w-full max-w-5xl overflow-hidden">
                <div className="md:w-[30%] w-full">
                    <Images
                        src="/images/jpg/contactus.png"
                        alt="building"
                        className="w-full h-40 md:h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-[70%] p-10">
                    <Link href="/">
                        <Images
                            src="/images/png/logo.png"
                            alt="building"
                            className="w-48 h-10 mb-5"
                        />
                    </Link>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Let’s Get In Touch.
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Or just reach out manually to{" "}
                        <a
                            href="mailto:hello@slothui.com"
                            className="text-indigo-600 hover:underline"
                        >
                            company@gmail.com
                        </a>
                        .
                    </p>

                    <form className="space-y-5">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="text-sm font-medium text-white">
                                    First Name
                                </label>
                                <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                                    <FiUser className="text-paraColor mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Enter your first name..."
                                        className="w-full outline-none text-white bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <label className="text-sm font-medium text-white">
                                    Last Name
                                </label>
                                <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                                    <FiUser className="text-paraColor mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Enter your last name..."
                                        className="w-full outline-none text-white bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-white">
                                Email Address
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                                <FiMail className="text-paraColor mr-2" />
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    className="w-full outline-none text-white bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-white">
                                Phone Number
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                                <LuPhone className="text-paraColor mr-2" />
                                <select
                                    className="text-white bg-transparent outline-none mr-2"
                                    defaultValue="+44"
                                >
                                    <option value="+44">🇬🇧 +44</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+91">🇮🇳 +91</option>
                                    <option value="+86">🇨🇳 +86</option>
                                    <option value="+81">🇯🇵 +81</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number..."
                                    className="w-full outline-none text-white bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-white">
                                Message
                            </label>
                            <div className="flex items-start border rounded-lg px-3 py-2 mt-1">
                                <FiMessageSquare className="text-paraColor mt-1 mr-2" />
                                <textarea
                                    placeholder="Enter your main text here..."
                                    rows="4"
                                    maxLength={300}
                                    className="w-full outline-none text-white bg-transparent resize-none"
                                />
                            </div>
                            <div className="text-right text-sm text-paraColor">300/300</div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-3 rounded-lg border border-white text-white font-medium"
                        >
                            Submit Form
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUsMainPage;