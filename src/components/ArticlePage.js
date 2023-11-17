import React, { useState, useEffect } from 'react';
import './ArticlePage.css'; // Import the CSS file
import Map from "./Map";
import NetworkDiagram from "./NetworkDiagram";
import SwarmChart from "./SwarmChart";

import songData from '../song_similarity_graph.json'; // Adjust the path to your JSON file
import artistData from '../artist_similarity_graph.json'; // Adjust the path to your JSON file

// Placeholder components
// const MapComponent = () => <div className="wide-component">Map Component</div>;
// const NetworkDiagram = () => <div className="wide-component">Network Diagram</div>;
// const SwarmChart = () => <div className="wide-component">Swarm Chart</div>;

const ArticlePage = () => {

    const [sData, setSongData] = useState(null);
    const [aData, setArtistData] = useState(null);

    const artists1 = [
        { name: 'Rapper1', score: 8.2, gang: 'Gang A'  },
        { name: 'Rapper2', score: 7.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 9.5, gang: 'Gang C'  },
        { name: 'Rapper2', score: 10.5, gang: 'Gang A'  },
        { name: 'Rapper2', score: 11.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 12.5, gang: 'Gang C'  },
        { name: 'Rapper2', score: 14.5, gang: 'Gang A'  },
        { name: 'Rapper2', score: 13.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 15.5, gang: 'Gang C'  },
        { name: 'Rapper1', score: 8, gang: 'Gang A'  },
        { name: 'Rapper2', score: 7, gang: 'Gang B'  },
        { name: 'Rapper2', score: 9, gang: 'Gang C'  },
        { name: 'Rapper2', score: 10, gang: 'Gang A'  },
        { name: 'Rapper2', score: 11, gang: 'Gang B'  },
        { name: 'Rapper2', score: 12, gang: 'Gang C'  },
        { name: 'Rapper2', score: 14, gang: 'Gang A'  },
        { name: 'Rapper2', score: 13, gang: 'Gang B'  },
        { name: 'Rapper2', score: 15, gang: 'Gang C'  },
    ];

    const artists2 = [
        { name: 'Rapper1', score: 18.2, gang: 'Gang A'  },
        { name: 'Rapper2', score: 17.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 19.5, gang: 'Gang C'  },
        { name: 'Rapper2', score: 10.5, gang: 'Gang A'  },
        { name: 'Rapper2', score: 11.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 12.5, gang: 'Gang C'  },
        { name: 'Rapper2', score: 14.5, gang: 'Gang A'  },
        { name: 'Rapper2', score: 13.5, gang: 'Gang B'  },
        { name: 'Rapper2', score: 15.5, gang: 'Gang C'  },
        { name: 'Rapper1', score: 18, gang: 'Gang A'  },
        { name: 'Rapper2', score: 17, gang: 'Gang B'  },
        { name: 'Rapper2', score: 19, gang: 'Gang C'  },
        { name: 'Rapper2', score: 10, gang: 'Gang A'  },
        { name: 'Rapper2', score: 11, gang: 'Gang B'  },
        { name: 'Rapper2', score: 12, gang: 'Gang C'  },
        { name: 'Rapper2', score: 14, gang: 'Gang A'  },
        { name: 'Rapper2', score: 13, gang: 'Gang B'  },
        { name: 'Rapper2', score: 15, gang: 'Gang C'  },
    ];

    const gangDescriptions = [
        {
            Group: "Group 1",
            Description: "Description 1",
            Allies: "Allies 1",
            Opps: "Opps 1",
        },
        {
            Group: "Group 2",
            Description: "Description 2",
            Allies: "Allies 2",
            Opps: "Opps 2",
        },
        {
            Group: "Group 3",
            Description: "Description 3",
            Allies: "Allies 3",
            Opps: "Opps 3",
        },
        {
            Group: "Group 4",
            Description: "Description 4",
            Allies: "Allies 4",
            Opps: "Opps 4",
        },
        {
            Group: "Group 5",
            Description: "Description 5",
            Allies: "Allies 5",
            Opps: "Opps 5",
        },
    ];

    const slangDescriptions = [
        {
            Slang: "Slang 1",
            Meaning: "Meaning 1",
        },
        {
            Slang: "Slang 2",
            Meaning: "Meaning 2",
        },
        {
            Slang: "Slang 3",
            Meaning: "Meaning 3",
        },
        {
            Slang: "Slang 4",
            Meaning: "Meaning 4",
        },
        {
            Slang: "Slang 5",
            Meaning: "Meaning 5",
        },
    ];

    useEffect(() => {
        setSongData(songData);
        setArtistData(artistData);
    }, []);

    return (
        <div className="article-container">
            <h1>Investigating London Gang Violence With Music</h1>
            <h2>Using UK drill lyrics to investigate the violence of london gangs</h2>
            <p className="names">By Adnaan, Cees, and Winnie</p>
            <p className="date">2023-11-16</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="wide-map-component">
                <Map />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="large-table">
                <h2>Gang Database</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Group</th>
                        <th>Description</th>
                        <th>Allies</th>
                        <th>Opps</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Render the first 5 rows of song data here */}
                    {gangDescriptions && gangDescriptions.slice(0, 5).map((item, index) => (
                        <tr key={index}>
                            <td>{item.Group}</td>
                            <td>{item.Description}</td>
                            <td>{item.Allies}</td>
                            <td>{item.Opps}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="see-more">* There are more rows in the full dataset.</p>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="wide-component">
                <h2>Song Similarity</h2>
                {sData && <NetworkDiagram data={sData} />}
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            {/*<div className="wide-component">*/}
            {/*    <h2>Artist Similarity</h2>*/}
            {/*    {aData && <NetworkDiagram data={aData} />}*/}
            {/*</div>*/}

            <div className="large-table">
                <h2>Slang Words and Meanings Dataset</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Slang</th>
                        <th>Meaning</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Render the first 5 rows of artist data here */}
                    {slangDescriptions && slangDescriptions.slice(0, 5).map((item, index) => (
                        <tr key={index}>
                            <td>{item.Slang}</td>
                            <td>{item.Meaning}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="see-more">* There are more rows in the full dataset.</p>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="wide-component">
                <h2>Aggressiveness of Language in Lyrics</h2>
                <h4>Before slang encoding:</h4>
                <SwarmChart data={artists1} />
                <h4>After slang encoding:</h4>
                <SwarmChart data={artists2} />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <footer>
                <p>Footer content here</p>
            </footer>
        </div>
    );
};

export default ArticlePage;
