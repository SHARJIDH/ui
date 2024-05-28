
import { motion } from 'framer-motion';
import './Upper.css';
import Shape from '../Shape';
import Grid from '../grid/Grid';

export default function Upper() {
    return (
        <motion.div
            className="upper-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Grid />
            <div className="upper-text">
                <Shape className="shape" />
                <h2>Explore The <br />World With Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda at, fugiat repudiandae in omnis ab rem unde quibusdam, temporibus deleniti minus provident velit aliquid natus accusamus perferendis, perspiciatis quos dolorem molestias! Sapiente, temporibus ratione dolor quas nam, iure perspiciatis quam sit, fuga beatae deserunt voluptatum asperiores in. Atque tempore iste impedit facilis, sint reiciendis amet alias eos modi porro sequi natus cum adipisci. Minus, veniam? Magnam temporibus ad asperiores architecto? Beatae, ex? Blanditiis dolorem voluptate ad enim laudantium alias error labore sint non esse nihil magni praesentium eligendi architecto provident, eos autem, fugiat maiores? Omnis error officia cum illo voluptate, sed eaque temporibus a non tempore quisquam beatae suscipit odit itaque laudantium eligendi, dolorum adipisci doloremque. Repellendus nemo nesciunt inventore necessitatibus placeat voluptas distinctio?</p>
                <motion.button
                    whileHover={{ scale: 1.2, backgroundColor: '#006400' }}
                    transition={{ duration: 0.3 }}
                    className="contact-button"
                >
                    Contact us
                </motion.button>
            </div>
        </motion.div>
    );
}
