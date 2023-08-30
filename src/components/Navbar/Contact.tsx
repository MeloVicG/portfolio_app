import linkedinlogo from '../../images/linkedinlogo.png'
import '../../styles/Contact.scss'

const Contact = () => {
    return (
        <div className='container'>
            <div className="contact-box-one">
                <p style={{fontFamily: 'Permanent Marker', fontSize: "2em"}}>
                    {/* This portfolio is still in progress. I am currently working on advancing my Java skills as well as learning Kotlin and other React Libraries such as react native */}
                </p>
                    I am currently Working on a project designed for real estate funding. Utilizing Java, React, and Postgresql. This project is intended to help the realestate industry and challenge myself to push far into solving every problem I could possilby run into.
                    So far I have created the frontend work for visualization and presentation along with JWT authentication (nightmare).
                <br />
                <br />
                <h6><a href="https://gbeidevelopmentsolutions.netlify.app/blueprints">G-BEI development Solutions</a></h6>
                <p style={{fontFamily: 'Permanent Marker', fontSize: "2em"}}>you can reach me now at LinkedIn</p>
                <a href="https://www.linkedin.com/in/victor-gargurevich-103026155/" style={{textDecoration:"none"}}><img src={linkedinlogo} alt="" style={{height:"3em", width:"3em"}}/></a>
            </div>
        </div>
    )
}

export default Contact