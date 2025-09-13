import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

const Home = () => {
    const { user , logout } = useContext(AppContext)
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-blue-700 tracking-wide">DTE Rajasthan Management System</h1>
                <nav>
                    <ul className="flex gap-6 text-gray-700 items-center">
                        <li>
                            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                        </li>
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                                >
                                    {user.name}
                                </button>
                                {open && (
                                    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                                            onClick={() => setOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                        <button
                                            onClick={async () => {
                                                await logout();
                                                setOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/signup"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="text-center flex flex-col md:flex-row items-center gap-10 py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <div className="md:w-1/2 space-y-6 flex flex-col justify-center items-center">
                    <h2 className="text-4xl md:text-4xl font-extrabold leading-tight">
                        Directorate of Technical (DTE) Education Rajasthan Management System
                    </h2>
                    <p className="text-lg md:text-xl max-w-xl text-center">
                        A centralized platform for managing admissions, fee collection, hostel allocations, examinations, and institutional reporting —
                        providing automation, transparency, and efficiency for technical education across Rajasthan.
                    </p>
                    <div>
                        <a
                            href="#features"
                            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 font-semibold transition transform hover:-translate-y-1"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src="/logo.png" 
                        alt="DTE Illustration" 
                        className="rounded-xl max-w-full w-96 hover:scale-105 transition-transform"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 px-6">
                <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
                    Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link to='/AdmissionForm'>
                        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                            <h4 className="text-xl font-semibold mb-2 text-blue-700">Admissions</h4>
                            <p>Streamlined online admission process with centralized student records.</p>
                        </div>
                    </Link>
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                        <h4 className="text-xl font-semibold mb-2 text-blue-700">Fee Management</h4>
                        <p>Automated fee receipts, payment tracking, and secure transactions for students and institutions.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
                        <h4 className="text-xl font-semibold mb-2 text-blue-700">Hostel & Exam Records</h4>
                        <p>Manage hostel allocations, occupancy, and maintain examination records in a unified system.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-gray-50 py-16 px-6">
                <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">
                    About DTE Rajasthan Portal
                </h3>
                <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-4">
                    <p>
                        Developed by the <strong>Directorate of Technical Education (DTE), Rajasthan</strong>, this portal enables
                        technical institutions to automate and manage admissions, fee collection, hostel allocations, and examinations,
                        ensuring transparency, efficiency, and standardized reporting across all affiliated colleges in Rajasthan.
                    </p>
                    <p>
                        It’s a comprehensive solution designed to modernize administrative operations and provide easy access to reports and dashboards.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 text-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-6">
                    For more information, contact the <strong>Directorate of Technical Education Rajasthan</strong>.
                </p>
                <a
                    href="mailto:info@dte.rajasthan.gov.in"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
                >
                    Contact DTE
                </a>
            </section>

            {/* Footer */}
            <footer className="bg-blue-700 text-white text-center p-4 mt-10">
                © 2025 DTE Rajasthan | Directorate of Technical Education Management System
            </footer>
        </div>
    );
};

export default Home;
