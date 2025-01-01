import { useState } from "react";

interface AccordionSectionProps{
    title: string;
    iconSrc?: string;
    children: React.ReactNode;
    cssParent?: string;
}

export default function AccordionSection({title, iconSrc="/assets/images/icons/bottom-booking-form.svg", cssParent="flex flex-col gap-4", children}: AccordionSectionProps){

    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section
            className="flex flex-col gap-4 rounded-3xl border border-shujia-graylight bg-white px-[14px] py-[14px]"
        >
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">{title}</h2>
                <button type="button" onClick={toggleOpen}>
                    <img
                        src={iconSrc}
                        alt="icon"
                        className={`h-[32px] w-[32px] shrink-0 transition-all duration-300
                            ${isOpen ? '-rotate-180' : ''}    
                        `}
                    />
                </button>
            </div>
            {isOpen && <div className={cssParent}>
                {children}
            </div>}
        </section>
    );
}