import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 33%;

  @media (max-width: 375px) {
    width: 26%;
  }

  @media (max-width: 885px) {
    width: 26%;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 885px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const HeaderTitle = styled.p`
  font-size: 20px;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 375px) {
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 885px) {
    font-size: 22px;
    font-weight: bold;
  }
`
