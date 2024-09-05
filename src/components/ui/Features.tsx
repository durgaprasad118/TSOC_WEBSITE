import customised from '../../assets/customised.svg';
import f_1 from '../../assets/f_1.svg';
import flexible from '../../assets/flexible.svg';
import f_2 from '../../assets/f_2.svg';
import f_3 from '../../assets/f_3.svg';
import skilled from '../../assets/skilled.svg';
const Features = () => {
    return (
        <div className="flex w-full h-full items-center mt-10 justify-center">
            <div className="md:w-[1280px] md:h-[500px] flex flex-col md:flex-row gap-4 justify-between ">
                <div className="h-[390px] md:h-[500px] md:w-[420px] w-[328px] p-2 md:p-[24px] bg-gradient-to-b from-[#FFABD0] to-[#FA81B7] rounded-[10px] bg-blue-500">
                    <div className="mr-1 md:mt-6 mt-2 self-stretch">
                        <div className="z-[1] relative ml-3 mr-2 flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-[24px] h-[24px]"
                                    src={customised}
                                    alt="Customized Image"
                                    loading="lazy"
                                />
                                <h1 className="text-[18px] md:text-[24px] font-baiJamjuree font-medium leading-6 text-black">
                                    Customised Talent
                                </h1>
                            </div>
                            <p className="font-rubik text-[12px] md:text-[15px] font-light leading-4">
                                We match you with professionals tailored to your
                                specific business needs.
                            </p>
                        </div>
                    </div>

                    <div className="md:mt-[-4px] mt:h-[390px] relative flex justify-center">
                        <div className="mx-auto flex items-center justify-center">
                            <div className="relative flex-1">
                                <img
                                    className="h-[310px] md:h-[392px] mx-auto "
                                    src={f_1}
                                    alt="Portrait"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[390px] md:h-[500px] md:w-[420px] w-[328px] p-2 md:p-[24px] bg-gradient-to-b from-[#C1D5FF] to-[#6394FB] rounded-[10px] ">
                    <div className="mr-1 md:mt-6 mt-2 self-stretch">
                        <div className="z-[1] relative ml-3 mr-2 flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-[24px] h-[24px]"
                                    src={flexible}
                                    alt="Customized Image"
                                    loading="lazy"
                                />
                                <h1 className="text-[18px] md:text-[24px] font-baiJamjuree font-medium leading-6 text-black">
                                    Flexible Hiring
                                </h1>
                            </div>
                            <p className="font-rubik text-[12px] md:text-[15px] font-light leading-4">
                                Access both temporary and permanent staffing
                                solutions to suit your requirements.
                            </p>
                        </div>

                        <div className="md:mt-[-4px] mt:h-[390px] relative flex justify-center">
                            <div className="mx-auto flex items-center justify-center">
                                <div className="relative flex-1">
                                    <img
                                        className="h-[310px] md:h-[392px] mx-auto "
                                        src={f_2}
                                        alt="Portrait"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[390px] md:h-[500px] md:w-[420px] w-[328px] p-2 md:p-[24px] bg-gradient-to-b from-[#B2FFDA] to-[#63DDA2] rounded-[10px] ">
                    <div className="mr-1 md:mt-6 mt-2 self-stretch">
                        <div className="z-[1] relative ml-3 mr-2 flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-[24px] h-[24px]"
                                    src={skilled}
                                    alt="Customized Image"
                                    loading="lazy"
                                />
                                <h1 className="text-[18px] md:text-[24px] font-baiJamjuree font-medium leading-6 text-black">
                                    Skilled Experts
                                </h1>
                            </div>
                            <p className="font-rubik text-[12px] md:text-[15px] font-light leading-4">
                                Connect with experts who propel your business
                                forward with innovative solutions and
                                specialized expertise."
                            </p>
                        </div>

                        <div className="md:mt-[-4px] mt:h-[390px] relative flex justify-center">
                            <div className="mx-auto flex items-center justify-center">
                                <div className="relative flex-1">
                                    <img
                                        className="h-[294px] md:h-[376px] mx-auto "
                                        src={f_3}
                                        alt="Portrait"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
