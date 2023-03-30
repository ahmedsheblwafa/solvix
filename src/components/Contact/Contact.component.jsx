import './Contact.styles.scss'

export default function Contact() {
    return (
        <>
            <section class="contact_us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="contact_inner">
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="contact_form_inner">
                                            <div class="contact_field">
                                                <h3>Contatc Us</h3>
                                                <p>
                                                    Feel Free to contact us any time. We will get back to you as soon as
                                                    we can!.
                                                </p>
                                                <input type="text" class="form-control form-group" placeholder="Name" />
                                                <input
                                                    type="text"
                                                    class="form-control form-group"
                                                    placeholder="Email"
                                                />
                                                <textarea
                                                    class="form-control form-group"
                                                    placeholder="Message"
                                                ></textarea>
                                                <button class="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="right_conatct_social_icon d-flex align-items-end">
                                            <div class="socil_item_inner d-flex">
                                                <li>
                                                    <a href="#">
                                                        <i class="fab fa-facebook-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-headset"></i>
                                        <span>+91 8009 054294</span>
                                    </div>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-envelope-open-text"></i>
                                        <span>info@flightmantra.com</span>
                                    </div>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-map-marked-alt"></i>
                                        <span>
                                            1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="map_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="map_inner">
                                <h4>Find Us on Google Map</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi
                                    assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut
                                    voluptas hic dolorem sequi ab porro, quia error.
                                </p>
                                <div class="map_bind">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7823.265791390514!2d30.005299515803845!3d31.276632834577246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d0650401faf5%3A0x2bc5c9286bd1662c!2s453%20El-Horeya%2C%20Al%20Mandarah%20Bahri%2C%20Montaza%202%2C%20Alexandria%20Governorate%205526043!5e0!3m2!1sen!2seg!4v1680191767250!5m2!1sen!2seg"
                                        width="100%"
                                        height="450"
                                        frameborder="0"
                                        style={{ border: '0' }}
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
