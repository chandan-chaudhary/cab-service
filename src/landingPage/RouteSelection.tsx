
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
            <div className={'flex space-x-5 font-bold  uppercase text-black md:text-xl md:space-x-10'}>
                {/*OUTSTATION*/}
                {
                    props.isSelected === 'outstation' &&
                    outstationRoute.map((route, i) =>
                        <span key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900 '} pb-2 `}>{route.route}</span>
                    )}
                {/*LOCAL*/}
                {
                    props.isSelected === 'local' &&
                    localRoute.map((route, i) =>
                        <span key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'} pb-2`}>{route.route}</span>
                    )}
                {/*TRANSFER*/}
                {
                    props.isSelected === 'transfer' &&
                    transferRoute.map((route, i) =>
                        <span key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'} pb-2`}>{route.route}</span>
                    )}
                {/*DEAL*/}
                {
                    props.isSelected === 'deal' &&
                    dealRoute.map((route, i) =>
                        <span key={i} onClick={() => props.setRoute(route.route)}
                              className={`${route.route === props.isRoute && 'border-b-4 border-blue-900'} pb-2`}>{route.route}</span>
                    )}
            </div>

        </section>
    )
};
export default RouteSelection;