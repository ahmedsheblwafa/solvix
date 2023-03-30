import './Contact.styles.scss'

export default function Contact() {
    return (
        <>
            <section id="contact" class="map_sec">
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
                                        allowfullscreen
                                        aria-hidden="false"
                                        tabindex="0"
                                        title="location"
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
