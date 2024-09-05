import axios from 'axios';
import { City, Country, ICity } from 'country-state-city';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import Button from './ui/Button';

interface FormData {
    contactName: string;
    companyName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    employmentType: string;
    skillLevel: string;
    budget: number;
    additionalInfo: string;
    roleLook: string;
    currency: string | null;
    phoneCode: string | null;
}

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        contactName: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        employmentType: '',
        skillLevel: '',
        budget: 0,
        additionalInfo: '',
        roleLook: '',
        currency: null,
        phoneCode: null
    });

    const [countries] = useState(Country.getAllCountries());
    const [cities, setCities] = useState<ICity[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };
    useEffect(() => {
        if (selectedCountry) {
            const cityData = City.getCitiesOfCountry(
                selectedCountry
            ) as ICity[];
            setCities(cityData || []);

            // Fetch currency and phone code based on selected country
            const fetchCountryData = async () => {
                try {
                    const response = await axios.get(
                        `https://restcountries.com/v3.1/all`
                    );
                    const countryData = response.data.find(
                        (country: any) => country.cca2 === selectedCountry
                    );

                    if (countryData) {
                        const currencyCode = countryData.currencies
                            ? Object.keys(countryData.currencies)[0]
                            : null;
                        const idd = countryData.idd || {};
                        const root = idd.root || '';
                        const suffixes = idd.suffixes || [];
                        const phoneCode =
                            root + (suffixes.length > 0 ? suffixes[0] : '');

                        setFormData((prevState) => ({
                            ...prevState,
                            currency: currencyCode || null,
                            phoneCode: phoneCode || null
                        }));
                    } else {
                        setFormData((prevState) => ({
                            ...prevState,
                            currency: null,
                            phoneCode: null
                        }));
                    }
                } catch (error) {
                    console.error('Error fetching country data:', error);
                    setFormData((prevState) => ({
                        ...prevState,
                        currency: null,
                        phoneCode: null
                    }));
                }
            };

            fetchCountryData();
        } else {
            setCities([]);
            setFormData((prevState) => ({
                ...prevState,
                currency: null,
                phoneCode: null
            }));
        }
    }, [selectedCountry]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'radio' || type === 'select-one') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prevState) => ({
                ...prevState,
                [name]: checked ? value : ''
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const countryCode = event.target.value;
        setSelectedCountry(countryCode);
        setFormData((prevState) => ({
            ...prevState,
            country: countryCode,
            city: ''
        }));
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            city: event.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const {
            contactName,
            companyName,
            email,
            phone,
            country,
            city,
            employmentType,
            skillLevel,
            budget,
            additionalInfo,
            roleLook,
            currency,
            phoneCode
        } = formData;

        const subject = encodeURIComponent(
            `HIRE FROM US DETAILS of ${contactName}`
        );

        toggleModal();
        const body = encodeURIComponent(
            `Contact Name: ${contactName}
Company Name: ${companyName}
Email: ${email}
Phone: ${phone} ${phoneCode ? `(+${phoneCode})` : ''}
Country: ${country}
City: ${city}
Employment Type: ${employmentType}
Skill Level: ${skillLevel}
Budget: ${budget}
Additional Info: ${additionalInfo}
Role Look: ${roleLook}
Currency: ${currency}`
        );

        const mailtoLink = `mailto:bgrnaidu@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        setFormData({
            contactName: '',
            companyName: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            employmentType: '',
            skillLevel: '',
            budget: 0,
            additionalInfo: '',
            roleLook: '',
            currency: null,
            phoneCode: null
        });
        setSelectedCountry('');
        setCities([]);
    };
    const employmentTypes = [
        'Full-time Role',
        'Part-time Role',
        'Internship Role'
    ];
    const skillLevels = ['Intermediate level', 'Junior level', 'Senior Level'];

    return (
        <div className="w-full flex justify-center">
            <div className="h-auto w-[86%] md:w-full rounded-[10px] bg-[#EEF8FF] justify-center flex p-3 md:p-5">
                <div className="rounded-[5px] bg-white px-5 shadow-sm font-rubik font-thin">
                    <form
                        onSubmit={handleSubmit}
                        className="mb-10 overflow-x-scroll"
                    >
                        <div className="md:w-[628px] w-[304px] mt-5 flex flex-col items-start gap-10">
                            <div className="flex flex-col gap-5 self-stretch">
                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="contactName"
                                            className="block text-sm font-thin"
                                        >
                                            Contact Name
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            required
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="companyName"
                                            className="block text-sm font-thin"
                                        >
                                            Company Name
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            required
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            type="text"
                                            placeholder="Company Name"
                                        />
                                    </div>
                                </div>

                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-thin"
                                        >
                                            Email Address
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            required
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            type="email"
                                            placeholder="example@example.com"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-thin"
                                        >
                                            Country you are based in
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleCountryChange}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        >
                                            <option value="" disabled>
                                                Select a country
                                            </option>
                                            {countries.map((country) => (
                                                <option
                                                    key={country.isoCode}
                                                    value={country.isoCode}
                                                >
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex md:flex-row flex-col gap-4">
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-thin"
                                        >
                                            Phone No
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="w-full flex justify-between gap-2">
                                            <div className="flex w-[80px] flex-col  gap-3">
                                                <input
                                                    required
                                                    id="phoneCode"
                                                    name="phoneCode"
                                                    value={
                                                        formData.phoneCode || ''
                                                    }
                                                    readOnly
                                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                />
                                            </div>
                                            <input
                                                required
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                type="tel"
                                                placeholder={`Enter phone number with country code ${formData.phoneCode || ''}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex w-full flex-col items-start gap-3">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-thin"
                                        >
                                            City you’re operating from
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleCityChange}
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        >
                                            <option value="" disabled>
                                                Select a city
                                            </option>
                                            {cities.map((city) => (
                                                <option
                                                    key={city.stateCode}
                                                    value={city.name}
                                                >
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-start gap-3">
                                <label
                                    htmlFor="roleLook"
                                    className="block text-sm font-thin"
                                >
                                    Role You are looking for
                                    <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="roleLook"
                                    name="roleLook"
                                    value={formData.roleLook}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="">Select an option</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Full stack">
                                        Full stack
                                    </option>
                                    <option value="Backend">Backend</option>
                                </select>
                            </div>

                            <div className="flex md:flex-row flex-col w-full">
                                <div className="flex w-full flex-col items-start gap-3">
                                    <label
                                        htmlFor="employmentType"
                                        className="block text-sm font-thin"
                                    >
                                        Employment type you are offering
                                        <span className="text-red-500">*</span>
                                    </label>
                                    {employmentTypes.map((type) => (
                                        <div
                                            key={type}
                                            className="flex items-center mb-2"
                                        >
                                            <input
                                                required
                                                id={type}
                                                name="employmentType"
                                                type="radio"
                                                value={type}
                                                checked={
                                                    formData.employmentType ===
                                                    type
                                                }
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <label
                                                htmlFor={type}
                                                className="ms-2 text-sm font-thin text-[#292929]"
                                            >
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex w-full flex-col items-start gap-3">
                                    <label
                                        htmlFor="skillLevel"
                                        className="block text-sm font-thin"
                                    >
                                        Skill Level
                                        <span className="text-red-500">*</span>
                                    </label>
                                    {skillLevels.map((level) => (
                                        <div
                                            key={level}
                                            className="flex items-center mb-2"
                                        >
                                            <input
                                                required
                                                id={level}
                                                name="skillLevel"
                                                type="radio"
                                                value={level}
                                                checked={
                                                    formData.skillLevel ===
                                                    level
                                                }
                                                onChange={handleChange}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <label
                                                htmlFor={level}
                                                className="ms-2 text-sm font-thin text-[#292929]"
                                            >
                                                {level}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-start gap-3">
                                <label
                                    htmlFor="budget"
                                    className="block text-sm font-thin"
                                >
                                    What's your Budget?
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="w-full flex justify-between gap-2">
                                    <div className="flex w-[62px]   gap-3">
                                        <input
                                            required
                                            id="currency"
                                            name="currency"
                                            value={formData.currency || ''}
                                            readOnly
                                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                    </div>

                                    <input
                                        required
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        type="number"
                                        placeholder="Enter your budget"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-start gap-3">
                                <label
                                    htmlFor="additionalInfo"
                                    className="block text-sm font-thin"
                                >
                                    Additional information about role you are
                                    looking to hire?
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    required
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Type your message"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <Button type="submit">Submit</Button>
                        </div>

                        <Modal
                            isVisible={isModalVisible}
                            toggleModal={toggleModal}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;
