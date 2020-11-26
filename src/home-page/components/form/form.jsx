
import React, { Fragment } from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.changeInput = this.changeInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            surname: "",
            phone: "",
            id: new Date().getUTCMilliseconds(),
            result: ""
        }
    }
    sendData() {
        let data = this.state,
        url = "", // example url
        options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(url, options)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .then((result) => this.setState(() => ({
            surname: "",
            phone: "",
            id: 0,
            result
        })))
        
       
    }
    changeInput(event) {
        let { name, value } = event.target
        this.setState({[name]: value})
    }
    submitForm(event) {
        event.preventDefault();
        console.log(this.state);
        //this.sendData();
    }
    render() {
        let { surname, phone } = this.state
        return (
            <Fragment>
                <form name="form" onSubmit={this.submitForm}>
                    <div className="form-wraper">
                        <div className="form-name">
                            <div className="form-title"><h3>Ваше имя</h3></div>
                            <input name="surname"
                                value={surname}
                                onChange={this.changeInput}
                                placeholder="Ваше имя" />
                        </div>
                        <div className="form-phone">
                            <div className="form-title"><h3>Телефон для связи</h3></div>
                            <input name="phone"
                                value={phone}
                                onChange={this.changeInput}
                                placeholder="+375(XX) XXX-XX-XX" />
                        </div>
                        <div className="form-text-confidence"><p>
                            Нажимая на кнопку «Получить консультацию», вы соглашаетесь с условиями&emsp;</p>
                            <a className="form-reference" href="#">Политики конфиденциальности</a>
                        </div>
                        <div className="form-submit-button">
                            <button className="btn form-button">Получить консультацию</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}
