import React, { Component } from "react";
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
            placeholder: `Valor em ${this.props.moedaA}`
        }

        this.converter = this.converter.bind(this);
    }

    converter() {

        let de_para = `from=${this.props.moedaA}&to=${this.props.moedaB}`;
        let finalURL = `https://api.fastforex.io/fetch-one?${de_para}&api_key=133f64baf5-afc4849eed-r0hdbf`;


        fetch(finalURL).then(res => {
            return res.json()
        })
            .then(json => {
                let cotacao = json.result[this.props.moedaB];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);

                this.setState({ moedaB_valor });

                console.log(moedaB_valor)
            })

    }


    render() {
        return (
            <div className="conversor">

                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => { this.setState({ moedaA_valor: event.target.value }) }} className="input" placeholder={this.state.placeholder} />
                <input type="button" value="Converter" onClick={this.converter} />
                <h2>Resultado: {this.props.resultSymbol} {this.state.moedaB_valor}</h2>

            </div>
        )
    }
}