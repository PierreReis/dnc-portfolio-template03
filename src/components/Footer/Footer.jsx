import './Footer.css'

//ASSETS
import FacebookLogo from '../../assets/logo-facebook.svg'
import InstagramLogo from '../../assets/logo-instagram.svg'
import TwitterLogo from '../../assets/logo-twitter.svg'
import LinkedinLogo from '../../assets/logo-linkedin.svg'

function Footer() {
    return (
        <>
            <div className="container">
                <footer>
                    <div className='d-flex contacts'>
                        <div><img src={FacebookLogo}/></div>
                        <div><img src={InstagramLogo}/></div>
                        <div><img src={TwitterLogo}/></div>
                        <div><img src={LinkedinLogo}/></div>
                    </div>
                    <p>Copyright ©2030 All rights reserved </p>
                </footer>
            </div>
        </>
    )
}

export default Footer