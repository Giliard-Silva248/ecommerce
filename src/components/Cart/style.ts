import styled from "styled-components";

export const Carrinho = styled.aside<{ $toggle: boolean }>`
    position: fixed;
    bottom: ${({$toggle}) => ($toggle ? '0' : '1rem')};
    right: ${({$toggle}) => ($toggle ? '0' : '1rem')};
    border-left: ${({$toggle}) => ($toggle ? '2px solid black' : 'none')};
    height: ${({$toggle}) => ($toggle ? '100vh' : '')};
    width: ${({$toggle}) => ($toggle ? '20rem' : '')};





`
