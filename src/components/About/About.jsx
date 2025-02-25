import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";

const About = () => {

  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.Sohaib.jpg} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>I'm <span className='text-dark'>Sohaib</span></h3>
                        <p className='text mx-auto'><br/>An Aspiring Software Engineer Based in Karachi, Pakistan.
                            <br/><br/>I'm currently learning and exploring new skills and technologies to stay up-to-date with modern development practices. </p>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
  )
}

export default About