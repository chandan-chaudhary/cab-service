


interface VehicleInfo{
    vehicleName:string,
    price: number,
    driverBata: number,
    additionalCharge?:string,
}

export const traiffData = ['Vehicle Type', 'Rate KM/H', 'Driver Bata', 'Additional Charges'];

const vehicleInfo: VehicleInfo[] = [
    {
        vehicleName: 'sedan',
        price: 20 ,
        driverBata: 0,
        additionalCharge: 'none',
    },

    {
        vehicleName: 'etios',
        price: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
    {
        vehicleName: 'suv',
        price: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
    {
        vehicleName: 'suv',
        price: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
];

export default vehicleInfo;