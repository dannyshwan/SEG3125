import React from 'react';
import '../styles/teams.scss'
import { Link } from 'react-router-dom'
import { Banner } from '../components/banner'
import GroupIcon from '@material-ui/icons/Group'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs,
   Card, 
   CardContent, 
   CardMedia,  
   Typography 
} from '@material-ui/core';

class Teams extends React.Component{

  	render(){
		const { t } = this.props;
		const teams = [
			{
				thumbnail: require("../assets/img/previews/academy.jpg"),
				title: `${t("Professional_Development")}`,
				url:"/professionaldevelopment"
			},
			{
				thumbnail: require("../assets/img/previews/competitive.jpg"),
				title: `${t("Competitive")}`,
				url:"/competitive"
			},
			{
				thumbnail: require("../assets/img/previews/recreation.jpg"),
				title: `${t("Recreation")}`,
				url:"/recreation"
			}
		]
    	return (
			<div>
				<Banner section={ t("Teams_Programs") }/>
				<section id='teams'>
					<div style={{ width: "75vw"}}>
						<Breadcrumbs aria-label="breadcrumb">
							<Link 
								to="/teams"
								className="breadcrumbs_link"
							>
								<GroupIcon style={{width: "30", height:"30", marginRight: "5px"}}/> {t("Teams_Header")}
							</Link>
						</Breadcrumbs>
					</div>
					<h1>{t("Overview")}</h1>
					<p style={{width: "75vw"}}>{t("teamsDescription")}</p>
					<div id="program_cards">
						{
							teams.map((team, index) => {
								return(
									<Link className="team_cards" to={team.url}>
										<Card>
											<CardContent>
												<CardMedia
													style={{ height: 225, filter: "brightness(95%)" }}
													image={ team.thumbnail }
												/>
												<br/>
												<Typography className="typography" variant="h5" color="textPrimary">
													<p>{team.title}</p>
												</Typography>
											</CardContent>
										</Card>
									</Link>
								);
							})
						}
					</div>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(Teams);