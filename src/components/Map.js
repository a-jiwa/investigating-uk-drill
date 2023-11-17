import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Add your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiYWRuYWFuaiIsImEiOiJjbGs2d2E1Y3owM28xM2psaXVxd2xja2J6In0.nkC0bsM3cuGc4Svt9CZaLg';

const colorDict = {
    // East London
    'Fellows Court': '#FF5733',
    'Hindle House': '#33FF57',
    'Stoke Newington/Stokey16/Nightingale': '#5733FF',
    'Pembury': '#FF33A6',
    'Thatched House Thugs': '#33A6FF',
    'Loyal Soldiers (LS)': '#A6FF33',
    'Boundary': '#FFA633',
    'Drive & Marlowe (GMB)': '#A633FF',
    'ChingHall / Ching Block (COS)': '#FF3366',
    'Selrack (ARG)': '#3366FF',
    'Bethnal Green (BG)': '#66FF33',
    'Brick Lane Massive (BLM)': '#FF6633',
    'Brady Street Massive (BSM)': '#33FF66',
    'Cleveland': '#3366A6',
    'Globe Town (GT)': '#A6FF66',
    'Cannon Street Posse (CSP)': '#66A6FF',
    'Shadwell Massive': '#FF66A6',
    'Jubilee Street Massive (JSM)': '#A6FFA6',
    'Stepney (STP)': '#A6A6FF',
    'Locksley State Massive': '#FFA6A6',
    'Burdett Dangerous Thugs': '#A6A6A6',
    'E3 Massive': '#FF3333',
    'Limehouse Massive': '#33FF33',
    'Poplar Massive Crew': '#3333FF',
    'Lansbury Massive': '#FF33FF',
    'Teviot': '#33FFFF',
    'Aberfeldy Village (AV)': '#FFFF33',
    'Stroudley Walk Boys': '#333333',
    'True Tredegar Thugs': '#666666',
    'I.O.D': '#999999',
    'gx_media_links SJ/Mali Strip': '#CCCCCC',
    'Whiston Road': '#FF99CC',
    'Kingsmead': '#CC99FF',
    '7th/BWC': '#99CCFF',
    'M15/Maryland': '#FFCC99',
    'Mountford': '#99FFCC',
    'Beckton/6th/ACG': '#CCFF99',
    'Beaumont (LGR)': '#99CC99',
    'YTB': '#CC99CC',
    'Northwold/Upper Clapton/5th': '#CC9999',
    'A-Road': '#99CCFF',
    'Stoneydown': '#CCFF99',
    'OC': '#99CCFF',
    'LTizzy/Mali Strip': '#CC99FF',
    'Mothers Square': '#99FFCC',
    'Priory Court (PCB)': '#CC99CC',
    'Manor Park/12th/OM': '#99CCCC',
    '8th': '#CC9999',
    '7th/Woodgrange': '#99FF99',
    'Southwold/Upper Clapton/5th': '#FF9999',
    'Gilpin Square': '#99FFFF',
    'Kingshold': '#FF99FF',
    'Homerton/98s': '#FFFF99',
    'London Fields/ZT': '#9966FF',
    'Holly Street/98s': '#FF9966',
    'Springfield/Upper Clapton/5th': '#66FF99',
    'Murder Mile': '#9966CC',
    'E3 / Devons Road Bloods': '#CC9966',
    'E3 / Roman Road Bloods': '#66CC99',
    '15th/Stratford/BCM': '#996666',
    'Custom House/CH/16th': '#669966',
    'Canning Town/CTB/16th': '#996699',
    'CGE/Chadd Green': '#669999',
    'Cambridge Heath (CHR)': '#999966',

    // North London
    'Red Brick/Deadmonton': '#FF5733',
    'Meridian/MWF': '#33FF57',
    'OFB': '#5733FF',
    'Reed Road / EvaStrap': '#FF5733',
    '240 / Chestnut': '#33FF57',
    'Tiverton': '#5733FF',
    'Hornsey/V8': '#FF5733',
    'Manor House (MTS/135 Piru)': '#33FF57',
    'Stamford Hill (MTS/135 Piru)': '#5733FF',
    'Stoke Newington/Stokey16/Smalley': '#FF5733',
    'Stoke Newington/Stokey16/Rectory Road': '#33FF57',
    'Somerford Grove': '#5733FF',
    'Andover': '#FF5733',
    'HB5/Highbury': '#33FF57',
    'Finchley 197': '#5733FF',
    'Hoxton': '#FF5733',
    'Quill Street': '#33FF57',
    'Red Pitch (RPG)': '#5733FF',
    'Soldiers of Shakespeare (SOS)': '#FF5733',
    'GLane/48': '#33FF57',
    'Stoke Newington/Stokey16/Lordship': '#5733FF',
    'De Beauvoir': '#FF5733',
    'N15': '#33FF57',
    'Ferry Lane/GMR': '#5733FF',
    'Essex Road': '#FF5733',
    'EC1 / Easy Cash': '#33FF57',
    'Wood Green/22': '#5733FF',
    'NPK': '#FF5733',
    'NRB': '#33FF57',
    'CHC/Wray Kray': '#5733FF',
    'Edmonton / 900 / O9B / 3x3': '#FF5733',
    'GMG/AP/Skengfield': '#33FF57',
    'P-Block': '#5733FF',
    'Busy Block / ELT / NOL / ATeam': '#FF5733',
    'EnnyTown': '#33FF57',
    'TPL/DC8/YMS': '#5733FF',
    'TPL/OTP/SmokeSquad': '#FF5733',
    '1T/OneTray': '#33FF57',
    '240': '#5733FF',
    'Cally Road': '#FF5733',
    'Txrror Block': '#33FF57',
    'Grey Gang/Deadmonton/Fore Street Malis': '#5733FF',

    // North West London
    'Press Road (PRS)': '#FF3366',
    'A9': '#3366FF',
    'Hendon (3BP/4B)': '#33FF66',
    '9th Street': '#66FF33',
    'D-Block (DBG)': '#9966CC',
    'North Kilburn / Kilburn Bandits / Top6': '#CC9966',
    'Cromer Street Massive': '#66CC99',
    'Active Gxng/AG': '#99CC66',
    'Monks Park (MPM)': '#CC6699',
    'St Raphs (SRS)': '#6699CC',
    'Kensal Green/KG': '#CC99CC',
    'South Kilburn (SSK / MMF / FAC / £R)': '#99CCCC',
    'Wembley Fornia Dons (WFD)': '#CCCC99',
    'Chalkhill (CHB)': '#99CCFF',
    'Wealdstone (SCG)': '#FF99CC',
    'Swiss Cottage / L-Block': '#CC99FF',
    'Lisson Green (LG8)': '#FFCC99',
    'Queensbury (QB)': '#99FFCC',
    'Queens Crescent/QC': '#CC99CC',
    'FSG': '#99CCCC',
    'Cricklewood / CWood / 2Side': '#CCCC99',
    'Peckwater': '#99CCFF',
    'Rayners Lane (RL)': '#FF99CC',
    'Cumbo/OS': '#CC99FF',
    'CT1': '#FFCC99',
    'Swiss Cottage / Sin City': '#99FFCC',
    'Stonebridge (USG / SGB / TOS / SOS)': '#CC99CC',
    'Church Road (CRS / CSB / ICB)': '#99CCCC',
    'Kingsbury (OKB)': '#CCCC99',
    'Willesden Green (WGB)': '#99CCFF',
    'Drummond Street Posse (DSP)': '#FF99CC',
    'NBL / Area 5': '#CC99FF',

    // Outer East London Essex
    '1st/Drillford (GYD) / LOX-LEY (MOD)': '#CC9999',
    'OCM/Hainault": "gx_media_links': '#99CC99',
    'CBT/Harts Lane': '#CCCC99',
    'CBT/Academy Way': '#99CCFF',
    'TGB': '#FF99CC',
    'ASB': '#CC99FF',
    'GBlock (GB)': '#FFCC99',
    'Hellbanianz': '#99FFCC',
    '109/Dagenham': '#FF99FF',
    'RM/Romford': '#CCFFFF',
    'Horrid Hill': '#FFFFCC',
    'Barkingside': '#CCCCCC',
    'C17 / GTM': '#99CCCC',
    'NTG': '#CCCC99',
    '268': '#99CCFF',
    'CBT/Laindon': '#FFCCCC',
    'MarksGate/MG': '#CCFFCC',
    '410': '#CC99CC',
    '150 / GBG / A Town': '#99FF99',
    '150 / CMG / LJ': '#FF99FF',
    'SIRU/Siraq/727': '#99FFFF',
    'KuKu/Black Prince': '#FFFF99',
    '55/GID': '#9966FF',
    '37/Block 10': '#FF9966',
    '37/Southfields': '#66FF99',
    '37/RR/Roehampton': '#9966CC',
    'LxDrive': '#CC9966',
    'Lettsom': '#66CC99',
    'Dulwich / Circle Boys': '#9966A6',
    'Pollards Hill': '#A6FFA6',
    'Silwood': '#A6A6FF',
    'Ghetto/Shower/14th': '#A6FF33',
    'Ghetto/D-Block/8th': '#33A6FF',
    'Ghetto/Pepys/8th': '#A633FF',
    'Turnham/AR': '#FF5733',
    'Block 6': '#33FF57',
    'Block12/124': '#5733FF',
    'BSide/785': '#FF5733',
    'STK/STown/LPW': '#33FF57',
    'SG': '#5733FF',
    'Crane Block': '#FF5733',
    'PR15 / NBR': '#33FF57',
    'Roadside/Block 5/198': '#5733FF',
    'Claptown (CT)': '#FF5733',
    'Acre Lane Campaign (ALC)': '#33FF57',
    'M20': '#5733FF',
    'ABM/M Block/TeamRaw': '#FF5733',
    'Fudgetown': '#33FF57',
    'Black Mafia': '#5733FF',
    'OTR': '#FF5733',
    'OKR/NOB/Brooklyn (OBY/BFR)': '#33FF57',
    'MH': '#5733FF',
    'Peckham Boys / Black Gang (OPB/SN1/Anti/GMG/YPB/Zone 2)': '#FF5733',
    'ROC/Rockingham': '#33FF57',
    '061': '#5733FF',
    'Aylesbury17 (AY17)': '#FF5733',
    'Browning17 (B17)': '#33FF57',
    '37/OJB': '#5733FF',
    'GS28/T-Block/Block Gang': '#FF5733',
    'SRoad': '#33FF57',
    'VP/430': '#5733FF',
    'Fieldway/00': '#FF5733',
    'CR0/0/DSN': '#33FF57',
    'WildBatch': '#5733FF',
    'WoolyO/18': '#FF5733',
    '5th/LPW': '#33FF57',
    'Lovelinch': '#5733FF',
    'Woolwich Boys (CGM)': '#FF5733',
    '1stSide / WK / ICE': '#33FF57',
    '26 / Upper Sydenham': '#5733FF',
    'Ferrier (FTM)': '#FF5733',
    '9Side': '#33FF57',
    'Parkside': '#5733FF',
    'GH00 / GHunna': '#FF5733',
    'North Heath': '#33FF57',
    'West Street': '#5733FF',
    '4Anti': '#FF5733',
    '26/Lower Sydenham': '#33FF57',
    'BlueHillz/2300/LDG': '#5733FF',
    'China Walk': '#FF5733',
    'VCity': '#33FF57',
    'JRoad': '#5733FF',
    'SplashSet': '#FF5733',
    'CR7/GLane': '#33FF57',
    'Blenheim Gardens': '#5733FF',
    'YND / MFL': '#FF5733',
    'Uptown': '#33FF57',
    'Queens Rd': '#5733FF',
    '5Side': '#FF5733',
    'Cherry (OCB/CYB)': '#33FF57',
    'AWB': '#5733FF',
    'Moscow17 (M17)': '#FF5733',
    'Uptop/UTH': '#33FF57',
    '674': '#5733FF',
    '417': '#FF5733',
    'Monson': '#33FF57',
    'SNR': '#5733FF',
    'SMS / Squeeze 4 P$$ / Squeeze Section': '#FF5733',
    'LTH/861': '#33FF57',
    'O\'Lanna': '#5733FF',
    'GP': '#FF5733',
    'Gipsy Hill/Gipset/019': '#33FF57',
    'SWC': '#5733FF',
    'Waddon/W': '#FF5733',
    'MT/Morden Thugs': '#33FF57',
    'OTCU/M-Town': '#5733FF',
    '213/Sutton': '#FF5733',
    'OLane/RPG': '#33FF57',
    'CTown/Coulsdon': '#5733FF',
    'Dorset Road': '#FF5733',
    '031 / Team Trizzy / 17/ABG/TOG': '#33FF57',
    'Harlem': '#5733FF',
    'SBV/SBlock': '#FF5733',
    'Whitehorse': '#33FF57',
    '25': '#5733FF',
    'KWO': '#FF5733',
    'NorthGreenwich/G-Town': '#33FF57',
    'CMB/500': '#5733FF',
    'Mitcham/4rth': '#FF5733',
    'Mitcham/Deadbridge/TeamRaw': '#33FF57',

    // Watford Hertfordshire
    'AR5': '#FF5733',
    'WD': '#33FF57',
    'LGC': '#5733FF',
    'Block 3': '#FF5733',
    '5th': '#33FF57',
    '25 Section': '#5733FF',

    // West London
    'Church Town Militants (CTM)': '#FF5733',
    'Ebury Town Militants (ETM)': '#33FF57',
    'Page Street / Paid Block': '#5733FF',
    'Worlds End': '#FF5733',
    'Warwick/HRB': '#33FF57',
    'South Acton / 3rdSet / Original 3rd': '#5733FF',
    '143 / Feltham': '#FF5733',
    'Shepherds Bush / 12Anti / 12World / 1200': '#33FF57',
    'Mozart/HRB': '#5733FF',
    '156 / Greenford / 6Gang': '#FF5733',
    'West Drayton (WD)': '#33FF57',
    'Golborne': '#5733FF',
    '7Side / SWR': '#FF5733',
    'Purple Hayes (PH)': '#33FF57',
    'YSG': '#5733FF',
    'Ladbroke Grove / LA (CGM)': '#FF5733',
    'Ladbroke Grove / Woodz (CGM)': '#33FF57',
    'Ladbroke Grove / Latimer (CGM)': '#5733FF',
    'Ladbroke Grove / P-Block (CGM)': '#FF5733',
    'ERoad': '#33FF57',
    'CCLanerz / 46th': '#5733FF',
    'TW5': '#FF5733',
    'Section 8': '#33FF57',
    'BBlock / Biraq': '#5733FF',
    'Butts Farm / WL / Winners Lane': '#FF5733',
    'Oriel / TW13': '#33FF57',
    '143 / Feltham / SBlock': '#5733FF',
    'C Road / TW5': '#FF5733',
    '54z': '#33FF57',
    'WK£': '#5733FF',
    'QCR': '#FF5733',
    'S£B': '#33FF57',
    'IPL': '#5733FF',
    '156 / Southall / Zone1': '#FF5733',
    '156 / Northolt / NGang': '#33FF57',
};


