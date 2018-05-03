import styled, { css } from 'styled-components'


const sizes = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376,
 }

 const large = css`
  @media (max-width:1170px)  {
    grid-template-columns: repeat(2, 1fr);
  }
 `

const desktop = css`
  @media (max-width:992px)  {
    grid-template-columns: repeat(2, 1fr);
  }
`

const tablet = css`
  @media (max-width:768px)  {
    grid-template-columns: repeat(2, 1fr);
  }
`

const mobile = css`
  @media (max-width:376px)  {
    grid-template-columns: repeat(2, 1fr);
  }
`


export const StyledGrid = styled.div`

  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;

  & > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
  }

  ${large};
  ${desktop};
  ${tablet};
  ${mobile};
`