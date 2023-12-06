import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBarr=()=>{

    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Profile</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Asia said</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}
export default NavBarr