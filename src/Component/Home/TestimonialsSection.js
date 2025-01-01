import React from 'react';
import { Carousel } from 'react-bootstrap';

const TestimonialsSection = (props) => {
    let featureData = (props?.data || [])?.find(ele => ele?.type == "testimonial")?.multipleContent
    return (
        <section className="testimonials-section testmonials_sec section-padd gifsection mt-5" style={{ backgroundColor: "#fff3e0" }}>
            <div className="container">
                <div className="row">
                    <div class="heading-wrap">
                        <h2>{"Our Testimonials"}</h2>
                        <p>Our Testimonials Grow business by partnering with us.</p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-lg-12">
                        <Carousel>
                            {(featureData || []).map((testimonial, index) => (
                                <Carousel.Item key={index} className='my-5 px-5'>
                                    <div className="img-box text-center">
                                        <img
                                            src={testimonial?.banner?.link}
                                            alt={testimonial.heading}
                                            style={{ maxWidth: "150px", borderRadius: "50%" }}
                                        />
                                    </div>
                                    <div className="testimonial text-center">
                                        <p className="about-style" dangerouslySetInnerHTML={{ __html: testimonial?.content }}></p>
                                    </div>
                                    <h1 className="text-center">{testimonial.heading}</h1>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
