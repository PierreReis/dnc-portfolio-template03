import './Home.css'

// COMPONENTS
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'

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
            <div className="container">
                <div className="blog-section">
                    <p>Blog</p>
                    <div className='blog-grid'>
                        <div>
                            <h2>Making a design system from scratch</h2>
                            <span>12 Feb 2030</span>
                            <span>Design, Pattern</span>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div>
                            <h2>Creating pixel perfect icons in Figma</h2>
                            <span>12 Feb 2030</span>
                            <span>Figma, Icon Design</span>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home