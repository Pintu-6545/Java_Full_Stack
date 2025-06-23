import Header from '../Reuse/Header';
import Footer from '../Reuse/Footer';

export default function Contact() {
    return (
        <div>
            <Header />
            <section className="mb-4 container">
                <h2 className="h1-responsive font-weight-bold text-center my-4 mb-4">Contact</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label htmlFor="name" className>Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label htmlFor="email" className>Your email</label>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label htmlFor="subject" className>Subject</label>
                                    </div>
                                </div>
                            </div>
                            {/*Grid row*/}
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                                        <label htmlFor="message">Your message</label>
                                    </div>
                                </div>
                            </div>
                            {/*Grid row*/}
                        </form>
                        <div className="text-center text-md-left">
                            <a data-mdb-ripple-init className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div className="status" />
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x" />
                                <p>Nikol, Ahmedabad, 380024, INDIA</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x" />
                                <p>+ 91 635 552 2512</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x" />
                                <p>pizzahut@pizzah.com</p>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}
                </div>
            </section>
            <div className="container mt-4">
                <div className="mb-5">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.571751788744!2d72.65292014915194!3d23.0460515248283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b9ef272537%3A0x90df59768cc03d80!2sPizza%20Hut%20%7C%20Char%20Rasta%2C%20Ahmedabad!5e0!3m2!1sen!2sus!4v1750343646979!5m2!1sen!2sus"
                        style={{ width: "100%", height: "400px", border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                
            </div>
            {/*Section: Contact v.2*/}

            <Footer />
        </div>
    );
}
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.571751788744!2d72.65292014915194!3d23.0460515248283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b9ef272537%3A0x90df59768cc03d80!2sPizza%20Hut%20%7C%20Char%20Rasta%2C%20Ahmedabad!5e0!3m2!1sen!2sus!4v1750343646979!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>