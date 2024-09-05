import benefits from '../assets/benefits.svg';
import benefit_text from '../assets/benefit_text.svg';
import Button from './ui/Button';
const Benefit = () => {
    return (
        <div className="w-[96vw] my-10 flex justify-center  items-center font-thin font-rubik">
            <div className="md:w-[1280px] md:h-[518px] w-[328px] h-[664px] justify-between items-center font-rubik md:flex-row flex flex-col">
                <img
                    src={benefits}
                    alt="benefits-img"
                    className="md:w-[620px] md:h-[518px] w-[328px] h-[274px]"
                />
                <div className="md:w-[529px] md:h-[518px] w-[328px] h-[366px] flex flex-col relative">
                    <img
                        src={benefit_text}
                        alt="text"
                        className="cursor-text h-[298px]  md:h-[518px]"
                    />
                    <Button>Request Talent Today</Button>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
