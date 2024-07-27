import React from "react";


const Header: React.FC =() =>{
    return(
        <div className={'flex items-center justify-between bg-white text-black w-full'}>
            <div className="navbar bg-white py-2">
                <a className="btn btn-ghost text-xl text-black">Cab Logo</a>
            </div>
            <div className={'px-12'}>
                <span>TAB</span>
                {/*<span>tab</span>*/}
                {/*<span>tab</span>*/}

            </div>
        </div>
    )
};
export default Header;