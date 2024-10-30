import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <InnerContainer>
        <Logo>logo</Logo>
        
        <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <NavItems className={isOpen ? 'active' : ''}>
          <ul>
            <li>Our Story</li>
            <li>Use Cases</li>
            <li>Features</li>
            <li>Careers</li>
            <li>Support</li>
            <Button>Try for Free</Button>
          </ul>
        </NavItems>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* padding: 20px; */
  height: 80px;
  display: flex;

  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  /* background: rgba(255, 255, 255, 0.1); */
  padding: 1rem 0;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000;
`;

const InnerContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  max-width: 1300px;
  padding: 0 1rem;
  position: relative;
  border-radius: 50px;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.038); 
  backdrop-filter: blur(10px) saturate(150%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 

  button {
    color: black;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
`;


const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;
  width: 30px;
  height: 24px;
  position: relative;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease;

    &:first-child {
      top: ${props => props.isOpen ? '50%' : '0'};
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:last-child {
      bottom: ${props => props.isOpen ? '50%' : '0'};
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'none'};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.div`
  ul {
    
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 1rem;
    color: #999999;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f3f3f3;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    transition: right 0.3s ease;
    padding: 5rem 2rem;

    &.active {
      right: 0;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    li {
      font-size: 1.2rem;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4ade80;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #3dcf72;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
  }
`;

export default Navbar;