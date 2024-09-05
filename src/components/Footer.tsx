import upbutton from '../assets/upbutton.svg';
import logo from '../assets/Logo.svg';
import rightC from '../assets/RightC.svg';
import media from '../assets/media.svg';

const Footer = () => {
    return (
        <div className="w-[96vw] my-10 flex justify-center  items-center font-rubik">
            <div className="md:w-[1280px] md:h-[452px] w-[328px] h-[785px] md:p-0 p-[32px] bg-[#0060E7] rounded-[20px] flex flex-col justify-between items-center md:flex-row md:justify-center md:gap-0 gap-y-[32px] md:items-center">
                <div className="md:w-[1200px] md:h-[372px] w-[296px] h-[721px] flex flex-col justify-between">
                    <div className="md:w-[100%] md:h-[34px] h-[34px] w-[296px]  flex justify-between items-center">
                        <img
                            src={logo}
                            alt="img"
                            className="h-[100%] w-[121.95px] "
                        />
                        <div className=" h-[20px] w-[135px] text-white flex items-center justify-center">
                            <div
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                }
                                className="h-[18px] w-[111px] flex justify-center items-center font-semibold md:text-[14px] text-[12px]"
                            >
                                BACK TO TOP
                            </div>
                            <img
                                src={upbutton}
                                alt="up"
                                className="h-[20px] w-[20px] "
                            />
                        </div>
                    </div>
                    <div className="md:w-[100%] md:h-[216px] w-[296px] h-[504px]  flex md:flex-row flex-col justify-between">
                        <div className="md:w-[378px] md:h-[130px] w-[171px] h-[110px] flex flex-col justify-between">
                            <div className="md:text-[20px] text-[14px] text-white font-rubik font-thin  h-[64px]">
                                Apply now to join us for an unforgettable
                                summer!
                            </div>
                            <div className="h-[46px] w-[157px] bg-[#FFCE00] flex justify-evenly items-center rounded-[6px]">
                                <div className="w-[82px] h-[22px] text-[16px] text-[292929] flex items-center justify-center font-medium ">
                                    Apply Now
                                </div>
                                <img
                                    src={rightC}
                                    alt="r"
                                    className="w-[20px] h-[22px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row  justify-between w-[289px]">
                            <div className="w-[107px] h-[216px]  flex justify-between flex-col text-white">
                                <div className="font-baiJamjuree  h-[26px] font-medium text-[16px] ">
                                    TSoC
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Code of Conduct
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Contact Us
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    FAQs
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    How it Works
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Mentors
                                </div>
                            </div>
                            <div className="w-[107px] h-[216px]  flex justify-between flex-col text-white">
                                <div className="font-baiJamjuree  h-[26px] font-medium text-[16px] ">
                                    Resources
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Blog
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Community
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Projects
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    Supporters
                                </div>
                                <div className="h-[22px] font-light text-[14px] ">
                                    2023 Programme
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[399px] md:h-[132px]  flex justify-between flex-col">
                            <div className=" font-baiJamjuree md:text-[20px] text-[16px] font-thin text-white h-[64px]">
                                Subscribe to the Timechain Summer of Code (TSOC)
                            </div>
                            <form className="w-full max-w-md mx-auto bg-[#0060E7] border-2 border-white rounded-[10px]">
                                <div className="relative ">
                                    <input
                                        type="email"
                                        id="default-email"
                                        className="block w-full p-4 ps-10 text-sm text-white rounded-lg bg-[#0060E7] focus:ring-blue-500 focus:border-blue-500 "
                                        placeholder="Email Address"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-black absolute end-2.5 bottom-2.5 bg-[#FFCE00] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  -700 -800"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:w-[1200px] md:h-[58px] h-[120px] w-[296px]  flex md:flex-row flex-col justify-between relative">
                        <div className="md:hidden flex w-[123px] h-[19px] text-[12px] font-medium text-white">
                            Terms | Privacy | Legal
                        </div>
                        <div className="flex md:flex-col md:w-[184px] md:h-[58px] w-[295px] h-[24px] justify-between ">
                            <div className="text-white font-medium font-rubik md:h-[58px] h-[22px] text-[14px]">
                                CONNECT WITH US
                            </div>
                            <img
                                src={media}
                                alt="media"
                                className="md:w-[184px] md:h-[24px] w-[152px] h-[24px]"
                            />
                        </div>
                        <div className="w-[100%] h-[15px] flex md:flex-row flex-col justify-evenly  items-center md:relative md:top-[40px] md:left-[145px]">
                            <div className="md:flex hidden">
                                <div className="h-[22px] w-[278px] flex text-white justify-between ">
                                    <div className="text-[14px] font-light">
                                        Terms of Use
                                    </div>
                                    <div className="text-[14px] font-light">
                                        Privacy Policy
                                    </div>
                                    <div className="text-[14px] font-light">
                                        Legal
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[308px] md:h-[20px] w-[293px] h-[20px] flex justify-between items-center">
                                <div className="text-[14px] font-light text-white">
                                    @2023 TIMECHAIN LABS
                                </div>
                                <div className="text-[14px] font-light text-white">
                                    All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
