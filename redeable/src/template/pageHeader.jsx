import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
  <header className="page-header">
    <div>
      <h2>{props.name} 
        <small> / {props.small}</small>
        <small><button onClick={() => alert('Teste')} className="botao-header-add btn btn-primary"><i className="fa fa-plus"></i> Adicionar</button></small>
      </h2>
    </div>
  </header>
)