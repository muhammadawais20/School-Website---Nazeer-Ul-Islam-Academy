import React from "react";
import { Vortex } from 'react-loader-spinner';

import "./Loader.scss";

const Loader = () => {
    return (
        <div className="websiteLoader">
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#00a14b', '#1b75bb', '#f16522', 'lightgray', 'darkslategray', '#0a0a0a']}
            />
        </div>
    )
}

export default Loader;