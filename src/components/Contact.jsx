import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tjpck49', 'template_0ijpvfb', form.current, 'y11XAK6fAtK_MPyA4')
            .then((result) => {

                if (result.status === 200) {
                    console.log(result.status)
                    toast('Message send successful.')
                }
                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div className="py-20 bg-[#171717]" id="contact">
            <h2 className="text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 mx-auto">Contact Me</h2>
            <div data-aos="fade-right" className="flex flex-col lg:flex-row justify-center  h-full my-20 aos-init aos-animate">
                <div className="text-white flex flex-col gap-5 lg:w-[30%]">
                    <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto h-60  flex flex-col justify-center items-center">
                        <a href="https://www.facebook.com/radifbro01621961907" className="inline-block text-4xl"><FaFacebookSquare /></a>
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/radifbro01621961907" className="text-[#f3004b] font-bold">send message</a>
                    </div>
                    <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto h-60 flex flex-col justify-center items-center">
                        <p className="inline-block text-4xl">
                            <a href="https://api.whatsapp.com/send?phone=+8801621961907" target="_blank" rel="noopener noreferrer">
                                <FaWhatsappSquare />
                            </a>
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=+8801621961907" target="_blank" rel="noopener noreferrer">
                            <h3>WhatsApp</h3>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+8801621961907" target="_blank" rel="noopener noreferrer">
                            <p>+8801621961907</p>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+8801621961907" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-[#f3004b] font-bold">send message</h3>
                        </a>
                    </div>
                </div>
                <div className="lg:w-[60%] mt-10 lg:mt-0 aos-init aos-animate">
                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12'>
                        <input
                            className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]"
                            type="text"
                            name="from_name"
                            placeholder="Enter your name"
                            required
                        />

                        <input
                            className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]"
                            type="email"
                            name="from_email"
                            placeholder="Enter your email"
                            required
                        />

                        <input
                            className='sm:col-span-2 w-full px-6 py-[18px] p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]'
                            type="text"
                            name="subject"
                            placeholder="Type your subject"
                            required
                        />

                        <textarea
                            className='sm:col-span-2 w-full p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]'
                            name="message"
                            rows="6"
                            placeholder='Write your message'></textarea>

                        <button type='submit' className='text-dark hover:text-white px-5 py-[18px]  border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 w-full inline-block sm:col-span-2 text-xl bg-transparent border-2 rounded border-[#f3004b]'>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;