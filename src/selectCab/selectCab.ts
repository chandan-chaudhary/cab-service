

import etiosImg from '../assets/vehicles/etios.jpg';

interface SelectCab {
    cabName: string,
    vehicleType: string,
    cabPic: string,
    airCondition?:boolean
    seats: number,
    price_Km: number,
    totalFare: number,
};

export const selectCab: SelectCab[] = [
    {
        cabName: 'tata indigo',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },
    {
        cabName: 'nissan',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1400,
    },    {
        cabName: 'suv',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1000,
    },    {
        cabName: 'bmw',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1500,
    },    {
        cabName: 'other',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1100,
    },    {
        cabName: 'mahindra',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1700,
    },    {
        cabName: 'tata indigo',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        cabName: 'tata indigo',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        cabName: 'tata indigo',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        cabName: 'tata indigo',
        vehicleType: ' Sedan',
        cabPic: etiosImg,
        airCondition: false,
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },
];