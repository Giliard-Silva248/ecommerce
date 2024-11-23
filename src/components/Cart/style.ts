import styled from "styled-components";

export const Carrinho = styled.aside<{ $toggle: boolean }>`
    position: fixed;
    bottom: ${({$toggle}) => ($toggle ? '0' : '1rem')};
    right: ${({$toggle}) => ($toggle ? '0' : '1rem')};
    border: ${({$toggle}) => ($toggle ? '1px solid red' : 'none')};
    height: ${({$toggle}) => ($toggle ? '100vh' : '')};
    width: ${({$toggle}) => ($toggle ? '20rem' : '')};





`
