
interface BookingRoute{
    route: string;
}

export const outstationRoute: BookingRoute[] = [
    {
        route: 'One Way'
    },
    {
        route: 'Roundtrip'
    },
    {
        route: 'Multicity'
    },
];

export const localRoute: BookingRoute[] = [
    {
        route: 'Half day',
    },
    {
        route: 'Full day',
    }
];

export const transferRoute: BookingRoute[] = [
    {
        route: 'Railway Station',
    },
    {
        route: 'Airport',
    },
    {
        route: 'Area/Hotel',
    },
];

export const dealRoute: BookingRoute[] = [
    {
        route: 'Oneway Deal'
    }
];

