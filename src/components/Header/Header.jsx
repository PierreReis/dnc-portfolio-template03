import './Header.css'

function Header() {
    return (
        <>
            <div className="container">
                <header>
                    <nav>
                        <ul className='d-flex'>
                            <a href="#projects">
                                <li>Projetos</li>
                            </a>
                            <a href="#blog">
                                <li>Blog</li>
                            </a>
                            <a href="#contact">
                                <li>Contato</li>
                            </a>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header