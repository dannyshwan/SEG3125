import React from 'react';
import '../../styles/professionaldev.scss'
import { Link } from 'react-router-dom'
import GroupIcon from '@material-ui/icons/Group'
import { Banner } from '../../components/banner'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs
} from '@material-ui/core';

class ProfessionalDevelopment extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
			<div>
				<Banner section={t("Professional_Development")}/>
				<section id='pd'>
					<div style={{ width: "75vw"}}>
						<Breadcrumbs aria-label="breadcrumb" style={{ color: "whitesmoke"}}>
							<Link 
								to="/teams"
								className="breadcrumbs_link"
								style={{ color: "#b9b9b9"}}
							>
								<GroupIcon style={{width: "30", height:"30", marginRight: "5px"}}/> {t("Teams_Header")}
							</Link>
							<Link 
								to="/professionaldevelopment"
								className="breadcrumbs_link"
								style={{ color: "whitesmoke"}}
							>
								{t("Professional_Development")}
							</Link>
						</Breadcrumbs>
					</div>
					<br/>
					<div id="about_prodev">
						<img src={require('../../assets/img/opdl.png')} alt="logo" style={{ height: "50vh", padding: "5rem"}}/>
						<div id="description_pd">
							<h1 id="title_pd">{t("Professional_Development_Program")}</h1>
							<p style={{ maxWidth: "50vw"}}>
								{t("opdlContent")} <a  style={{ color: "whitesmoke"}} href="https://www.opdl.ca/">{t("website")}</a>.
							</p>
							<p style={{ maxWidth: "50vw"}}>
								<b>{t("Timeline_title")}:</b> <br/>
								<ul>
									<li>
										{t("Timeline_1")}
									</li>
									<li>
										{t("Timeline_2")}
									</li>
									<li>
										{t("Timeline_3")}
									</li>
									<li>
										{t("Timeline_4")}
									</li>
									<li>
										{t("Timeline_5_1")} <b>$100</b> {t("Timeline_5_2")}
									</li>
									<li>
										<b>{t("Timeline_6")}</b>
									</li>
								</ul>
							</p>
							<p style={{ maxWidth: "50vw"}}>
								{t("additional_questions")} <b>garynewell@bytownfc.ca</b>
							</p>
						</div>
					</div>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(ProfessionalDevelopment);