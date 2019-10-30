import React, { Component } from "react";
import { Button } from "antd";

class ListEmployees extends Component {
  state = {
    api: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/funcionarios")
      .then(res => res.json())
      .then(data => {
        this.setState({ api: data });
        console.log(this.state);
      })
      .catch(console.log);
  }

  onlyActives() {
    let activesArray = this.state.api.filter(active => {
      return this.state.api.isActive === 1;
    });
    console.log(activesArray);
  }

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
              <Button className="only-actives" onClick={this.onlyActives}>
                Ver Apenas ativos
              </Button>
              <Button className="clean-filters">Limpar Filtros</Button>
              <p>Ativos 2/{this.state.api.length}</p>
            </div>
            <ul className="list-itens">
              {this.state.api.map(employer => (
                <li>
                  <div className="personal-data">
                    <h3 className="name-employer">{employer.name}</h3>
                    <div className="break"></div>
                    <p className="cpf-employer">{employer.cpfEmployer}</p>
                    <p className="activity">{employer.activity}</p>
                    <p className="office">{employer.office}</p>
                  </div>
                  <div className="button-item">
                    <p>...</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="step-completed">
              <div class="label-completed">
                <p>A etapa está concluída?</p>
              </div>
              <div class="switch-completed">
                <input
                  id="switch-shadow"
                  class="switch switch-shadow"
                  type="checkbox"
                />
                <label for="switch-shadow"></label>
              </div>
            </div>
          </content>
        </div>
      </React.Fragment>
    );
  }
}

export default ListEmployees;
