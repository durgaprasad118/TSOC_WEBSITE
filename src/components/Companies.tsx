import air from '../assets/air.svg';
import microsoft from '../assets/microsoft.svg';
import google from '../assets/google.svg';
import slack from '../assets/slack.svg';
import amazon from '../assets/amazon.svg';
const Companies = () => {
    return (
        <div className="px-6 md:px-12 lg:px-24 mt-12 md:mt-16 flex flex-col items-center justify-center text-center">
            <h1 className="font-rubik font-light text-md  leading-relaxed text-gray-800 mb-8">
                Trusted by over 20,000+ individuals in these companies
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-center items-center md:w-[60%]">
                <img className="h-6" src={air} alt="Airbnb" />
                <img className="h-6" src={google} alt="Google" />
                <img className="h-6" src={amazon} alt="Amazon" />
                <img className="h-6" src={microsoft} alt="Microsoft" />
                <img className="h-6" src={slack} alt="Slack" />
            </div>
        </div>
    );
};

export default Companies;
