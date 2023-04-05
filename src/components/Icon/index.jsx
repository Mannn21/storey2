import { Icon } from "../../list/NavbarIcon.js";
import { NavbarIcon } from "./styled.js";
import { Link } from "react-router-dom";


const IconWrapper = () => {
    return (
        Icon.map((item, index) => {
            return (
                <Link key={index} to={item.location}>
                    <NavbarIcon>
                        {item.icon}
                    </NavbarIcon>
                </Link>
            )
        })
    )
}

export default IconWrapper