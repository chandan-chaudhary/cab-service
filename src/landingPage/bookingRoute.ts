
interface BookingRoute{
    route: string;
}

export const outstationRoute: BookingRoute[] = [
    {
        route: 'one-way'
    },
    {
        route: 'roundtrip'
    },
    {
        route: 'multicity'
    },
];

export const localRoute: BookingRoute[] = [
    {
        route: 'half day',
    },
    {
        route: 'full day',
    }
];

export const transferRoute: BookingRoute[] = [
    {
        route: 'railway station',
    },
    {
        route: 'airport',
    },
    {
        route: 'area/hotel',
    },
];

export const dealRoute: BookingRoute[] = [
    {
        route: 'oneway deal'
    }
];

