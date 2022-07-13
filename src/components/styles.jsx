import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #1b1b1b;
  border-radius: 1em;
  max-width: 360px;
  padding: 3em 1em;
  margin: auto;
`
export const Title = styled.h1`
  background-color: #fff;
  color: #1b1b1b;
  border-radius: 0.2em;
  padding: 0.3em 0.2em;
  display: flex;
  justify-content: flex-end;
  margin-right: 0.15em;
  margin-block: 0.5em;
  max-width: 325px;
  font-size: 3.5em;
`

export const Button = styled.button`
  width: 3em;
  height: 3em;
  font-size: 1.5em;
  border: none;
  border-radius: 0.5em;
  text-align: center;
  margin: 0.2em;
  &:hover {
    cursor: pointer;
  }
`
