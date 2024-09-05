import FormComponent from './Form';

const HiringForm = () => {
    return (
        <div className="w-[96vw] md:mx-6 mx-6 my-10 flex flex-col md:flex-row md:px-12 justify-between font-thin font-rubik gap-4 md:gap-1">
            <div className="flex flex-col">
                <span className="hidden md:block w-fit border text-[#707070] text-[14px] border-[#EAEAEA] rounded-[100px] p-[10px]">
                    Contact Us
                </span>
                <div className="flex flex-col gap-2 mt-3 md:gap-8">
                    <h1 className="text-[18px] md:text-[48px] font-baiJamjuree font-medium leading-6 text-black">
                        Hiring Request
                    </h1>
                    <p className="font-rubik md:w-[70%] w-[80%] text-[#707070] text-[12px] md:text-[20px] font-light leading-4 md:leading-8">
                        Unlock the potential of your business with top-tier
                        professionals. We provide custom hiring solutions for
                        every industry, ensuring you find the perfect fit."
                    </p>
                </div>
            </div>
            <div className="md:w-[708px] md:h-[1092px]">
                <FormComponent />
            </div>
        </div>
    );
};

export default HiringForm;
