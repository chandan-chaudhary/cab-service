
import React from "react";

// DATA
import {dealRoute, localRoute, outstationRoute, transferRoute} from "./bookingRoute.ts";

// PROPS INTERFACE
interface routeProps {
    isRoute?: string,
    isSelected?: string
    setRoute: React.Dispatch<React.SetStateAction<string>>
}

// FUNCTIONAL COMPONENT
const RouteSelection = (props:routeProps) => {
    return(
        <section>
            <div className={'flex space-x-5 font-bold  md:max-lg:ml-12 uppercase text-black  md:space-x-7 text-center'}>
                {/*OUTSTATION*/}
                {
                    props.isSelected === 'outstation' &&
                    outstationRoute.map((route, i) =>
                        <div key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900 '}  pb-2 text-center `}>{route.route}</div>
                    )}
                {/*LOCAL*/}
                {
                    props.isSelected === 'local' &&
                    localRoute.map((route, i) =>
                        <div key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'}  pb-2`}>{route.route}</div>
                    )}
                {/*TRANSFER*/}
                {
                    props.isSelected === 'transfer' &&
                    transferRoute.map((route, i) =>
                        <div key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'}  pb-2`}>{route.route}</div>
                    )}
                {/*DEAL*/}
                {
                    props.isSelected === 'deal' &&
                    dealRoute.map((route, i) =>
                        <div key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'}  pb-2`}>{route.route}</div>
                    )}
            </div>

        </section>
    )
};
export default RouteSelection;