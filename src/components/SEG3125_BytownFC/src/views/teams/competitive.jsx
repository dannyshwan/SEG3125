import React from 'react';
import '../../styles/teams.scss'
import { Link } from 'react-router-dom'
import { Banner } from '../../components/banner'
import GroupIcon from '@material-ui/icons/Group'
import { withTranslation } from "react-i18next";
import { 
	Breadcrumbs,
   Card, 
   CardContent, 
   CardMedia,  
   Typography 
} from '@material-ui/core';

class Competitive extends React.Component{

  	render(){
		const { t } = this.props;
		const ages = [
			{
				thumbnail: require("../../assets/img/previews/competitiveadult.png"),
				title: `${t("Adult")}`,
				url:"/adultcompetitive"
			},
			{
				thumbnail: require("../../assets/img/previews/competitiveyouth.jpg"),
				title: `${t("Youth")} (U10-U17)`,
				url:"/youthcompetitive"
			}
		]
    	return (
			<div>
				<Banner section={t("CompetitiveSoccer")}/>
				<section id='teams'>
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
							>
								{t("Competitive")}
							</Link>
						</Breadcrumbs>
					</div>
					<p style={{width: "75vw", textAlign:"center"}}>{t("Age_group")}</p>
					<div id="program_cards">
						{
							ages.map((age, index) => {
								return(
									<Link className="team_cards" to={age.url}>
										<Card>
											<CardContent>
												<CardMedia
													style={{ height: 350, filter: "brightness(85%)" }}
													image={ age.thumbnail }
												/>
												<br/>
												<Typography className="typography" variant="h5" color="textPrimary">
													<p>{age.title}</p>
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
export default withTranslation()(Competitive);