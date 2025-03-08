import './Header.css'

function Header() {
    return (
        <>
            <div className="container">
                <header>
                    <nav>
                        <ul className='d-flex'>
                            <li>Projetos</li>
                            <li>Blog</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header