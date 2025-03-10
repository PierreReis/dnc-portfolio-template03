import './Home.css'

// COMPONENTS
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'

// ASSETS
import Project1 from '../assets/project-1.svg'
import Project2 from '../assets/project-2.svg'
import Project3 from '../assets/project-3.svg'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="presentation">
                    <h1>Olá, eu sou Pierre Desenvolvedor Front-End</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Button>Download resumo</Button>
                </div>
            </div>
            <div id='blog' className="container">
                <div className="blog-section">
                    <p>Blog</p>
                    <div className='blog-grid'>
                        <div>
                            <h3>Making a design system from scratch</h3>
                            <span>12 Feb 2030</span>
                            <span>Design, Pattern</span>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div>
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <span>12 Feb 2030</span>
                            <span>Figma, Icon Design</span>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='projects' className="container project-section">
                <p>Projetos</p>
                <div className="d-flex project-container">
                    <div><img src={Project1}/></div>
                    <div className='project-info'>
                        <h2>Designing Dashboards</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="d-flex project-container">
                    <div><img src={Project2}/></div>
                    <div className='project-info'>
                        <h2>Vibrant Portraits of 2020</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="d-flex project-container">
                    <div><img src={Project3}/></div>
                    <div className='project-info'>
                        <h2>36 Days of Malayalam type</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            <div id='contact' className='container'>
                <Footer/>
            </div>
        </>
    )
}

export default Home