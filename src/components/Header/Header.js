import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import './Header.css'
const Header = () => {
    return (
        <>
        <div className = "main-header">
<div className="header-content">
<ul className="left">
    <li>Home</li>
    <li>About</li>
    <li>Category</li>
</ul>
<div className="center">StoreNet</div>
<div className="right">
    <TbSearch/>
    <AiOutlineHeart/>
    <span className='cart-icon' >
        <CgShoppingCart/>
        <span>5</span>
    </span>
</div>
</div>

        </div>

        </>
    )
}
export default Header;