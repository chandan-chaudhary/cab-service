

export const bookingChart = {
    labels:[
       'Total', 'Confirm', 'Pending', 'Cancled'
    ],

    datasets:[
        {
            label: 'Bookings',
            data:[2000, 1500, 400, 100,],
            backgroundColor: ['blue', 'green', 'pink', 'red'],
            hoverOffset: 4,
        }
    ]
};
