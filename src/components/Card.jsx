import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FaPen } from "react-icons/fa";
export default function Card({ heading, content }) {
    const cardStyle = {
        width: '280px',
        height: '350px',
        borderRadius: '10px',
        backgroundColor: 'rgba(171, 167, 167, 0.3)',
        border: '1px solid rgba(255, 255, 255)',
        // color: 'black',
        margin: '10px',
        padding: '10px',
        textAlign: "left",
    };
    const font = {
        fontSize: "15px",
        padding: '10px',
    }
    const pen = {
        padding: '10px',
        backgroundColor: 'rgba(171, 167, 167, 0.3)',
        border: '1px solid rgba(255, 255, 255)',
        borderRadius: '50%',
        height: '15px',
        width: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'white',
        textAlign: "left",
    }
    return (
        <motion.div className='card' style={cardStyle}>
            <motion.div style={pen}>
                <FaPen style={{ fontSize: '20px', color: 'white' }} />
            </motion.div>

            <motion.h1 className='head'>{heading}</motion.h1>
            <motion.p className='content' style={font}>{content}</motion.p>
        </motion.div>
    )
}

Card.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
