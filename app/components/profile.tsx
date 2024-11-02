import React from 'react';

const MyInfos = {
    birthPlace: 'Bandung',
    birthDate: '2003-10-02',
    gender: 'Female',
    Height: '155 cm',
    Weight: '- kg',
    maritalStatus: 'Single',
    whatsapp: '+628724515703',
    email: 'fitrisetia2003@gmail.com',
};

export default function Profile() {
    return (
        <div className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8">Personal Info</h2>
            <ul className="list-none space-y-3">
                {Object.entries(MyInfos).map(([key, value]) => (
                    <li key={key} className="flex justify-between border-b pb-2 text-white">
                        <span className="capitalize font-semibold text-gray-300">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-gray-200">{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
