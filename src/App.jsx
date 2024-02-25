import Header from './components/Header';
import Video from './components/Video';
import './App.css';
import video1 from './videos/video1.mp4'
import video3 from './videos/video3.mp4'
import video4 from './videos/video4.mp4'
import video5 from './videos/video5.mp4'
import video6 from './videos/video6.mp4'
import video7 from './videos/video7.mp4'
import video8 from './videos/video8.mp4'
import video9 from './videos/video9.mp4'
import video10 from './videos/video10.mp4'


function App() {
//change 1 for vercel
  return (  
    <>
    <Header/>
    <Video src={video1} title='Ocean Stones'/>
    <Video src={video3} title='Moon Night'/>
    <Video src={video4} title='Sunset Sky'/>
    <Video src={video5} title='Mountains'/>
    <Video src={video6} title='Bird'/>
    <Video src={video7} title='Waterfall'/>
    <Video src={video8} title='Lake Cliff'/>
    <Video src={video9} title='Space'/>
    <Video src={video10} title='Empty Road'/>
    </>
    
  )
}

export default App;
