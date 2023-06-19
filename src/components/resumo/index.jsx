import React from 'react'
import * as C from '../resumo/styles'
import ResumoItem from '../resumoItem'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

const Resumo = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumoItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumoItem
        title="Saida"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumoItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resumo
