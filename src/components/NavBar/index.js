import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                </div>
                <div className="items">

                    <div className="item">
                    Stark : 4snow@gmail.com
                    </div>
                    <div className="item">
                        <AccountCircleIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
//<div className="item">
//<ChatBubbleOutlineOutlinedIcon className="icon" />
//<div className="counter">2</div>
//</div>