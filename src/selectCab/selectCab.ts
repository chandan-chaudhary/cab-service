

import etiosImg from '../assets/vehicles/etios.jpg';

export interface SelectCabProps {
    vehicleName: string,
    vehicleType: string,
    vehicleImage: string,
    airCondition :string
    seats: number | string ,
    price_Km: number | string,
    totalFare?: number | string,
};

export const selectCab: SelectCabProps[] = [
    {
        vehicleName: 'tata indigo',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },
    {
        vehicleName: 'nissan',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1400,
    },    {
        vehicleName: 'suv',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1000,
    },    {
        vehicleName: 'bmw',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1500,
    },    {
        vehicleName: 'other',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1100,
    },    {
        vehicleName: 'mahindra',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1700,
    },    {
        vehicleName: 'tata indigo',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        vehicleName: 'tata indigo',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        vehicleName: 'tata indigo',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },    {
        vehicleName: 'tata indigo',
        vehicleType: ' Sedan',
        vehicleImage: etiosImg,
        airCondition: 'ac',
        seats:4,
        price_Km: 20,
        totalFare:1200,
    },
];