import React from 'react';
import Suggestion from "./Suggestion/Suggestion";

import './Suggestions.css';

const Suggestions = () => {
    return (
        <div className="scrollbars bg-white p-0 m-0" id="style-1s">
            <div className="force-overflows">
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
                <Suggestion/>
            </div>
        </div>
    );
};

export default Suggestions;