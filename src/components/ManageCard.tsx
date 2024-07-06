import Image from "next/image";

type ManageCardProps = {
    id: number;
    imgUrl: string;
    title: string;
};

const ManageCard = ({ id, imgUrl, title }: ManageCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-2 px-6 animate-fade-right">
            <img 
                src={imgUrl} 
                alt={title} 
                className="w-16 h-16 rounded-full  " 
            />
            <div className="flex flex-col text-center gap-1">
                <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
                    {title}
                </h1>
                <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                    Our membership management software provides full automation of membership renewals and payments.
                </p>
            </div>
        </div>
    );
};

export default ManageCard;