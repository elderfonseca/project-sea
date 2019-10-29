import React, { Component } from "react";
import { Button } from "antd";

class ListEmployees extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="list-employess">
          <header className="header-list">
            <h2>Funcionário(s)</h2>
          </header>
          <content>
            <div className="action-buttons">
              <Button className="add-employees" block>
                + Adicionar Funcionário
              </Button>
              <Button className="only-actives">Ver Apenas ativos</Button>
              <Button className="clean-filters">Limpar Filtros</Button>
              <p>Ativos 2/25</p>
            </div>
            <ul className="list-itens">
              <li>
                <div className="personal-data">
                  <h3 className="name-employer">Daniel Alves da Silva</h3>
                  <p class="cpf-employer">000.000.000-99</p>
                  <p className="activity">Ativ 00</p>
                  <p className="office">Cargo 1</p>
                </div>
                <div className="button-item">
                  <p>...</p>
                </div>
              </li>
            </ul>
          </content>
        </div>
      </React.Fragment>
    );
  }
}

export default ListEmployees;
