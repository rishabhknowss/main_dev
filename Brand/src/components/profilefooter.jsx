import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";
import footer4 from "../assets/footer4.svg";
import footer5 from "../assets/footer5.svg";

export const ProfileFooter = () => {

    const footerItems = [
        {
            id: 1,
            title: "Philanthropic Interests",
            description: "Support for children's education and healthcare",
            icon: footer1  // Replace with appropriate icon
        },
        {
            id: 2,
            title: "Environmental Stance",
            description: "Promotes eco-friendly products. Advocates for reducing plastic use.",
            icon: footer2  // Replace with appropriate icon
        },  
        {
            id: 3,
            title: "Political Views",
            description: "Supports non-partisan social issues",
            icon: footer3  // Replace with appropriate icon
        },
        {
            id: 4,
            title: "Cultural Influences",
            description: "Participates in and supports Indian cultural events",
            icon: footer4  // Replace with appropriate icon
        },
        {
            id: 5,
            title: "Brand Affinity",
            description: "Affiliated with brands like Puma, MRF",
            icon: footer5  // Replace with appropriate icon
        }
    ];

    return (
       <div className="my-6 shadow-xl rounded-xl  ">
        <div className="bg-white grid items-center p-4 rounded-xl">
            <div className="flex justify-center text-xl font-semibold">Values & Beliefs</div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                {footerItems.map((item) => (
                    <div key={item.id} className="flex flex-col items-center p-4 border rounded-lg">
                        <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2"/>
                        <span className="text-sm font-semibold">{item.title}</span>
                        <span className="text-xs text-center mt-2">{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};
