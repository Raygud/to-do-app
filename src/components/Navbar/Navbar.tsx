import React from 'react'
import styled from 'styled-components'
import { AiOutlineHistory, AiOutlineHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { IoAddCircleOutline,IoSettingsOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";


type Props = {}

const Navbar = (props: Props) => {


  return (
    <CenteredNav >
        <FlexedMenu >
            <MenuIcons><Link to="/"><AiOutlineHome/></Link></MenuIcons>
            <MenuIcons><Link to="/History"><AiOutlineHistory/></Link></MenuIcons>
            <MenuIcons><Link to="/Create"><IoAddCircleOutline/></Link></MenuIcons>
            <MenuIcons><Link to="/Settings"><IoSettingsOutline/></Link></MenuIcons>
            <MenuIcons><Link to="/Logout"><AiOutlineLogout/></Link></MenuIcons>
        </FlexedMenu>
    </CenteredNav>
  )
}

export default Navbar

const FlexedMenu = styled.ul`
display: flex;
justify-content: space-evenly;
`
const CenteredNav = styled.nav`
width: 100vw;
height: 6vh;
position: absolute;
bottom: 0vh;
line-height: 6vh;
`

const MenuIcons = styled.li`
font-size: 10vw;
&:hover{
    color: greenyellow;
}
`