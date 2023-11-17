import React, {useEffect, useState} from 'react';
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
        {"name": "Amro", "score": 0.0, "gang": "Gang X"}, {
        "name": "Asco",
        "score": -0.9215,
        "gang": "Gang X"
    }, {"name": "Baby Mane", "score": -0.878, "gang": "Gang X"}, {
        "name": "Balistik",
        "score": -0.9753,
        "gang": "Gang X"
    }, {"name": "Bellzey", "score": -0.9948, "gang": "Gang X"}, {
        "name": "BG",
        "score": -0.9137,
        "gang": "Gang X"
    }, {"name": "Birdy", "score": 0.7062, "gang": "Gang X"}, {
        "name": "Bones",
        "score": -0.1217,
        "gang": "Gang X"
    }, {"name": "Boss Belly", "score": -0.956, "gang": "Gang X"}, {
        "name": "Box12",
        "score": -0.9965,
        "gang": "Gang X"
    }, {"name": "C-Rose", "score": 0.4939, "gang": "Gang X"}, {
        "name": "C1",
        "score": -0.9417,
        "gang": "Gang X"
    }, {"name": "Capo", "score": -0.8399, "gang": "Gang X"}, {
        "name": "Cdai",
        "score": 0.9898,
        "gang": "Gang X"
    }, {"name": "Ceaze", "score": -0.9619, "gang": "Gang X"}, {
        "name": "CJ",
        "score": -0.9919,
        "gang": "Gang X"
    }, {"name": "Crash22", "score": -0.9539, "gang": "Gang X"}, {
        "name": "Creepz",
        "score": -0.128,
        "gang": "Gang X"
    }, {"name": "Crimer", "score": 0.9603, "gang": "Gang X"}, {
        "name": "CRose",
        "score": 0.4939,
        "gang": "Gang X"
    }, {"name": "Deep Green", "score": -0.3816, "gang": "Gang X"}, {
        "name": "Django",
        "score": -0.3331,
        "gang": "Gang X"
    }, {"name": "Dotty", "score": 0.9091, "gang": "Gang X"}, {
        "name": "DV",
        "score": -0.9941,
        "gang": "Gang X"
    }, {"name": "Ejay", "score": -0.784, "gang": "Gang X"}, {
        "name": "Farmer12",
        "score": -0.6852,
        "gang": "Gang X"
    }, {"name": "Fredo", "score": -0.9542, "gang": "Gang X"}, {
        "name": "Frisco",
        "score": 0.9105,
        "gang": "Gang X"
    }, {"name": "GeeYou", "score": 0.8151, "gang": "Gang X"}, {
        "name": "Germs",
        "score": -0.9437,
        "gang": "Gang X"
    }, {"name": "Ghostface600", "score": 0.673, "gang": "Gang X"}, {
        "name": "Gripz",
        "score": -0.8796,
        "gang": "Gang X"
    }, {"name": "Hector", "score": 0.0, "gang": "Gang X"}, {
        "name": "J Styles",
        "score": -0.976,
        "gang": "Gang X"
    }, {"name": "Jah Vinci", "score": -0.7876, "gang": "Gang X"}, {
        "name": "Jeezy",
        "score": 0.9175,
        "gang": "Gang X"
    }, {"name": "Jiggz", "score": -0.6199, "gang": "Gang X"}, {
        "name": "JLoud",
        "score": -0.7344,
        "gang": "Gang X"
    }, {"name": "Jojo", "score": 0.1053, "gang": "Gang X"}, {
        "name": "Joobz",
        "score": -0.9847,
        "gang": "Gang X"
    }, {"name": "K Money", "score": -0.9965, "gang": "Gang X"}, {
        "name": "K Rose",
        "score": -0.9932,
        "gang": "Gang X"
    }, {"name": "K6ix", "score": -0.7694, "gang": "Gang X"}, {
        "name": "Kaos",
        "score": 0.9042,
        "gang": "Gang X"
    }, {"name": "Kavelly", "score": -0.9901, "gang": "Gang X"}, {
        "name": "KayyKayy",
        "score": -0.996,
        "gang": "Gang X"
    }, {"name": "Kayze", "score": -0.9931, "gang": "Gang X"}, {
        "name": "KB",
        "score": 0.9806,
        "gang": "Gang X"
    }, {"name": "Kemzi", "score": -0.9581, "gang": "Gang X"}, {
        "name": "Kojo Funds",
        "score": 0.9431,
        "gang": "Gang X"
    }, {"name": "Kraze", "score": 0.9956, "gang": "Gang X"}, {
        "name": "Latts",
        "score": -0.6778,
        "gang": "Gang X"
    }, {"name": "LD", "score": 0.9262, "gang": "Gang X"}, {
        "name": "Lil Dee",
        "score": -0.9867,
        "gang": "Gang X"
    }, {"name": "Loski", "score": 0.9899, "gang": "Gang X"}, {
        "name": "LP",
        "score": 0.9081,
        "gang": "Gang X"
    }, {"name": "Lucii", "score": 0.3434, "gang": "Gang X"}, {
        "name": "Lzz",
        "score": 0.8126,
        "gang": "Gang X"
    }, {"name": "Maestro", "score": 0.989, "gang": "Gang X"}, {
        "name": "Major",
        "score": 0.9989,
        "gang": "Gang X"
    }, {"name": "Mickz", "score": 0.9907, "gang": "Gang X"}, {
        "name": "MizOrMac",
        "score": -0.7992,
        "gang": "Gang X"
    }, {"name": "MK", "score": 0.9605, "gang": "Gang X"}, {
        "name": "MoStack",
        "score": -0.928,
        "gang": "Gang X"
    }, {"name": "Muscle Gotti", "score": -0.3348, "gang": "Gang X"}, {
        "name": "Nines",
        "score": 0.6075,
        "gang": "Gang X"
    }, {"name": "Oboy", "score": 0.9702, "gang": "Gang X"}, {
        "name": "OnDrills",
        "score": -0.8876,
        "gang": "Gang X"
    }, {"name": "Plato", "score": 0.686, "gang": "Gang X"}, {
        "name": "Poky",
        "score": 0.9566,
        "gang": "Gang X"
    }, {"name": "Poppy", "score": 0.9038, "gang": "Gang X"}, {
        "name": "Q2T",
        "score": -0.6124,
        "gang": "Gang X"
    }, {"name": "Rasta", "score": -0.3365, "gang": "Gang X"}, {
        "name": "Ratlin",
        "score": -0.9034,
        "gang": "Gang X"
    }, {"name": "Recky", "score": 0.408, "gang": "Gang X"}, {
        "name": "Rellz",
        "score": -0.5699,
        "gang": "Gang X"
    }, {"name": "Remz", "score": -0.8724, "gang": "Gang X"}, {
        "name": "Rhyno",
        "score": 0.8402,
        "gang": "Gang X"
    }, {"name": "Ridz", "score": 0.2537, "gang": "Gang X"}, {
        "name": "RK",
        "score": -0.128,
        "gang": "Gang X"
    }, {"name": "Ronzo", "score": 0.0618, "gang": "Gang X"}, {
        "name": "Ruger",
        "score": 0.9877,
        "gang": "Gang X"
    }, {"name": "Ryder", "score": -0.984, "gang": "Gang X"}, {
        "name": "Rzo Munna",
        "score": -0.9884,
        "gang": "Gang X"
    }, {"name": "S Wavey", "score": 0.4729, "gang": "Gang X"}, {
        "name": "Sav12",
        "score": 0.5106,
        "gang": "Gang X"
    }, {"name": "Scratchy", "score": -0.9213, "gang": "Gang X"}, {
        "name": "Screwloose",
        "score": -0.9917,
        "gang": "Gang X"
    }, {"name": "Screw", "score": -0.3612, "gang": "Gang X"}, {
        "name": "Skeamer",
        "score": -0.995,
        "gang": "Gang X"
    }, {"name": "Skrapz", "score": -0.9602, "gang": "Gang X"}, {
        "name": "Skrilla",
        "score": -0.971,
        "gang": "Gang X"
    }, {"name": "Smiley", "score": -0.9965, "gang": "Gang X"}, {
        "name": "Snipez",
        "score": -0.9852,
        "gang": "Gang X"
    }, {"name": "Snow", "score": -0.9784, "gang": "Gang X"}, {
        "name": "Squeeze",
        "score": 0.25,
        "gang": "Gang X"
    }, {"name": "Stewie", "score": -0.8689, "gang": "Gang X"}, {
        "name": "Sylent",
        "score": -0.9296,
        "gang": "Gang X"
    }, {"name": "T Rose", "score": -0.9778, "gang": "Gang X"}, {
        "name": "Tel Money",
        "score": 0.6348,
        "gang": "Gang X"
    }, {"name": "Telly", "score": -0.9032, "gang": "Gang X"}, {
        "name": "TG Millian",
        "score": -0.2869,
        "gang": "Gang X"
    }, {"name": "Tizzy T", "score": 0.0, "gang": "Gang X"}, {
        "name": "Topps",
        "score": -0.2023,
        "gang": "Gang X"
    }, {"name": "Trapfit", "score": -0.5767, "gang": "Gang X"}, {
        "name": "Trapstar Toxic",
        "score": 0.3084,
        "gang": "Gang X"
    }, {"name": "Tremz", "score": 0.9349, "gang": "Gang X"}, {
        "name": "Trigz",
        "score": 0.9941,
        "gang": "Gang X"
    }, {"name": "Trills", "score": -0.9568, "gang": "Gang X"}, {
        "name": "Trizzy Trapz",
        "score": -0.6227,
        "gang": "Gang X"
    }, {"name": "TSav", "score": -0.9982, "gang": "Gang X"}, {
        "name": "TTP",
        "score": -0.1531,
        "gang": "Gang X"
    }, {"name": "TTrap", "score": 0.9369, "gang": "Gang X"}, {
        "name": "Twinz",
        "score": -0.6919,
        "gang": "Gang X"
    }, {"name": "TY Sosa", "score": -0.985, "gang": "Gang X"}, {
        "name": "Unknown T",
        "score": -0.7885,
        "gang": "Gang X"
    }, {"name": "V9", "score": 0.4784, "gang": "Gang X"}, {
        "name": "WorkRate",
        "score": -0.7359,
        "gang": "Gang X"
    }, {"name": "Y.CB", "score": -0.9863, "gang": "Gang X"}, {
        "name": "Y.Dot",
        "score": -0.7709,
        "gang": "Gang X"
    }, {"name": "Y.S1", "score": 0.1531, "gang": "Gang X"}, {
        "name": "YG",
        "score": -0.4506,
        "gang": "Gang X"
    }, {"name": "YL", "score": 0.296, "gang": "Gang X"}, {
        "name": "Young A6",
        "score": -0.968,
        "gang": "Gang X"
    }, {"name": "Young Dizz", "score": -0.8643, "gang": "Gang X"}, {
        "name": "Yung Bush",
        "score": 0.9946,
        "gang": "Gang X"
    }, {"name": "Yung Squeezy", "score": 0.7643, "gang": "Gang X"}, {
        "name": "Zico",
        "score": -0.6087,
        "gang": "Gang X"
    }]

    const artists2 = [{"name": "Amro_lyrics", "score": -0.8722083049697901, "gang": "Gang X"}, {"name": "Asco_lyrics", "score": -0.9674455127373345, "gang": "Gang X"}, {"name": "Baby Mane_lyrics", "score": -1.1982586041952334, "gang": "Gang X"}, {"name": "Balistik_lyrics", "score": -1.0501250733986636, "gang": "Gang X"}, {"name": "Bellzey_lyrics", "score": -1.2192696438100317, "gang": "Gang X"}, {"name": "BG_lyrics", "score": -1.0920886798559482, "gang": "Gang X"}, {"name": "Birdy_lyrics", "score": -0.3938121699545901, "gang": "Gang X"}, {"name": "Bones_lyrics", "score": -0.9314177376459825, "gang": "Gang X"}, {"name": "Boss Belly_lyrics", "score": -1.2454951915682773, "gang": "Gang X"}, {"name": "Box12_lyrics", "score": -1.1993239802986657, "gang": "Gang X"}, {"name": "C-Rose_lyrics", "score": 0.3079609687444194, "gang": "Gang X"}, {"name": "C1_lyrics", "score": -1.1447393894200364, "gang": "Gang X"}, {"name": "Capo_lyrics", "score": -0.944880488176354, "gang": "Gang X"}, {"name": "Cdai_lyrics", "score": 0.7737653524505427, "gang": "Gang X"}, {"name": "Ceaze_lyrics", "score": -1.0901102879859095, "gang": "Gang X"}, {"name": "CJ_lyrics", "score": -1.1177621151701105, "gang": "Gang X"}, {"name": "Crash22_lyrics", "score": -1.0426973472620507, "gang": "Gang X"}, {"name": "Creepz_lyrics", "score": -0.27694021962729964, "gang": "Gang X"}, {"name": "Crimer_lyrics", "score": 0.875806041168139, "gang": "Gang X"}, {"name": "CRose_lyrics", "score": 0.2718683764141263, "gang": "Gang X"}, {"name": "Deep Green_lyrics", "score": -0.8735723077115056, "gang": "Gang X"}, {"name": "Django_lyrics", "score": -0.3800749373441827, "gang": "Gang X"}, {"name": "Dotty_lyrics", "score": 0.7778773868905077, "gang": "Gang X"}, {"name": "DV_lyrics", "score": -1.1660314584752782, "gang": "Gang X"}, {"name": "Ejay_lyrics", "score": -0.8763720758834721, "gang": "Gang X"}, {"name": "Farmer12_lyrics", "score": -1.1485998601269234, "gang": "Gang X"}, {"name": "Fredo_lyrics", "score": -1.229922660142181, "gang": "Gang X"}, {"name": "Frisco_lyrics", "score": 0.3795239902510389, "gang": "Gang X"}, {"name": "GeeYou_lyrics", "score": 0.6273795057716615, "gang": "Gang X"}, {"name": "Germs_lyrics", "score": -1.0813528799861412, "gang": "Gang X"}, {"name": "Ghostface600_lyrics", "score": 0.38981323847051685, "gang": "Gang X"}, {"name": "Gripz_lyrics", "score": -1.0432085865512652, "gang": "Gang X"}, {"name": "Hector_lyrics", "score": -0.21548640232735156, "gang": "Gang X"}, {"name": "J Styles_lyrics", "score": -1.268539411635757, "gang": "Gang X"}, {"name": "Jah Vinci_lyrics", "score": -0.8465274703125367, "gang": "Gang X"}, {"name": "Jeezy_lyrics", "score": 0.7593556820719023, "gang": "Gang X"}, {"name": "Jiggz_lyrics", "score": -1.1044385885341366, "gang": "Gang X"}, {"name": "JLoud_lyrics", "score": -0.8394186345290008, "gang": "Gang X"}, {"name": "Jojo_lyrics", "score": -0.9454157260922069, "gang": "Gang X"}, {"name": "Joobz_lyrics", "score": -1.230550254194014, "gang": "Gang X"}, {"name": "K Money_lyrics", "score": -1.1527547217579053, "gang": "Gang X"}, {"name": "K Rose_lyrics", "score": -1.1191706961383834, "gang": "Gang X"}, {"name": "K6ix_lyrics", "score": -0.8723844562315234, "gang": "Gang X"}, {"name": "Kaos_lyrics", "score": 0.8383264725098568, "gang": "Gang X"}, {"name": "Kavelly_lyrics", "score": -1.0969830264029616, "gang": "Gang X"}, {"name": "KayyKayy_lyrics", "score": -1.2731379651823915, "gang": "Gang X"}, {"name": "Kayze_lyrics", "score": -1.0597842982182777, "gang": "Gang X"}, {"name": "KB_lyrics", "score": 0.8478646853756819, "gang": "Gang X"}, {"name": "Kemzi_lyrics", "score": -1.1433060668828614, "gang": "Gang X"}, {"name": "Kojo Funds_lyrics", "score": 0.8964143599009393, "gang": "Gang X"}, {"name": "Kraze_lyrics", "score": 0.9062840466355562, "gang": "Gang X"}, {"name": "Latts_lyrics", "score": -1.2421883636342794, "gang": "Gang X"}, {"name": "LD_lyrics", "score": 0.18491941494548136, "gang": "Gang X"}, {"name": "Lil Dee_lyrics", "score": -1.0654923742356972, "gang": "Gang X"}, {"name": "Loski_lyrics", "score": -0.6638561203953912, "gang": "Gang X"}, {"name": "LP_lyrics", "score": -0.8373993292217929, "gang": "Gang X"}, {"name": "Lucii_lyrics", "score": -0.5883929897059932, "gang": "Gang X"}, {"name": "Lzz_lyrics", "score": -0.9917257203928767, "gang": "Gang X"}, {"name": "Maestro_lyrics", "score": 0.7348865544712706, "gang": "Gang X"}, {"name": "Major_lyrics", "score": 0.8271516716986217, "gang": "Gang X"}, {"name": "Mickz_lyrics", "score": 0.9477003938464195, "gang": "Gang X"}, {"name": "MizOrMac_lyrics", "score": -1.0019951642070613, "gang": "Gang X"}, {"name": "MK_lyrics", "score": -1.1241855040936422, "gang": "Gang X"}, {"name": "MoStack_lyrics", "score": -1.030493103337998, "gang": "Gang X"}, {"name": "Muscle Gotti_lyrics", "score": -0.8973261441415941, "gang": "Gang X"}, {"name": "Nines_lyrics", "score": -0.9320367380773559, "gang": "Gang X"}, {"name": "Oboy_lyrics", "score": 0.8220592304801992, "gang": "Gang X"}, {"name": "OnDrills_lyrics", "score": -1.2658385549658693, "gang": "Gang X"}, {"name": "Plato_lyrics", "score": 0.4883219910905415, "gang": "Gang X"}, {"name": "Poky_lyrics", "score": 0.7589624893023638, "gang": "Gang X"}, {"name": "Poppy_lyrics", "score": 0.648502894293615, "gang": "Gang X"}, {"name": "Q2T_lyrics", "score": -1.2368894539891266, "gang": "Gang X"}, {"name": "Rasta_lyrics", "score": -0.6655497383325704, "gang": "Gang X"}, {"name": "Ratlin_lyrics", "score": -0.9280348492788312, "gang": "Gang X"}, {"name": "Recky_lyrics", "score": -0.8219528363809353, "gang": "Gang X"}, {"name": "Rellz_lyrics", "score": -1.2100017847607103, "gang": "Gang X"}, {"name": "Remz_lyrics", "score": -1.0193681184159005, "gang": "Gang X"}, {"name": "Rhyno_lyrics", "score": 0.5846582139384666, "gang": "Gang X"}, {"name": "Ridz_lyrics", "score": 0.0021257787617592894, "gang": "Gang X"}, {"name": "RK_lyrics", "score": -0.132487285727678, "gang": "Gang X"}, {"name": "Ronzo_lyrics", "score": -1.1795518719645859, "gang": "Gang X"}, {"name": "Ruger_lyrics", "score": 0.9496515438518762, "gang": "Gang X"}, {"name": "Ryder_lyrics", "score": -1.2715632899979243, "gang": "Gang X"}, {"name": "Rzo Munna_lyrics", "score": -1.0641664561369302, "gang": "Gang X"}, {"name": "S Wavey_lyrics", "score": -0.9564200718472233, "gang": "Gang X"}, {"name": "Sav12_lyrics", "score": -1.1492165599595585, "gang": "Gang X"}, {"name": "Scratchy_lyrics", "score": -1.1118906693968305, "gang": "Gang X"}, {"name": "Screwloose_lyrics", "score": -1.2568380088682565, "gang": "Gang X"}, {"name": "Screw_lyrics", "score": -0.7446994697997273, "gang": "Gang X"}, {"name": "Skeamer_lyrics", "score": -1.11631463758951, "gang": "Gang X"}, {"name": "Skrapz_lyrics", "score": -1.2048633280708676, "gang": "Gang X"}, {"name": "Skrilla_lyrics", "score": -1.0446884753340981, "gang": "Gang X"}, {"name": "Smiley_lyrics", "score": -1.244940402317602, "gang": "Gang X"}, {"name": "Snipez_lyrics", "score": -1.199564542776219, "gang": "Gang X"}, {"name": "Snow_lyrics", "score": -1.2282820805932317, "gang": "Gang X"}, {"name": "Squeeze_lyrics", "score": -0.5530621224195402, "gang": "Gang X"}, {"name": "Stewie_lyrics", "score": -1.017196786240375, "gang": "Gang X"}, {"name": "Sylent_lyrics", "score": -0.8825860954107978, "gang": "Gang X"}, {"name": "T Rose_lyrics", "score": -1.0049747357868397, "gang": "Gang X"}, {"name": "Tel Money_lyrics", "score": -1.068463808183616, "gang": "Gang X"}, {"name": "Telly_lyrics", "score": -0.27778620172289864, "gang": "Gang X"}, {"name": "TG Millian_lyrics", "score": -0.9182347412173976, "gang": "Gang X"}, {"name": "Tizzy T_lyrics", "score": -0.08917106580123733, "gang": "Gang X"}, {"name": "Topps_lyrics", "score": -0.4521947548345523, "gang": "Gang X"}, {"name": "Trapfit_lyrics", "score": -1.109199645188365, "gang": "Gang X"}, {"name": "Trapstar Toxic_lyrics", "score": -1.1746137967168804, "gang": "Gang X"}, {"name": "Tremz_lyrics", "score": 0.6618224210552829, "gang": "Gang X"}, {"name": "Trigz_lyrics", "score": 0.9853191489748622, "gang": "Gang X"}, {"name": "Trills_lyrics", "score": -1.1199522768795496, "gang": "Gang X"}, {"name": "Trizzy Trapz_lyrics", "score": -1.025035670764886, "gang": "Gang X"}, {"name": "TSav_lyrics", "score": -1.187383989977731, "gang": "Gang X"}, {"name": "TTP_lyrics", "score": -0.31471898594543546, "gang": "Gang X"}, {"name": "TTrap_lyrics", "score": 0.7217435070013064, "gang": "Gang X"}, {"name": "Twinz_lyrics", "score": -1.1398648305987609, "gang": "Gang X"}, {"name": "TY Sosa_lyrics", "score": -1.160692926028004, "gang": "Gang X"}, {"name": "Unknown T_lyrics", "score": -1.162279420126718, "gang": "Gang X"}, {"name": "V9_lyrics", "score": -1.1526808001234952, "gang": "Gang X"}, {"name": "WorkRate_lyrics", "score": -1.2495918524338845, "gang": "Gang X"}, {"name": "Y.CB_lyrics", "score": -1.1718691111538404, "gang": "Gang X"}, {"name": "Y.Dot_lyrics", "score": -1.1451352888308939, "gang": "Gang X"}, {"name": "Y.S1_lyrics", "score": -0.5264817859792962, "gang": "Gang X"}, {"name": "YG_lyrics", "score": -0.878294508349254, "gang": "Gang X"}, {"name": "YL_lyrics", "score": -0.15102534003087612, "gang": "Gang X"}, {"name": "Young A6_lyrics", "score": -1.2113019863183192, "gang": "Gang X"}, {"name": "Young Dizz_lyrics", "score": -1.0223578706089187, "gang": "Gang X"}, {"name": "Yung Bush_lyrics", "score": 0.9461662289065067, "gang": "Gang X"}, {"name": "Yung Squeezy_lyrics", "score": -1.0840817748213363, "gang": "Gang X"}, {"name": "Zico_lyrics", "score": 0.37549550394391956, "gang": "Gang X"}];

    const gangDescriptions = [
        {
            Group: "WGM",
            Description: "22MOB is a Gang located in North London in Wood Green on the Commerce Road. They are a very ac...",
            Allies: "3×3/N9 (Edmonton) , TPL22-15thSide(Turnpike Lane) , 6th (Beckton),37OJB (Clapham Junction)",
            Opps: "NPK (Tottenham) , OFB (Tottenham) , N1 (Hoxton) , 9thStreet (Graham Park) , APY/Skengfield (Enfield)...",
        },
        {
            Group: "3×3 GANG",
            Description: "3×3 Gang is a Renegade Set located in Edmonton Green on the Notorious Bounces Road. They are ...",
            Allies: "22 (Wood Green) , 6th (Beckton) , TPL22-15thSide (Turnpike Lane), 37OJB (Clapham Junction)",
            Opps: "NPK (Tottenham) , OFB (Tottenham) , N15 (South Tottenham) , 8th (Hornsey) , N1 (Hoxton), ...",
        },
        {
            Group: "OFB",
            Description: "OFB (Original Farm Blocks) is the name of the current gang based on the Broadwater Farm Estate...",
            Allies: "Tiverton (N15), ZT (London Fields), A-Team (Islington), Hoxton Boys (Hoxton), 8th (Hornsey)",
            Opps: " 22 (Wood Green), 3×3/ #900 (Edmonton), NPK (Tottenham), TPL8/15-22 (Turnpike Lane)",
        },
        {
            Group: "SKENGFIELD/AP",
            Description: "AP are a gang from the Albany Park section of Enfield, EN3, north London. They also go by the...",
            Allies: "NPK (Tottenham), TPL/8 (Turnpike Lane), LTH/ 86 (Lower Tulse Hill), HBrothers (Hoxton), 8th (Hornsey), Mali Strip (Waltham Forest), 12/ OM (Manor Park), P Block (Ponders End)",
            Opps: "3×3 (Edmonton), 9 (Edmonton), 22 (Wood Green), TPL/15-22 (Turnpike Lane)",
        }
    ];

    const xScale = () => -2; // Assuming 'score' is what you want to plot on x-axis
    const yScale = () => 2; // Static value for y-axis, adjust as needed

    const slangDescriptions = [
        {
            Slang: "1 bill",
            Meaning: "Quantity of money",
        },
        {
            Slang: "back out",
            Meaning: "To draw a weapon",
        },
        {
            Slang: "bagged",
            Meaning: "Caught by the police",
        },
        {
            Slang: "bagging",
            Meaning: "Stabbing in the lower body",
        },
        {
            Slang: "bally",
            Meaning: "Short for balaclava (mask)",
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

            <p>London has had a long history of gang culture. In current times, drill music is one of the most prominent modes of expression of related activities. In this genre, rivalry, violence, and drugs are no uncommon topics. In this research, we attempt to shine light on how the current state of London's gang culture is expressed through drill music by using several OSINT techniques, as part of Bellingcat's Fall 2023 Hackathon in Amsterdam.</p>

            <p>This map shows how distinct drill groups are present throughout London, as based on data published by several archives of the drill scene, as produced by fans who heavily discuss current activities in the scene.</p>

            <div className="wide-map-component">
                <Map/>
            </div>

            <p>In the table below, a list of examples of groups, their members and opponents showcases to what extent these rivalries are present in the environment.</p>


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

            <p>This network diagram shows the extent to which released songs are distributed. The songs are indicated as nodes, representing the group of origin by colour, and are linked to other songs based on the topics entailed in its content. These topics have been calculated by an analysis of the frequency of words.</p>

            <div className="wide-component">
                <h2>Song Similarity</h2>
                {sData && <NetworkDiagram data={sData}/>}
            </div>

            <p>In these songs, it is not uncommon for authors to use slang terms to hide the actual meaning of their words. For outsiders, this effectively conceals the actual content. For people familiar with the culture, it provides a sense of community. Fans online have dedicatedly build multiple dictionaries in which these terms are detailed, which allows us to see the cryptic messages. Below are some of these definitions.</p>

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

            <p>When analysing the original content of a selection of songs, it is clear to see that the sentiment leans towards the negative side of the axis. However, when a dictionary of common slang is used to translate the content, it becomes even more apparent that artists active in the scene appear to hide the meaning of their words. When analysing the sentiment of lyrics translated to common English, the result are even more skewed towards the negative side.</p>

            <div className="wide-component">
                <h2>Sentiment of Language in Lyrics</h2>
                <h4>Before slang encoding:</h4>
                <SwarmChart data={artists1} xScale={-3} yScale={3}/>
                <h4>After slang encoding:</h4>
                <SwarmChart data={artists2} xScale={-3} yScale={3}/>
            </div>


            <footer>
                <a href="https://github.com/a-jiwa/investigating-gangs-with-drill-music/tree/main">Click here to find the tools</a>
            </footer>
        </div>
    );
};

export default ArticlePage;
