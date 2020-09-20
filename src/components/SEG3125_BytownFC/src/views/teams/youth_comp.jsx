import React from 'react';
import '../../styles/teaminfo.scss'
import { Link } from 'react-router-dom'
import { Banner } from '../../components/banner'
import GroupIcon from '@material-ui/icons/Group'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs,
} from '@material-ui/core';

class YouthCompetitive extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
			<div>
				<Banner section={t("YouthComp_Header")}/>
				<section id='teaminfo'>
					<br/>
					<div style={{ width: "75vw"}}>
						<Breadcrumbs aria-label="breadcrumb">
							<Link 
								to="/teams"
								className="breadcrumbs_link"
								style={{ color: "#505050"}}
							>
								<GroupIcon style={{width: "30", height:"30", marginRight: "5px"}}/> {t("Teams_Header")}
							</Link>
							<Link 
								to="/competitive"
								className="breadcrumbs_link"
								style={{ color: "#505050"}}
							>
								{t("Competitive")}
							</Link>
							<Link 
								to="/youthcompetitive"
								className="breadcrumbs_link"
							>
								{ t("Youth") }
							</Link>
						</Breadcrumbs>
					</div>
					<p style={{width: "75vw"}}>{ t("youthComp") }</p>
					<p style={{width: "75vw"}}><b>{ t("contact_teams") }</b></p>
					<div style={{ display: "flex", justifyContent:"center"}}>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Men") }</h1>
								<li>
									U10-U12: Heung-Min Song <br/><b>heungminsong@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U13-U15:  Novak Djaković <br/><b>novakdjakovic@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U16-U17:  Tolu Nketiah <br/><b>tolunketiah@bytownfc.ca</b>
								</li>
							</ul>
						</div>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Women") }</h1>
								<li>
									U10-U12: Sydney Leroux <br/><b>sydneyleroux@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U13-U15: Staphanie van de Beek <br/><b>staphanievandebeek@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U16-U17: Laura Schneider <br/><b>lauraschneider@bytownfc.ca</b>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(YouthCompetitive);