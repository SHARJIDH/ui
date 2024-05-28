/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { information } from "../../../utils/data"
import Card from "../Card"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Slide.css"


export default function Slide() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="slide-container"
        >
            <div className="text-content">
                <motion.h1>
                    India's <i>First</i> DIY <br /> Trip Planner
                </motion.h1>
                <motion.p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure minus veritatis fuga distinctio, mollitia ducimus ex praesentium ut autem doloremque.
                </motion.p>
            </div>
            <div className="slider-content">
                <Slider {...settings}>
                    {
                        information.map((info) => {
                            return <Card key={info.heading} heading={info.heading} content={info.content} />
                        })
                    }
                </Slider>
            </div>
        </motion.div>
    )
}
