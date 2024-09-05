import f_1 from '../assets/f_1.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import Rohan from '../assets/Rohan.svg';
import Priyansh from '../assets/priyansh.svg';
import Jessica from '../assets/jessica.svg';
import { useRef } from 'react';

const Story = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth / 3;
            carouselRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth / 3;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const stories = [
        {
            img: Rohan,
            name: 'Rohan Sharan',
            title: 'Founder, Timechain Labs',
            text: `"Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures"`
        },
        {
            img: Jessica,
            name: 'Jessica Thompson',
            title: 'Founder, InnovaTech Solutions',
            text: `"Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures"`
        },
        {
            img: Priyansh,
            name: 'Priyansh Jain',
            title: 'Design Lead, ABC Tech Solutions',
            text: `"Grabbing and holding your audience's attention: This is crucial in a world filled with distractions. It's about creating content that immediately captures"`
        },
        {
            img: f_1,
            name: 'Dummy Person',
            title: 'Engineer, Dummy Corp',
            text: `"This is dummy text to show how the component works with multiple entries in the carousel. It should behave the same for all."`
        }
    ];

    return (
        <div
            id="Story"
            className="bg-[#EEF8FF] my-10 w-full md:h-[945px] h-[697px]"
        >
            <div className="header md:p-10 p-4 flex items-center justify-between">
                <div className="flex flex-col gap-2 md:gap-8">
                    <h1 className="text-[18px] md:text-[48px] font-baiJamjuree font-medium leading-6 text-black">
                        Recruiters Story
                    </h1>
                    <p className="font-rubik text-[12px] md:text-[20px] font-light leading-4 md:leading-8">
                        Together, we're making education accessible and <br />
                        transformative. Join us in shaping a brighter future!
                    </p>
                </div>
                <div className="hidden md:flex h-[60px] w-[160px] items-center justify-between">
                    <button onClick={scrollLeft}>
                        <img src={left} alt="Scroll Left" />
                    </button>
                    <button onClick={scrollRight}>
                        <img src={right} alt="Scroll Right" />
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                className="slider scroll flex overflow-x-scroll scroll-smooth  md:gap-16  gap-4 px-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="w-[300px] md:w-[420px] flex-shrink-0"
                    >
                        <img
                            src={story.img}
                            className="md:h-[420px] w-full md:rounded-tl-[10px] md:rounded-tr-[10px] rounded-tl-[5px] rounded-tr-[5px] h-[300px]"
                            alt={story.name}
                        />
                        <div className="bg-[#FFFFFF] h-[185px] md:h-[250px] md:rounded-bl-[10px] p-2 md:rounded-br-[10px] rounded-bl-[5px] rounded-br-[5px] flex flex-col md:gap-10 gap-2 pl-4 pt-4">
                            <p className="font-rubik italic font-thin text-[14px] md:text-[20px] md:leading-8 leading-6">
                                {story.text}
                            </p>
                            <div className="">
                                <h1 className="font-baiJamjuree text-[18px] md:text-[24px]">
                                    {story.name}
                                </h1>
                                <p className="font-rubik font-light md:text-[14px] text-[12px] text-[#707070]">
                                    {story.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 ml-32">
                <div className="md:hidden flex h-[36px] w-[104px] gap-[32px]  items-center justify-between">
                    <button onClick={scrollLeft}>
                        <img src={left} alt="Scroll Left" />
                    </button>
                    <button onClick={scrollRight}>
                        <img src={right} alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Story;
