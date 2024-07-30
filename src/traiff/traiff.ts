


export interface TraiffDetailProps{
    vehicleType:string,
    ratePerKM: string | number,
    driverBata: string | number,
    additionalCharge :string | number,
}

// this is traiif deatil admin interface 
// interface VehicleDetails{
//     vehicleType:string,
//     ratePerKM:string,
//     driverBata:string,
//     additionalCharges: string,
//   }

export const traiffData = ['Vehicle Type', 'Rate KM/H', 'Driver Bata', 'Additional Charges'];

const vehicleInfo: TraiffDetailProps[] = [
    {
        vehicleType: 'sedan',
        ratePerKM: 20 ,
        driverBata: 0,
        additionalCharge: 'none',
    },

    {
        vehicleType: 'etios',
        ratePerKM: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
    {
        vehicleType: 'suv',
        ratePerKM: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
    {
        vehicleType: 'suv',
        ratePerKM: 20,
        driverBata: 0,
        additionalCharge: 'none',
    },
];

export default vehicleInfo;