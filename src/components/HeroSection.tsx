import Button from './ui/Button';

const HeroSection = () => {
    return (
        <div className="flex items-center justify-center md:mt-40 mt-24">
            <div className="h-[201px] w-[328px] md:h-[294px] md:w-[689px] flex flex-col items-center justify-center gap-[24px]">
                <h1 className=" font-baiJamjuree text-[24px] md:text-[48px] leading-[110%]  tracking-[-1.00px] text-center  font-medium  ">
                    Hire Top Talent, <br /> Accelerate Your Growth.
                </h1>
                <p className="font-rubik font-light text-[12px] md:text-[18px] self-stretch text-center leading-5 !text-[#707070] ">
                    Find the right professionals to elevate your business. From
                    temporary staffing to permanent placements, we connect you
                    with skilled experts tailored to your needs.
                </p>
                <Button>Request Talent Today</Button>
            </div>
        </div>
    );
};

export default HeroSection;
