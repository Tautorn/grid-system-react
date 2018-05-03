import React, { Component } from 'react'
import { StyledGrid } from './styled'
import PropTypes from 'prop-types'

export const Grid = (props) => {

  const { children } = props

  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}

Grid.defaultProps = {

}

Grid.protoType = {

}
