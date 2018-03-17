import React from 'react';

function Header(props){
  console.log(`Nerd = ${props.nerd}`);

  return (
    <nav>
      <div>
        <a href="https://www.kbb.com"
          onClick={props.onClick}
        >
          {props.title}
        </a>
      </div>
    </nav>
  );
}

/*
const Header2 = props => (
  <nav>
    <div>
      <a href="https://www.kbb.com">
        {props.title}
      </a>
    </div>
  </nav>
);
*/

export default Header;