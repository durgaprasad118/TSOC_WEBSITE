const FormComponent = () => {
    return (
        <div className="rounded-[10px] bg-[#EEF8FF] flex-1 flex  p-3  md:p-5 md:self-stretch">
            <div className="rounded-[5px] bg-white px-5 shadow-sm font-rubik font-thin">
                <div className="mb-10 overflow-x-scroll">
                    <div className="md:w-[628px] w-[304px] mt-5 flex flex-col items-start gap-10">
                        <div className="flex flex-col gap-5 self-stretch">
                            <div className="flex gap-6 md:flex-col">
                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-thin  "
                                        >
                                            Contact Name
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="name"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            type="text"
                                            name="Name Input"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="Cname"
                                            className="block text-sm font-thin  "
                                        >
                                            Company Name
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="Cname"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            type="text"
                                            name="Name Input"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 md:flex-col">
                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="emailAd"
                                            className="block text-sm font-thin  "
                                        >
                                            Email Address
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="emailAd"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            type="text"
                                            name="Name Input"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="floating_phone"
                                            className="block text-sm font-thin  "
                                        >
                                            Phone No
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            name="floating_phone"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            type="tel"
                                            placeholder="000-000-000"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6 md:flex-col">
                                <div className="w-[50%] flex flex-col items-start gap-3 md:w-full">
                                    <p className="text-[16px] font-normal text-foundation-text-text_500">
                                        <span>Country you’re based in</span>
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="flex items-center justify-between gap-5 self-stretch rounded-md border border-solid border-black-900_19 px-4 py-3">
                                        <p className="text-[16px] font-light text-gray-500">
                                            Select Country
                                        </p>
                                        <img
                                            className="w-[20px] h-[20px]"
                                            src="checkmark-url"
                                            alt="Checkmark Icon"
                                        />
                                    </div>
                                </div>

                                {/* Role Input */}
                                <div className="w-[50%] flex flex-col items-start gap-3 md:w-full">
                                    <p className="text-[16px] font-normal text-foundation-text-text_500">
                                        <span>
                                            Role you are looking to hire
                                        </span>
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="flex items-center justify-between gap-5 self-stretch rounded-md border border-solid border-black-900_19 px-4 py-3">
                                        <p className="text-[16px] font-light text-gray-500">
                                            Select Role
                                        </p>
                                        <img
                                            className="w-[20px] h-[20px]"
                                            src="checkmark-url"
                                            alt="Checkmark Icon"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Employment Type */}
                            <div className="flex gap-6 md:flex-col">
                                <div className="w-[50%] flex flex-col items-start gap-3 md:w-full">
                                    <p className="text-[16px] font-normal text-foundation-text-text_500">
                                        <span>
                                            Employment type you’re offering?
                                        </span>
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="self-stretch">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-[24px] h-[24px]"
                                                    src="full-time-icon-url"
                                                    alt="Full-time"
                                                />
                                                <p className="text-[16px] font-light text-foundation-text-text_500">
                                                    Full-time Role
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-[24px] h-[24px]"
                                                    src="part-time-icon-url"
                                                    alt="Part-time"
                                                />
                                                <p className="text-[16px] font-light text-foundation-text-text_500">
                                                    Part-time Role
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-[24px] h-[24px]"
                                                    src="internship-icon-url"
                                                    alt="Internship"
                                                />
                                                <p className="text-[16px] font-light text-foundation-text-text_500">
                                                    Internship Role
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Onsite/Remote Input */}
                                <div className="w-[50%] flex flex-col items-start gap-3 md:w-full">
                                    <p className="text-[16px] font-normal text-foundation-text-text_500">
                                        <span>
                                            Are these positions onsite or
                                            remote?
                                        </span>
                                        <span className="text-red-500">*</span>
                                    </p>
                                    <div className="self-stretch">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-[24px] h-[24px]"
                                                    src="onsite-icon-url"
                                                    alt="Onsite"
                                                />
                                                <p className="text-[16px] font-light text-foundation-text-text_500">
                                                    Onsite
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-[24px] h-[24px]"
                                                    src="remote-icon-url"
                                                    alt="Remote"
                                                />
                                                <p className="text-[16px] font-light text-foundation-text-text_500">
                                                    Remote
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;
