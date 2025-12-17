import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        if (!formData.name || !formData.email || !formData.message) {
            setError(true);
            return;
        }

        emailjs
            .send(
                "service_96jqdte", // Replace with your EmailJS Service ID
                "template_1v16gco", // Replace with your EmailJS Template ID
                formData,
                "jZTbmUfBefqQxGHnb"  // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setIsSubmitted(true);
                    setFormData({ name: "", email: "", message: "" }); // Reset the form
                },
                (err) => {
                    console.error("FAILED...", err);
                }
            );
    };

    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" id="contact" className="bg-[#F1F1F1] py-20">
        <div className="max-w-7xl mx-auto px-6 border py-3 border-gray-700 rounded-lg shadow-md">
            <h2   className="text-3xl lg:text-5xl font-bold text-center mb-6">Contact Me</h2>

            <div className="flex flex-col gap-6">
                {/* Email Section */}
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-xl" />
                    <a
                        href="mailto:yousufjobaer@gmail.com"
                        className="text-lg hover:underline"
                    >
                        yousufjobaer@gmail.com
                    </a>
                </div>

                {/* Phone Section */}
                <div className="flex items-center gap-4">
                    <FaPhone className="text-xl" />
                    <a href="tel:+881837308476" className="text-lg hover:underline">
                        +88 01837308476
                    </a>
                </div>

                {/* WhatsApp Section */}
                <div className="flex items-center gap-4">
                    <FaWhatsapp className="text-xl" />
                    <a
                        href="https://wa.me/01837308476"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:underline"
                    >
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Contact Form */}
                <form   onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="input w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="input w-full"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="textarea w-full"
                        rows="4"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn w-full bg-[#F1F1F1] text-black border-2 rounded-full font-bold"
                    >
                        Send Email
                    </button>
                </form>

                {error && (
                    <p className="text-red-500 text-center mt-2">
                        Please fill out all fields before submitting.
                    </p>
                )}

                {isSubmitted && (
                    <p className="text-green-500 text-center mt-4">
                        Thank you! Your message has been sent.
                    </p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Contact;