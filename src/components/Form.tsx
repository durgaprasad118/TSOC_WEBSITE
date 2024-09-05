const Form = () => {
    return (
        <div className="rounded-[10px] flex-1 self-center bg-gray-100 p-5 md:self-stretch">
            <div className="rounded-[5px] flex flex-col items-start gap-10 bg-white-a700 p-5 shadow-xs">
                <div className="flex flex-col gap-5 self-stretch">
                    <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-3.5">
                            <p className="text-[16px] font-normal text-foundation-text-text_500">
                                <span>Contact Name</span>
                                <span className="text-red-500">*</span>
                            </p>
                            <label className="self-stretch font-light flex items-center justify-center cursor-text rounded-md border border-black-900_19 border-solid text-gray-500 h-[50px] px-3.5 text-[16px]">
                                <input
                                    type="text"
                                    id="nameInput"
                                    name="nameInput"
                                    placeholder="John Doe"
                                />
                            </label>
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-3">
                            <p className="text-[16px] font-normal text-foundation-text-text_500">
                                <span>Company Name</span>
                                <span className="text-red-500">*</span>
                            </p>
                            <label className="self-stretch font-light flex items-center justify-center cursor-text rounded-md border border-black-900_19 border-solid text-gray-500 h-[50px] px-3.5 text-[16px]">
                                <input
                                    type="text"
                                    id="companyInput"
                                    name="companyInput"
                                    placeholder="Company Name"
                                />
                            </label>
                        </div>
                    </div>
                    {/* Additional fields go here */}
                </div>
                <button className="min-w-[94px] flex items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-md h-[50px] px-[22px] text-[16px] bg-foundation-new_blue-new_blue_500 text-white-a700">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Form;
