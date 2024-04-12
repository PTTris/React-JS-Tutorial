import videoHomePage from "../../assets/video-homepage.mp4"

const HomePage = (props) => {
   return (
      <div className="homepage-container">
         <div className="homepage-video">
            <video loop autoPlay muted >
               <source src={videoHomePage} type="video/mp4"/>
            </video>
            <div className="homepage-video-content">
               <p className="title">There's a better way to ask</p>
               <p className="description">
                  You don't want to make a boring form. And your audience 
                  won't answer one. Create a typeform instead---and make everyone happy.
               </p>
            <button className="btnGetStart">Get's Started</button>
         </div>
         </div>
         
      </div>
   )
};

export default HomePage;