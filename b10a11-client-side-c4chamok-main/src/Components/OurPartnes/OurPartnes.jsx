import React from 'react';

const partners = [
    {
        id: 1,
        name: 'Techify Solutions',
        logo: 'https://techifysolutions.com/wp-content/uploads/2024/03/Untitled-design-2.png',
        description: 'Providing advanced technological solutions to enhance user experience on RatePal.',
    },
    {
        id: 2,
        name: 'MarketReach Media',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uJt7SwuZDwDb9xn1xhQURh11MT7xPKe26Q&s',
        description: 'Helping RatePal connect with audiences through strategic marketing initiatives.',
    },
    {
        id: 3,
        name: 'SecurePay Systems',
        logo: 'https://cdn3.mageplaza.com/media/general/kGCICdO.png',
        description: 'Ensuring secure and seamless payment processes for service providers.',
    },
    {
        id: 4,
        name: 'GreenSpark Analytics',
        logo: 'https://cdn.prod.website-files.com/620d2f9aa4649b007b6fe88d/620d2f9aa4649b24c76fe8bc_GreenSpark-FullLogo-p-500.png',
        description: 'Delivering actionable insights to drive growth and improve decision-making.',
    },
];

const OurPartners = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800"> Our Partners</h2>
                    <p className="text-gray-600 mt-4">
                        We proudly collaborate with these industry leaders to bring you the best services and experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            <img
                                src={partner.logo}
                                className="size-[200px] object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
                            <p className="text-gray-600 mt-2">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
