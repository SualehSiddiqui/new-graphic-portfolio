import "./style.css";
import AboutMeImg from "../../Assets/contact-sec.jpeg"
import { Container } from 'react-bootstrap';


const Contact = () => {
    return (
        <div className='contact-sec-main'>
            <Container className='contact-sec-container'>
                <div className='contact-sec-text'>
                    <h1 className='contact-hd-1'>Thank</h1>
                    <h1 className='contact-hd-2'>You!</h1>
                    <p className="text-center">
                        For visiting our website! We truly appreciate <br /> your time and interest.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Contact;