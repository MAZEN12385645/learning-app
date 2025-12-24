import { navItems } from "../constant/data"
import { RiCloseLine , RiMenuLine} from "@remixicon/react"
import { useState } from "react"
const Header = () => {
    const [isOpen ,setIsOpen]= useState(false)
    const handleclick =()=>{
        setIsOpen(!isOpen);
    }
return(
     <header className="  w-full py-5">
    <div className="
    container d  flex items-center justify-between border-b  border-b-white-95 pb-5
    ">  
    {/* logo */}
    <a href="#">
        <img src="/images/logo.png" alt="logo" width={170} height={50} />
    </a>

    {/*mobile menu */}
    <nav className= {`navbar ${isOpen?"active":""}`}>
        
{/*close menu */}

<button className="absolute top-8 right-8" onClick={handleclick}>
    <RiCloseLine size={30}></RiCloseLine>
</button>
{/*list */}
<ul className="space-y-5 text-center">
{navItems.map(item =>(
    <li key={item.id}> <a href="#" className="text-lg font-medium hover:text-orange-50 transtion-colors">{item.label}</a></li>
))}
</ul>

{/*login btn*/}
<button className="bg-orange-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-50/90 transtion-colors
mt-12 max-w-40 w-full
">Login</button>
    </nav>  
    {/*menu btn*/}
    <button className="lg:hidden" onClick={handleclick}>
 <RiMenuLine></RiMenuLine>
    </button>
        
    {/*lg menu */} 
<div className="max-lg:hidden flex  items-ceneter gap-10">
    {/*list */}
<ul className="gap-10 flex ">
{navItems.map(item =>(
    <li key={item.id}> <a href="#" className="hover:text-orange-50 transition-colors font-medium text-lg">{item.label}</a></li>
))}
</ul>
{/* lg login btn*/}
<button className="max-lg:hidden
primary-btn py-1
">Login</button>
</div>
    </div>
   </header>
)
}
export default Header