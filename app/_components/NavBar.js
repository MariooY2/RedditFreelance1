function NavBar() {
    return (
        <nav className=" text-black p-4 ">
           
                
                <ul className="flex justify-center">
                    <li className="mx-4 hover:text-gray-500">
                        <a href="#home">Home</a>
                    </li>
                    <li className="mx-4 hover:text-gray-500 mr-20">
                        <a href="#services">Services</a>
                    </li>
                    <span className="font-bold ">ColorStone</span>
                    <li className="mx-4 hover:text-gray-500 ml-20">
                        <a href="#about">About Us</a>
                    </li>
                    <li className="mx-4 hover:text-gray-500">
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
           
        </nav>
    );
}

export default NavBar;
