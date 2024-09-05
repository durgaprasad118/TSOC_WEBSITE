import reqsvg from '../assets/Request.svg';
import reqsvgsm from '../assets/Requestsm.svg';
import round from '../assets/round.svg';

const Request = () => {
    return (
        <div className="w-[96vw] my-10 flex justify-center  items-center font-thin font-rubik">
            <div className="md:w-[1280px] md:h-[278px] w-[360px] h-[404px]  flex items-center md:flex-row rounded-[12px] flex-col bg-[#EEF8FF]">
                <div className="md:w-[624px] md:h-[278px] w-[360px] h-[164px] flex justify-center items-center">
                    <div className="md:w-[520px] md:h-[190px] w-[328px] h-[124px]  flex flex-col justify-between md:items-start items-center">
                        <div className="md:w-[475px]  md:h-[100px] w-[328px] h-[60px] md:text-[40px] text-center md:text-start text-[24px] font-medium relative">
                            <img
                                src={round}
                                alt="round"
                                className="absolute md:top-[65px] md:left-[-18px] top-[38px] left-[15px] w-[148px] h-[38px] md:w-[225px] md:h-[57px]"
                            />
                            <p>Hire Top Talent, &nbsp;</p>
                            <span className="text-[#0060E7]">Accelerate </span>
                            Your Growth.
                        </div>
                        <div className="md:w-[199px] md:h-[50px] w-[179px] h-[44px] text-[16px]  left-[10px] cursor-pointer rounded-[5px] text-white bg-[#0060E7] flex items-center justify-center font-medium ">
                            Request Talent Today
                        </div>
                    </div>
                </div>
                <div className="md:w-[624px] md:h-[100%] w-[328px] h-[240px] flex items-center ">
                    <img
                        src={reqsvg}
                        alt="reqsvg"
                        className="md:flex hidden h-[100%]"
                    />
                    <img
                        src={reqsvgsm}
                        alt="reqsvg"
                        className="md:hidden w-[328px] "
                    />
                </div>
            </div>
        </div>
    );
};

export default Request;
