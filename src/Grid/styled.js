import styled, { css } from 'styled-components'


const sizes = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376,
}

const mediasArray = (cols, device) => (
  {
    large: cols[0] || cols,
    desktop: cols[1] || cols,
    tablet: cols[2] || cols,
    mobile: cols[3] || cols,
    default: cols,
  }[device] || 'default'
)

const medias = ({ cols }, device) => (
  Array.isArray(cols) ? mediasArray(cols, device) : cols
)

const fr = props => (
  `${props.fr}fr`
)

const columnsRepeat = (device) => css`
  repeat(${props => medias(props, device)}, ${fr});
`

const large = css`
  @media (min-width:993px)  {
    grid-template-columns: ${columnsRepeat('large')}
  }
`

const desktop = css`
  @media (max-width:992px)  {
    grid-template-columns: ${columnsRepeat('desktop')};
  }
`

const tablet = css`
  @media (max-width:768px)  {
    grid-template-columns: ${columnsRepeat('tablet')};
  }
`

const mobile = css`
  @media (max-width:376px)  {
    grid-template-columns: ${columnsRepeat('mobile')};
  }
`

const styleSheet = styled.div`
  box-sizing: border-box;
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
`

export const StyledGrid = styled(styleSheet)`
  display: grid;
  ${large};
  ${desktop};
  ${tablet};
  ${mobile};
`