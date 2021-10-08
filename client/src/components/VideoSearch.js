import React from "react";
import { searchVideos } from "../modules/videoManager";

export const VideoSearch = ({setVideos}) => {

    return(
        <div className="container">
            <div className="searchBar">
                <div className="m-6 videoSearch">
                    <p>Search Video:</p>
                    <input type="text" className = "input"  placeholder="Search" onChange={
                        
                        (event) => searchVideos(event.target.value, true).then(v => setVideos(v))}
                        
                    />
                </div>
        </div>
            </div>
    )
}