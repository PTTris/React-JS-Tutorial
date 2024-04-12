import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, Link} from "react-router-dom";

const App = () => {
   return (
      <div className="app-container">
         <div className="header-container">
            <Header/>
         </div>
         <div className="main-container">
            <div className="sidebar-container">

            </div>
            <div className="app-content">
               <Outlet></Outlet>
            </div>
         </div>
         <div className="footer-container">
            <Footer/>
         </div>
      </div>
   );
};

export default App;
