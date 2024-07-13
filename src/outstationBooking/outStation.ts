
import travelImg from '../assets/outstation/travell.jpg'

interface OutStation {
    image: string,
    bookFor: string,
}
const outStation: OutStation []= [
    {
        image: travelImg,
        bookFor:'Airport'
    },
    {
        image: travelImg,
        bookFor:'OutStation'
    },    {
        image: travelImg,
        bookFor:'Local'
    },
];
export default outStation;
