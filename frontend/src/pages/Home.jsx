import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.jpg'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featuredTourList/FeaturedTourList'
import MasonryImageGallery from '../components/ImageGallery/MasonryImageGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import NewsLetter from '../shared/NewsLetter'

const Home = () => {
    return(
        <>
        <section className='pt-0'>
            <Container className='flex items-center justify-between'>
                <div className="hero__content w-1/2">
                    <div className="hero__subtitle flex items-center">
                        <Subtitle subtitle={'Know before you go'}/>
                        <img src={worldImg} alt="" />
                    </div>
                    <h1>Travel more just not to explore but to make <span className='highlight'>memories</span></h1>
                    <p>
                        Text adedes ipsum dolor sit amet, consectetur adipisicing elit. Id, consectetur ipsam? Quos, sequi temporibus fugit quas veritatis odit ipsa neque soluta expedita sunt aspernatur ea officia doloremque voluptates vel inventor.
                    </p>
                    
                </div>
    
                <div className='flex items-center justify-between w-1/2 p-2'>
                        <div className="hero__img-box">
                            <img src={heroImg}/>
                        </div>
                    
                        <div className="hero__img-box mt-16">
                            <video autoPlay muted loop src={heroVideo}></video>
                        </div>
                    
                        <div className="hero__img-box mt-36">
                            <img src={heroImg02} alt="" />
                        </div>
                </div>
            </Container>
            <SearchBar/>
            <Container className='mt-16'>
                <Row>
                    <Col className='col' lg = "2">
                        <h5 >What we provide</h5>
                        <h2>We provide our best services</h2>
                    </Col>
                <ServiceList/>
                </Row>
            </Container>
            <Container>
                
                <Row>
                    <Col lg="12" className='mb-5'> 
                        <Subtitle subtitle = {'Explore'}/>
                    </Col>
                </Row>
            </Container>
            <div className='flex'>
                <FeaturedTourList/>
            </div>
            <Container className='mt-16'>
                <Row>
                    <Col lg="6" className='mb-5 w-1/2'>
                        <div className='experience__content mb-2'>
                            <Subtitle subtitle = {'Experience'}/>
                            <h2>With our all experience we will serve you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <br />
                                as, quibusdam, voluptate, quia, quod, quos, qu
                            </p>
                        </div>
                        <div className="counter__wrapper flex items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trips</h6>
                            </div>
                            <div className="counter__box">
                                <span>5k</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className='w-1/2'>
                        <div className='experience__img'>
                            <img src={experienceImg} alt="experience" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className=''>
                <div className=''>
                    <Col lg="12" className=''>
                        <Subtitle subtitle={'Gallery'}/>
                        <h5 className='mt-3 mb-4 font-bold text-4xl'>Visit our gallery from our users </h5>
                    </Col>
                    <Col lg="12" className=''>
                        <MasonryImageGallery/>
                    </Col>
                </div>
            </div>
            <div className='mt-16'>
                <div className='flex-column'>
                    <div className='mb-5'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className='testimonial__title mt-4'>What our fans say about us</h2>
                    </div>
                    <div>
                        <Testimonial/>
                    </div>
                </div>
            </div>
        </section>
        <NewsLetter/>
        </>
    )
}
export default Home;