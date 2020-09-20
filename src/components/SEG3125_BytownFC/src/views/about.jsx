import React from 'react';
import '../styles/about.scss'
import { withTranslation } from "react-i18next";

class About extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
     	 	<section id='about'>
				<div id="about_section">
					<img src={require('../assets/img/logo.png')} alt="logo" style={{ height: "50vh", padding: "5rem"}}/>
					<div id="description">
						<h1 id="title_about">{t("About_Header")}</h1>
						<p style={{ maxWidth: "50vw"}}>
							{t("aboutContent")}
						</p>
					</div>
				</div>
      	</section>
    	);
  	}
}

export default withTranslation()(About);