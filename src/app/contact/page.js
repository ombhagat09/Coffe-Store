"use client";



import { useState } from "react";


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll contact you soon.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (

        <section className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6 py-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-10">Contact Us</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-5"
            >
                <div>
                    <label className="block text-amber-800 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-amber-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-amber-800 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-amber-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-amber-800 font-medium mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full border border-amber-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-semibold transition-all w-full"
                >
                    Send Message
                </button>
            </form>
        </section>

    );
}
