import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";

const FormEmployees = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <React.Fragment>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <div className="active-group">
          <div className="label-active-employer">
            <p>A etapa está concluída?</p>
          </div>
          <div class="switch-active-employer">
            <input
              id="switch-shadow"
              className="switch switch-shadow"
              type="checkbox"
              name="activeEmployer"
            />
            <label for="switch-shadow"></label>
          </div>
        </div>
        <div className="employer-dates">
          <div className="employer-row">
            <div className="employer-group">
              <label>Nome</label>
              <Field
                name="name"
                component="input"
                type="text"
                className="employer-control"
              />
            </div>
            <div className="employer-group">
              <label>Sexo</label>
              <div>
                <label>
                  <Field name="sex" type="radio" value="masculino" /> Masculino
                </label>
                <label>
                  <Field name="sex" type="radio" value="feminino" /> Feminino
                </label>
              </div>
            </div>
          </div>
          <div className="employer-row">
            <div className="employer-group">
              <label>CPF</label>
              <Field
                name="cpf"
                component="input"
                type="text"
                className="employer-control"
              />
            </div>
            <div className="employer-group">
              <label>Data de Nascimento</label>
              <Field
                name="birth-date"
                component="input"
                type="text"
                className="employer-control"
              />
            </div>
          </div>
          <div className="employer-row">
            <div className="employer-group">
              <label>RG</label>
              <Field
                name="rg"
                component="input"
                type="text"
                className="employer-control"
              />
            </div>
            <div className="employer-group">
              <label>Cargo</label>
              <Field
                name="Office"
                component="input"
                type="text"
                className="employer-control"
              />
            </div>
          </div>
        </div>
        <div className="employer-epi">
          <div className="employer-row">
            <div className="employer-group">
              <label>Quais EPIs o trabalhador usa na atividade?</label>
            </div>
            <div className="employer-group">
              <label htmlFor="useEpi">O trabalhador não usa EPI</label>
              <Field
                name="useEpi"
                component="input"
                id="use-epi"
                type="checkbox"
                className="employer-control"
              />
            </div>
          </div>
          <div className="employer-row">
            <div className="epi-row">
              <div className="employer-group">
                <label>Selecione a atividade</label>
                <Field
                  name="activityExercised"
                  component="select"
                  type="text"
                  className="employer-control"
                >
                  <option value="Ativ 00">Ativid 0</option>
                  <option value="Ativ 01">Ativid 1</option>
                  <option value="Ativ 02">Ativid 2</option>
                  <option value="Ativ 03">Ativid 3</option>
                </Field>
              </div>
            </div>
            <div className="epi-row">
              <div className="employer-group">
                <label>Selecione o EPI</label>
                <Field
                  name="epiType"
                  component="select"
                  type="text"
                  className="employer-control"
                >
                  <option value="Calçado de Segurança">
                    Calçado de Segurança
                  </option>
                  <option value="Capacete">Capacete</option>
                  <option value="Luvas">Luvas</option>
                </Field>
              </div>
              <div className="employer-group">
                <label>Informe o número do CA</label>
                <Field
                  name="Office"
                  component="input"
                  type="text"
                  className="employer-control"
                />
              </div>
              <div className="employer-group">
                <p>Adiconar EPI</p>
              </div>
            </div>
          </div>
          <div className="employer-row">
            <Button className="add-activity" block>
              Adicionar outra atividade
            </Button>
          </div>
        </div>
        <div className="employer-certificate">
          <div className="employer-row">
            <div className="employer-group">
              <label>Adicione Atestado de Saúde Ocupacional (opcional)</label>
              <Field
                name="HealthCertificate"
                component="input"
                type="file"
                className="employer-control"
              />
            </div>
          </div>
        </div>
        <div className="employer-save-button">
          <button
            type="submit"
            className="submit-form"
            diabled={pristine || submitting}
            block
          >
            Salvar
          </button>
          {""}
        </div>
      </Form>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "registrationForm"
})(FormEmployees);