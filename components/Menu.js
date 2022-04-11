
const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">DW CURSOS</a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/cursos" className="menu-btn">Cursos</a></li>
                    <li><a href="/sobre" className="menu-btn">Sobre</a></li>                    
                    <li><a href="/contato" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-bars"></i>
                    {/*Menu*/} {/* o icone esta subistitundo o menu */}
                </div>
            </div>
            
        </nav>
    </div>
);

export default Menu;