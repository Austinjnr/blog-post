const Navbar = () => {
    return (  
        <nav className="navbar">
           {/*<img src="https://res.cloudinary.com/apideck/image/upload/v1615417853/icons/nike.jpg" alt="nike logo"></img>*/}
            <h1>Nike</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style= {{
                    color: 'white',
                    backgroundColor: '#000000d3',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;