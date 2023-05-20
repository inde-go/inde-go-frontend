import Nav from "./abstract/Nav";
import HomeNavLink from "../Links/HomeNavLink"
import FlexApart from "../layout/FlexApart";

export default function HomeNav() {
  
  const leftLinks = (
    <HomeNavLink
      href="/"
      textContent="Home"
    />
  );

  const rightLinks = (
    <>
      <HomeNavLink
        href="/"
        textContent="Log In"
      />
      <HomeNavLink
        href="/"
        textContent="Sign up"
      />
    </>
  );
  
  return (
    <Nav>
      <FlexApart
        leftChildren={leftLinks} 
        rightChildren={rightLinks}
      />     
    </Nav>
  );
}
