import React from 'react';
import '../../styles/teaminfo.scss'
import { Link } from 'react-router-dom'
import { Banner } from '../../components/banner'
import GroupIcon from '@material-ui/icons/Group'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs,
} from '@material-ui/core';

class AdultCompetitive extends React.Component{

  	render(){
		const { t } = this.props;
    	return (
			<div>
				<Banner section={t("AdultComp_Header")}/>
				<section id='teaminfo'>
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
								to="/adultcompetitive"
								className="breadcrumbs_link"
							>
								{t("Adult")}
							</Link>
						</Breadcrumbs>
					</div>
					<p style={{width: "75vw"}}>{ t("adultComp") }</p>
					<p style={{width: "75vw"}}><b>{ t("contact_teams")}</b></p>
					<div style={{ display: "flex", justifyContent:"center"}}>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Men") }</h1>
								<li>
									U18-U31: Tatsuro Minamino <br/><b>tatsurominamino@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U35+: Luka Djaković <br/><b>lukadjakovic@bytownfc.ca</b>
								</li>
							</ul>
						</div>
						<div className="person_of_contact">
							<ul>
								<h1>{ t("Women") }</h1>
								<li>
									U18-U31: Liuzhuo Wang <br/><b>liuzhuowang@bytownfc.ca</b>
								</li>
								<br/>
								<li>
									U35+: Carla DeRosario <br/><b>carladerosario@bytownfc.ca</b>
								</li>
							</ul>
						</div>
					</div>
					<div className="person_of_contact">
						<ul>
							<h1>{ t("Mixed") }</h1>
							<li>
							U18-U31: Roberto Carlos <br/><b>robertocarlos@bytownfc.ca</b>
							</li>
						</ul>
					</div>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(AdultCompetitive);