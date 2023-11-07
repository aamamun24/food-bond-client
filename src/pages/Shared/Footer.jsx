import logo from '/logo.png';
import icon from '../../assets/food.png';
// import { BiLogoFacebookCircle } from "@react-icons/all-files/bi";
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagramAlt, BiSolidPhoneCall } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <img className='w-12' src={icon} alt="" />
                <img className='w-48' src={logo} alt="" />
                <h2 className='text-center text-xl font-semibold'>Dhaka, Bangladesh</h2>
                <p className='text-gray-500 flex gap-3'><BiSolidPhoneCall className='text-xl'></BiSolidPhoneCall> +8801794798000</p>
            </div>
            <div className="grid grid-flow-col gap-4">
                <a href="">
                    <BiLogoFacebookCircle className='text-3xl'></BiLogoFacebookCircle>
                </a>
                <a href="">
                    <BiLogoTwitter className='text-3xl'></BiLogoTwitter>
                </a>
                <a href="">
                    <BiLogoInstagramAlt className='text-3xl'></BiLogoInstagramAlt>
                </a>
            </div>
            <aside>
                <p>Copyright © 2023 - All right reserved by Food Bond</p>
            </aside>
        </footer>
    );
};

export default Footer;