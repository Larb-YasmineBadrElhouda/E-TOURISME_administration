import "./list.css"
import SideMenu from "../../components/SideMenu"
import Navbar from "../../components/NavBar"
import AppFooter from "../../components/AppFooter"





const List = () => {
    return (
        <div className="list">
            <SideMenu />
            <div className="listContainer">
                <Navbar />
                <AppFooter />


            </div>
        </div>
    )
}

export default List