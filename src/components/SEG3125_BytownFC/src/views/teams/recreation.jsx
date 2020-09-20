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

class Recreation extends React.Component{

  	render(){
		const { t } = this.props;
		const ages = [
			{
				thumbnail: require("../../assets/img/previews/recreationadult.jpg"),
				title: `${t("Adult")}`,
				url:"/adultrecreation"
			},
			{
				thumbnail: require("../../assets/img/previews/recreationyouth.png"),
				title: `${t("Youth")} (U6-U17)`,
				url:"/youthrecreation"
			}
		]
    	return (
			<div>
				<Banner section={t("RecreationSoccer")}/>
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
								to="/recreation"
								className="breadcrumbs_link"
							>
								{t("Recreation")}
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
export default withTranslation()(Recreation);