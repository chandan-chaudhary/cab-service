import {IconType} from 'react-icons';

import { FaSuitcase } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BiTransferAlt } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";


interface BookingOption {
    bookingType: string,
    bookIcon: IconType,
}

const bookingOption: BookingOption[]= [
    {
        bookingType: 'outstation',
        bookIcon: FaSuitcase
    },
    {
        bookingType: 'local',
        bookIcon: ImLocation
    },

    {
        bookingType: 'transfer',
        bookIcon: BiTransferAlt
    },

    {
        bookingType: 'deal',
        bookIcon: MdLocalOffer
    }
];

export default bookingOption;