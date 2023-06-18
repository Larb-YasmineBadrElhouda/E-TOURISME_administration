import Navbar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import "./new.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";


const New = () => {
    const [placeName, setPlaceName] = useState('');
    const [Description, setDescription] = useState('');
    
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [category, setCategory] = useState('');
    const [theme, setTheme] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [file, setFile] = useState("");
    const [wilaya, setwilaya] = useState('');
   
const Navigate = useNavigate();


    const wilayas = [
        'Alger',
        'Chlef',
        'Laghouat',
        'Oum El Bouaghi',
        'Batna',
        'Béjaïa',
        'Biskra',
        'Béchar',
        'Blida',
        'Bouira',
        'Tamanrasset',
        // Add more wilayas as needed
    ];
    const themes = [
        'Patrimoine historique ',
        'Nature et paysages',
        'Culture et traditions',
        'Gastronomie',
        'Shopping',
        'Bien-être et détente',
    ];


    

    const [transportation, setTransportation] = useState('');

   
    function handleSubmit (event)  {
        event.preventDefault();
        axios.post('http://localhost:8081/creatplace',{placeName,file,Description,openingTime,transportation,longitude,latitude,closingTime,category,theme,wilaya})
        .then(res => {
            console.log("hhhhhhhhhhhhhhhhhhhhh",res);
            Navigate('/home/posts')
        }).catch(err => console.log(err))
        // Perform your desired action with the form data
        console.log('Place Name:', placeName);
        console.log('Opening Time:', openingTime);
        console.log('Closing Time:', closingTime);
        console.log('Transportation:', transportation);
        console.log('Category:', category);
        console.log('Description:', Description);
        
        console.log('theme:', theme);
        console.log('longitude:', longitude);
        console.log('latitude:', latitude);
        console.log('file:', file);
        console.log('wilaya:',wilaya);
        // Reset form fields
        setPlaceName('');
        setOpeningTime('');
        setClosingTime('');
        setTransportation('');
        setCategory('');
        setDescription('');
        
        setTheme('');
        setLongitude('');
        setLatitude('');
        setFile('');
        setwilaya('');
        

    };




    return (
        <div className="new">
            <SideMenu />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>AJOUTER UN NOUVEAU LIEU </h1>
                </div>
                <div className="bottom">

                    <div className="left">
                        <img
                            src={file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    image : <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>

                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />

                            </div>
                            <div className="formInput">
                                <label htmlFor="placeName">Place Name:</label>
                                <input
                                    type="text"
                                    id="placeName"
                                    value={placeName}
                                    onChange={e => setPlaceName(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="Description">Description</label>
                                <input
                                    type="text"
                                    id="Description"
                                    value={Description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>


                           
                            <div className="formInput">
                                <label htmlFor="longitude">Longitude</label>
                                <input
                                    type="text"
                                    id="longitude"
                                    value={longitude}
                                    onChange={e => setLongitude(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="latitude">Latitude</label>
                                <input
                                    type="text"
                                    id="latitude"
                                    value={latitude}
                                    onChange={e => setLatitude(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="transportation">Transportation</label>
                                <input
                                    type="text"
                                    id="transportation"
                                    value={transportation}
                                    onChange={e => setTransportation(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="category">Category:</label>
                                <input
                                    type="text"
                                    id="category"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="theme">Theme:</label>
                                <select value={theme} onChange={e => setTheme(e.target.value)}>
                                    <option value="">select a theme </option>
                                    {themes.map((theme) => (
                                        <option key={theme} value={theme}>
                                            {theme}
                                        </option>
                                    ))}
                                </select>
                            </div >
                            <div className="formInput">
                                <label htmlFor="wilaya">wilaya:</label>
                                <select value={wilaya} onChange={e => setwilaya(e.target.value)}>
                                    <option value="">select a WILAYA </option>
                                    {wilayas.map((wilaya) => (
                                        <option key={wilaya} value={wilaya}>
                                            {wilaya}
                                        </option>
                                    ))}
                                </select>
                            </div >
                            
                            <div className="formInput">
                                <label htmlFor="openingTime">Opening Time:</label>
                                <input
                                    type="text"
                                    id="openingTime"
                                    value={openingTime}
                                    onChange={e => setOpeningTime(e.target.value)}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="closingTime">Closing Time:</label>
                                <input
                                    type="text"
                                    id="closingTime"
                                    value={closingTime}
                                    onChange={e => setClosingTime(e.target.value)}
                                />
                            </div>


                            <button>SEND</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default New;