import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

class Headers extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                    Cabeçalho
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="#">
                                    Componentes
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                            inNavbar
                            nav
                            >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Opções
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Opção 1
                                </DropdownItem>
                                <DropdownItem>
                                Opção 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Limpar
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>
                            Usuário
                        </NavbarText>=
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Headers;