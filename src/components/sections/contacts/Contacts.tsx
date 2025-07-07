import { useState } from "react";

const Contacts = () => {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xeokwdqy", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="Contact" className="py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-5xl md:text-6xl font-extrabold text-navy mb-10">contact.</h2>

                <p className="text-lg text-navy mb-6 leading-relaxed">
                    I'd love to hear from you! Whether it's a project, opportunity, or just a hello — feel free to drop
                    a message.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 px-4 py-3 rounded-md text-navy focus:outline-orange"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 px-4 py-3 rounded-md text-navy focus:outline-orange"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        required
                        className="border border-gray-300 px-4 py-3 rounded-md text-navy focus:outline-orange"
                    />
                    <button
                        type="submit"
                        className="self-start bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-md font-semibold transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Feedback message */}
                <div className="mt-4">
                    {status === "success" && (
                        <p className="text-green-600 font-semibold">Thank you for your message! 🎉</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 font-semibold">
                            Oops, something went wrong. Please try again later.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contacts;
