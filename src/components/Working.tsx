import five from '../assets/five.svg';
import four from '../assets/four.svg';
import Howsvg from '../assets/Howsvg.svg';
import one from '../assets/one.svg';
import three from '../assets/three.svg';
import two from '../assets/two.svg';

const Working = () => {
    return (
        <div
            id="Working"
            className="w-[96vw] md:mt-20px mt-10px flex justify-center  items-center font-thin font-rubik"
        >
            <div className="md:w-[1280px] md:h-[634px] w-[328px] h-[771px]  flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex flex-col justify-between md:w-[580px] md:h-[634px] w-[328px] h-[433px] ">
                    <div className="md:w-[580px] md:h-[138px] w-[328px] h-[81px] flex justify-between flex-col">
                        <div className="md:w-[284px] md:h-[62px] w-[142px] h-[31px] font-thin md:text-[48px] text-[24px]">
                            How it Works
                        </div>
                        <div className="md:w-[580px] md:h-[64px] w-[328px] h-[44px] md:text-[20px] font-light text-[#707070] text-[14px]">
                            Our streamlined process is designed to make your
                            hiring process smooth and enjoyable.
                        </div>
                    </div>
                    <div className=" md:w-[580px] md:h-[432px] w-[328px] h-[328px] flex flex-col justify-between">
                        <div className="md:w-[580px] md:h-[60px] w-[328px] h-[40px] flex  justify-between">
                            <img
                                src={one}
                                alt="one"
                                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] "
                            />
                            <div className="md:text-[20px] md:w-[496px] w-[256px] md:h-[52px] h-26px md:text-center flex items-center  text-[16px] text-[#292929] ">
                                A quick sign-up process
                            </div>
                        </div>
                        <div className="md:w-[580px] md:h-[60px] w-[328px] h-[40px] flex  justify-between">
                            <img
                                src={two}
                                alt="one"
                                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                            />
                            <div className="md:text-[20px] md:w-[496px] w-[256px] md:h-[52px] h-26px md:text-center flex items-center font-thin text-[16px] text-[#292929] ">
                                Receive a customized design plan with 3D
                                renderings
                            </div>
                        </div>
                        <div className="md:w-[580px] md:h-[60px] w-[328px] h-[40px] flex  justify-between">
                            <img
                                src={three}
                                alt="one"
                                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                            />
                            <div className="md:text-[20px] md:w-[496px] w-[256px] md:h-[52px] h-26px md:text-center flex items-center font-thin text-[16px] text-[#292929] ">
                                A quick sign-up process
                            </div>
                        </div>
                        <div className="md:w-[580px] md:h-[60px] w-[328px] h-[40px] flex  justify-between">
                            <img
                                src={four}
                                alt="one"
                                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                            />
                            <div className="md:text-[20px] md:w-[496px] w-[256px] md:h-[52px] h-26px md:text-center flex items-center font-thin text-[16px] text-[#292929] ">
                                A quick sign-up process
                            </div>
                        </div>
                        <div className="md:w-[580px] md:h-[60px] w-[328px] h-[40px] flex  justify-between">
                            <img
                                src={five}
                                alt="one"
                                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                            />
                            <div className="md:text-[20px] md:w-[496px] w-[256px] md:h-[52px] h-26px md:text-center flex items-center font-thin text-[16px] text-[#292929] ">
                                A quick sign-up process
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:h-[60px] h-[314px] ">
                    <img
                        src={Howsvg}
                        alt="How it works"
                        className="md:w-[580px] md:h-[533px] w-[328px] h-[314px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Working;
