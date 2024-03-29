import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class ListEmployees extends Component {
  state = {
    api: [],
    showAll: true,
    itemAll: [],
    itemCompleted: true
  };

  // JSON Request
  componentDidMount() {
    fetch("http://localhost:8000/funcionarios")
      .then(res => res.json())
      .then(data => {
        this.setState({ api: data });
        this.setState({ itemAll: data });
        console.log(this.state);
      })
      .catch(console.log);
  }

  // Function to assemble list items
  showItem(employer) {
    if (this.state.showAll) {
      return (
        <li key={employer.id}>
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
      );
    }
  }

  // Display only active items
  showActives() {
    this.setState({
      itemAll: this.state.api.filter(employer => employer.isActive === 1)
    });
  }

  // Display all itens
  showAllItem() {
    this.setState({ itemAll: this.state.api });
  }

  // Chekbox from step completed

  render() {
    return (
      <React.Fragment>
        <div className="list-employess employees-content">
          <header className="header-list header-employees">
            <h2>Funcionário(s)</h2>
          </header>
          <content>
            <div className="action-buttons">
              <Link to="/adicionar-funcionario">
                <Button className="add-employees" block>
                  + Adicionar Funcionário
                </Button>
              </Link>
              <Button
                className="only-actives"
                onClick={this.showActives.bind(this)}
              >
                Ver Apenas ativos
              </Button>
              <Button
                className="clean-filters"
                onClick={this.showAllItem.bind(this)}
              >
                Limpar Filtros
              </Button>
              <p>
                Ativos {this.state.itemAll.length}/{this.state.api.length}
              </p>
            </div>
            <ul className="list-itens">
              {this.state.itemAll.map(employer => this.showItem(employer))}
            </ul>
            <div className="step-completed">
              <div className="label-completed">
                <p>A etapa está concluída?</p>
              </div>
              <div className="switch-completed">
                <input
                  id="switch-shadow"
                  className="switch switch-shadow"
                  type="checkbox"
                  name="itemCompleted"
                />
                <label htmlFor="switch-shadow"></label>
              </div>
            </div>
          </content>
        </div>
      </React.Fragment>
    );
  }
}

export default ListEmployees;
