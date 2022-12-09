import React, { useContext, useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './menu.css';
import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    // <Menu pointing secondary size="massive" color="teal">
    //   <Menu.Item name={user.username} active as={Link} to="/" />

    //   <Menu.Menu position="right">
    //     <Menu.Item name="logout" onClick={logout} />
    //   </Menu.Menu>
    // </Menu>
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>

      <Menu.Item>
        <Button>Log-in</Button>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal" position="right">
      <Menu.Item>
        <Button primary active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/home">HomePage</Button>
      </Menu.Item>
      <Menu.Menu position="right">
        {/* <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        /> */}
        <Menu.Item>
          <div className='lbut'>
            <Button primary active={activeItem === 'login'}
              name="login"
              onClick={handleItemClick}
              as={Link}
              to="/login">Login</Button>
          </div>

        </Menu.Item>
        {/* <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        /> */}
        {/* <Button primary active={activeItem === 'register'}
        name="register"
        onClick={handleItemClick}
          as={Link}
          to="/register">Register as a manager</Button> */}
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
