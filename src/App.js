import './App.css';
import Alerts from './Components/Alerts';
import DownloadApp from './Components/DownloadApp';
import FirstCard from './Components/FirstCard';
import Footer from './Components/Footer';
import FourthCard from './Components/FourthCard';
import Header from './Components/Header';
import MyMarquee from './Components/MyMarquee';
import Navbaar from './Components/Navbaar';
import News from './Components/News';
import SecondCard from './Components/SecondCard';
import ThirdCard from './Components/ThirdCard';

function App() {
  const navItems = ["home", "features", "pricing", "blog", "contact"];
  

  return (
    <>
    <Navbaar navItems={navItems}/>
     <Header/>
     <MyMarquee/>   
     {/* horizontal errr */}
     <FirstCard/>
     <SecondCard/>
     <ThirdCard />
     {/* <FourthCard/> */}
     {/* <Alerts/> */}
     {/* <DownloadApp/> */}
     {/* <News/> */}
     {/* <Footer/> */}

    </>
  );
}

export default App;
