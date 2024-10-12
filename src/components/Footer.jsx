import {FaFacebookSquare, FaWhatsappSquare, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  const yearNow = new Date().getFullYear();
    return (
        <footer className="footer items-center p-4 bg-[#1F1F1F] text-white ">
  <div className="items-center grid-flow-col px-3">
    <p className='text-center'>Copyright © {yearNow} - All right reserved by Mahfuz Hossain</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.facebook.com/radifbro01621961907"> <FaFacebookSquare className='h-5 w-5'></FaFacebookSquare>
    </a> 
    <a href='https://www.linkedin.com/in/md-mahfuz-hossain-066337257/'><FaLinkedin className='h-5 w-5'></FaLinkedin></a>
    <a href='#'><FaWhatsappSquare className='h-5 w-5'></FaWhatsappSquare></a>
  </div>
</footer>
    );
};

export default Footer;