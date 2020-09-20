import React from 'react';
import '../../styles/teaminfo.scss'
import { Link } from 'react-router-dom'
import { Banner } from '../../components/banner'
import GroupIcon from '@material-ui/icons/Group'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs,
} from '@material-ui/core';

class YouthRecreation extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
			<div>
				<Banner section={t("YouthRec_Header")}/>
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
								to="/recreation"
								className="breadcrumbs_link"
								style={{ color: "#505050"}}
							>
								{ t("Recreation") }
							</Link>
							<Link 
								to="/youthrecreation"
								className="breadcrumbs_link"
							>
								{ t("Youth") }
							</Link>
						</Breadcrumbs>
					</div>
					<p style={{width: "75vw"}}>{ t("youthRec") }</p>
					<p style={{width: "75vw"}}><b>{ t("contact_teams") }</b></p>
					<div style={{ display: "flex", justifyContent:"center"}}>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Men") }</h1>
								<li>
									U6-U10: Heung-Min Song <br/><b>heungminsong@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U11-U14:  Alphonso Davies <br/><b>alphonsodavies@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U15-U17:  Tolu Nketiah <br/><b>tolunketiah@bytownfc.ca</b>
								</li>
							</ul>
						</div>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Women") }</h1>
								<li>
									U6-U10:  Kadi Kanu <br/><b>kadikanu@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U11-U14: Sydney Leroux <br/><b>sydneyleroux@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U15-U17: Staphanie van de Beek <br/><b>staphanievandebeek@bytownfc.ca</b>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(YouthRecreation);