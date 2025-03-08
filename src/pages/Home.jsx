import './Home.css'

// COMPONENTS
import Header from '../components/Header'

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="presentation">
                    <h1>Olá, eu sou Pierre Desenvolvedor Front-End</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </>
    )
}

export default Home