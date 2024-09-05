import Button from './ui/Button';
import modal from '../assets/modal.svg';
const Modal = ({ isVisible, toggleModal }) => {
    if (!isVisible) return null;
    return (
        <div
            id="default-modal"
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
            onClick={toggleModal}
        >
            <div
                className="relative p-4 md:w-[500px] md:h-[420px] w-[328px]  max-w-2xl max-h-full bg-white rounded-lg shadow-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-center items-center gap-2 px-4 text-center">
                        <img
                            src={modal}
                            className="h-[100px] md:h-[150px] md:w-[150px] w-[100px]"
                            alt="Modal"
                        />

                        <h1 className="text-[18px] md:text-[28px] font-baiJamjuree font-medium leading-6 text-black">
                            Thank you for reaching out
                        </h1>
                        <p className="font-rubik text-[#707070] mt-2 text-[12px] md:text-[20px] font-light leading-6">
                            Your message has been received, and your request
                            will be addressed shortly. Kindly check your mail
                            for updates on your request.
                        </p>
                    </div>

                    <div className="flex justify-center mt-6 items-center p-4">
                        <Button onClick={toggleModal}>Done</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
