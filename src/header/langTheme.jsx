import React from 'react' ;

export class ChangeLanguage extends React.Component {
	constructor() {
		super();
		this.handleClickChangeLang = this.handleClickChangeLang.bind(this)
        this.state = {
            changeLang: true
        }
	}
	handleClickChangeLang () {
        this.setState((prewState) => ({
            changeLang: !prewState.changeLang
        }))
    }
	render() {
		let {changeLang} = this.state;
		return(
			<div className="change-language">
			{changeLang ? (
				<span className="language-title-ru">
					<p className="lang-ru">Язык русский</p>
				</span> 
			):(
				<span className="language-title-eng">
					<p className="lang-eng">Lang english</p>
				</span> 
			)}
			<button className="btn-arrow-lang" onClick={this.handleClickChangeLang}>&#957;</button>
		</div>
		);
	}
}