import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { motion } from 'framer-motion'
import Slide from './components/slide/Slide'
import Upper from "./components/upper/Upper";
// import Grid from "./components/grid/Grid";

function App() {
  return (
    <motion.div>
      <Upper />
      <Slide />
      {/* <Grid /> */}
    </motion.div>
  )
}

export default App
