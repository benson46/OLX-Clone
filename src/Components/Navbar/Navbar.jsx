import './Navbar.css'
import OlxLogo from '../../assets/Olx_logo'
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButtonPlus from '../../assets/SellButtonPlus';
import SellButton from '../../assets/SellButton';
const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <div className='OlxLogo'>
                <OlxLogo></OlxLogo>
            </div>

            <div className="placeSearch">
                <Search></Search>
                <input type="text" placeholder='Search City , area or loc...' value="India" />
                <Arrow></Arrow>
            </div>

            <div className="productSearch">
                <div className="input">
                    <input
                    type="text"
                    placeholder="Find car,mobile phone and more..."
                    />
                </div>
                <div className="searchAction">
                    <Search color="#ffffff"></Search>
                </div>
            </div>

            <div className="language">
                <span> ENGLISH </span>
                <Arrow></Arrow>
            </div>

            <div className="loginPage">
                <span>Login</span>
                <hr />
            </div>


            <div className="sellMenu">
                <SellButton></SellButton>
                    <div className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
            </div>
        </div>
     );
}
 
export default Navbar;