import React from "react";


const Header: React.FC =() =>{
    return(
        <div className={'flex justify-between bg-white text-black'}>
            <div className="navbar bg-white py-5">
                <a className="btn btn-ghost text-xl text-black">Cab Logo</a>
            </div>
            <div >
                <span>tab</span>
                <span>tab</span>
                <span>tab</span>

            </div>
        </div>
    )
};
export default Header;