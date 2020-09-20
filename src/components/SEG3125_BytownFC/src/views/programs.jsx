import React from 'react';
import '../styles/programs.scss'
import { Banner } from '../components/banner'
import { withTranslation } from "react-i18next";
import { 
   Button, 
   Card, 
   CardContent, 
   CardMedia,  
   Dialog, 
   DialogActions, 
   DialogContent, 
   Typography 
} from '@material-ui/core';
	
class Programs extends React.Component{

	state = {
      open: false,
      cardIndex: 0
   };

   showContent(index){
      this.setState({ open: true, cardIndex: index});
   }

   closeContent(){
      this.setState({ open: false });
   }

  	render(){
		const { t } = this.props;
		const programs = [
			{
				thumbnail: require("../assets/img/previews/fundamental.jpg"),
				title: `${t("Fundamentals")}`,
				price: "$125",
				contact: "alphonsodavies@bytownfc.ca",
				description: `${t("description_fundamental")}`
			},
			{
				thumbnail: require("../assets/img/previews/technical.jpg"),
				title: `${t("Technicals")}`,
				price: "$300",
				contact: `${t("contact_techinical")}`,
				description: `${t("description_technical")}`
			},
			{
				thumbnail: require("../assets/img/previews/goalkeeper.jpeg"),
				title: `${t("Goalkeeping")}`,
				price: "$250",
				contact: "petrcech@bytownfc.ca",
				description: `${t("description_goalkeeping")}`
			}
		]
    	return (
			<div>
				<Banner section={t("tdProgram")}/>
				<section id='programs'>
					<p style={{width: "75vw"}}>{ t("programDescription") }</p>
		 			<h4 style={{textAlign: "center", width: "50vw"}}>{ t("click_below_for_more_info")}</h4>
					<div id="program_cards">
						{
							programs.map((program, index) => {
								return(
									<Card className="program_card" key={index} onClick={() => {this.showContent(index)}}>
										<CardContent>
											<CardMedia
												style={{ height: 225, filter: "brightness(95%)" }}
												image={ program.thumbnail }
											/>
											<br/>
											<Typography className="typography" variant="h5" color="textPrimary">
												<p>{program.title}</p>
											</Typography>
											<Typography className="typography" variant="h6" color="textSecondary">
												<p>{program.price}</p>
											</Typography>
										</CardContent>
									</Card>
								);
							})
						}
					</div>
					<Dialog
						open={this.state.open}
						onClose={() => {this.closeContent()}}
					>
						<div>
							<DialogContent>
							<h2>{	programs[this.state.cardIndex].title }</h2>
							<p>{ programs[this.state.cardIndex].description }</p>
							<p>{t("To_Register_Please_Contact")}: { programs[this.state.cardIndex].contact }</p>
							</DialogContent>
							<DialogActions>
								<Button variant="outlined" color="secondary" onClick={() => {this.closeContent()}} autoFocus>
								Ok
								</Button>
							</DialogActions>
						</div>
					</Dialog>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(Programs);