const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const popup = useRef(new mapboxgl.Popup({ offset: 15 }));

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/adnaanj/clp097vx9018201pbdrq375oh',
            center: [-0.1276, 51.5072],
            zoom: 10,
            minZoom: 10,
            attributionControl: false
        });

        const geoJsonFiles = [
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/East_London.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/West_London.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/North_London.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/NorthWest_London.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/Outer_East_London_Essex.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/South_London.geojson',
            'https://raw.githubusercontent.com/a-jiwa/lyrics-analysis/main/Watford_Hertfordshire.geojson',
        ];

        geoJsonFiles.forEach((file) => {
            map.current.on('load', () => {
                map.current.addSource(file, {
                    type: 'geojson',
                    data: file,
                });

                map.current.addLayer({
                    id: file,
                    type: 'fill',
                    source: file,
                    layout: {},
                    paint: {
                        'fill-color': [
                            'match',
                            ['get', 'Name'], // Make sure this matches the property name in your GeoJSON features
                            ...Object.entries(colorDict).flat(), // This creates [key, value, key, value, ...] pairs
                            '#f80d0d' // Default color
                        ],
                        'fill-opacity': 0.5,
                    }
                });

                // Add mousemove event listener to each layer
                map.current.on('mousemove', file, (e) => {
                    if (e.features.length > 0) {
                        if (popup.current) {
                            popup.current.remove();
                        }

                        const feature = e.features[0];

                        // Create a popup and set its content to the feature's name
                        popup.current = new mapboxgl.Popup({ offset: 15 })
                            .setLngLat(e.lngLat)
                            .setHTML(`<h3>${feature.properties.Name}</h3>`) // Assuming 'Name' is the property
                            .addTo(map.current);
                    }
                });

                // Add mouseleave event listener to hide the popup
                map.current.on('mouseleave', file, () => {
                    if (popup.current) {
                        popup.current.remove();
                    }
                });
            });
        });
    }, []);

    return <div ref={mapContainer} style={{ height: '600px' }} />;
};

export default MapComponent;

