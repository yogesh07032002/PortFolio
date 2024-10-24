import React from 'react';
import m from '../../public/m.jpg';
import n from '../../public/n.jpg';
import o from '../../public/o.jpg';
import p from '../../public/p.jpg';
import s from '../../public/s.jpg';
import z from '../../public/z.jpg';

function FieldsOfExpertization() {
    const cardItem = [
        {
            id: 1,
            logo: m,
            name: "Udyog Yashogatha"
        },
        {
            id: 2,
            logo: n,
            name: "Clothing Industry"
        },
        {
            id: 3,
            logo: o,
            name: "Magazine"
        },
        {
            id: 4,
            logo: p,
            name: "Event Management"
        },
        {
            id: 5,
            logo: s,
            name: "Celebrity Management"
        },
        {
            id: 6,
            logo: z,
            name: "Exhibitions"
        },
       
    ];

    return (
        <>
            <div name='Services' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-5">
                <div>
                    <h1 className='text-3xl font-bold mb-5 text-blue-700 text-center md:text-start'>Fields Of Expertization</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Added grid layout for better alignment */}
                        {cardItem.map(({ id, logo, name }) => (
                            <div key={id} className="border p-4 rounded-md cursor-pointer hover:scale-110 duration-300 shadow-md text-center md:text-start">
                                <img src={logo} alt={name} className="h-40 w-full object-cover mb-4" /> {/* Ensure image is styled */}
                                <div className="text-xl font-semibold">{name}</div>
                                <p className="mt-2 text-pink-700"> </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default FieldsOfExpertization;
