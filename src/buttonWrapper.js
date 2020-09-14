import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    }
    color: ${prop =>
        prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"
    }
    border-radius: 05rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background: ${prop =>
        prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"}
    color: var(--mainBlue);
    }
    &:focus{
    outline: none;
    }
`

export const SliderButtonWrapper = styled.button`
.btn-black {
    background: transparent;
    text-transfor: capitalize;
    font-size: 1.5rem !important;
    color: var(--mainDark);
    border-radius: 0 !important;
    border: 0.1rem solid var(--mainDark) !important;
  }
  
  .btn-black:hover {
    background: var(--mainDark) !important;
    color: var(--mainWhite) !important;
  }
`