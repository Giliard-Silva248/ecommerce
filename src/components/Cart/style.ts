import styled from "styled-components";

export const carrinho = styled.aside<{ $toggle: boolean }>`
    position: ${({$toggle}) => ($toggle ? 'absolute' : 'static')};
    top: ${({$toggle}) => ($toggle ? '0' : '')};
    right: ${({$toggle}) => ($toggle ? '0' : '')};
    border: ${({$toggle}) => ($toggle ? '1px solid red' : 'none')};
    height: ${({$toggle}) => ($toggle ? '100vh' : '')};
    width: ${({$toggle}) => ($toggle ? '15rem' : '-15rem')};


/* h-dvh fixed top-0 end-0 border-4 border-red-800 */

`
