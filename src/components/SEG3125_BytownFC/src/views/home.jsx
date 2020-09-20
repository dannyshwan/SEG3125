import React from 'react';
import '../styles/home.scss'
import { withTranslation } from "react-i18next";
class Home extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
     	 	<section id='home'>
				<p style={{ fontSize: "20rem"}}>{t("All")}</p>
				<p style={{ marginTop: "-100px"}}>{t("Or_Nothing")}</p>
				<br/>
				<p style={{ fontSize: "2.5rem", textAlign: "right"}}>{t("Subtitle")}</p>
      	</section>
    	);
  	}
}
export default withTranslation()(Home);