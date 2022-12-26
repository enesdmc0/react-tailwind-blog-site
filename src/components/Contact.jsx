import React from 'react';

const Contact = () => {
    const contact_info = [
        {logo : "mail" , text :"enesdmc1907@gmail.com"},
        {logo : "logo-whatsapp" , text :"0535 931 54 07"},
        {logo : "location" , text :"Ankara"},
    ]
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-xl">Get in touch</p>
                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-xl mx-auto">
                    <form className="flex flex-col gap-5 flex-1">
                        <input type="text" placeholder="Your Name..." />
                        <input type="email" placeholder="Your E-mail Address..." />
                        <textarea placeholder="Your message..." rows={10}></textarea>
                        <button className="btn-primary w-fit">Send message</button>
                    </form>
                    <div className="flex flex-col gap-7">
                        {
                            contact_info?.map((contact, i) => (
                                <div key={i} className="flex gap-4 w-fit items-center">
                                    <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                        <ion-icon name={contact.logo}></ion-icon>
                                    </div>
                                    <p className="text-base">{contact.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
