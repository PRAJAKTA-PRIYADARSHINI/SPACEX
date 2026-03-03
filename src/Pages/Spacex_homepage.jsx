import Footerspace from "../components/footer/Footerspace"
import Nav from "../components/navbar/Nav"
import Navlist from "../components/navbar/Navlist"
import Websection from "../components/sections/Websection"

const Spacex_homepage=()=>{
    return(
        <div className="homepage">
          <Nav/> 
          <Websection/>
          <Footerspace/>
        </div>
    )
}
export default Spacex_homepage