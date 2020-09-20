import React from 'react';
import '../styles/fields.scss'
import { Banner } from '../components/banner'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import PaymentIcon from '@material-ui/icons/Payment';
import { withTranslation } from "react-i18next";
import { 
   Button, 
   Card, 
   CardContent, 
   CardMedia,  
   Dialog, 
   DialogActions, 
   DialogContent, 
	Grid,
	InputLabel,
	TextField,
	MenuItem,
	Select,
	Typography
} from '@material-ui/core';

class Fields extends React.Component{

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
		const fields = [
			{
				name: "Matt Anthony Field",
				thumbnail: require("../assets/img/fields/maf.jpg"),
				location: `123 Palladium Drive`,
				price: `$15/${t("hour")}`
			},
			{
				name: "OZ Dome",
				thumbnail: require("../assets/img/fields/ozdome.jpg"),
				location: `239 Elgin Street`,
				price: `$35/${t("hour")}`
			},
			{
				name: "Eva James",
				thumbnail: require("../assets/img/fields/evajames.jpg"),
				location: `900 Bridgestone Avenue`,
				price: `$30/${t("hour")}`
			},
			{
				name: "Blackburn",
				thumbnail: require("../assets/img/fields/blackburn.jpg"),
				location: `405 Welsh Cresent`,
				price: `$30/${t("hour")}`
			},
			{
				name: "Wesley Grove",
				thumbnail: require("../assets/img/fields/wesley.jpg"),
				location: `298 Lansdowne Park`,
				price: `$25/${t("hour")}`
			},
			{
				name: "Surrey Field",
				thumbnail: require("../assets/img/fields/surreyfield.jpg"),
				location: `881 Surrey Drive`,
				price: `$25/${t("hour")}`
			},
			{
				name: "Crystalline",
				thumbnail: require("../assets/img/fields/crystalline.jpg"),
				location: `182 McDonald Drive`,
				price: `$40/${t("hour")}`
			}
		]
		
    	return (
			<div>
				<Banner section={t("Field_Rental")}/>
				<section id='fields'>
					<br/>
					<p style={{width: "50%"}}>{t("fieldDescription")}</p>
					<br/>
					<div>
						<Grid container>
							<Grid item xs={12}>
								<Grid container id="field_cards"> 
									{
										fields.map((field, index) => {
											return(
												<Grid key={index} item>
													<Card className="info_card" onClick={() => {this.showContent(index)}}>
														<CardContent>
															<CardMedia
																style={{ height: 225, filter: "brightness(95%)" }}
																image={ field.thumbnail }
															/>
															<br/>
															<Typography className="typography" variant="h4">
																<p>{field.name}</p>
															</Typography>
															<Typography className="typography" variant="subtitle2" color="textSecondary">
																<p>{field.location}, {field.price}</p>
															</Typography>
														</CardContent>
													</Card>
												</Grid>
											);
										})
									}
								</Grid>
							</Grid>
						</Grid>
					</div>
					<br/>
					<Dialog
						open={this.state.open}
						onClose={() => {this.closeContent()}}
					>
						<div style={{ background: "whitesmoke"}}>
							<DialogContent>
								<form>
								<h1 style={{ textAlign: "center" }}>{t("Reserve")} { fields[this.state.cardIndex].name }</h1>
									<TextField
										required
										className="form_input"
										label={t("Name")}
										variant="outlined"
									/>
									<br/>
									<TextField
										required
										className="form_input"
										label={t("Email")}
										variant="outlined"
									/>
									<br/>
									<TextField
										className="form_input"
										label={t("Reservation_Time")}
										type="datetime-local"
										defaultValue="2017-05-24T10:30"
							
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<br/>
									<InputLabel id="reservation">{t("Rent_Period")}?</InputLabel>
									<Select
										id="reservation"
									>
										<MenuItem value={1}>1h</MenuItem>
										<MenuItem value={2}>2h</MenuItem>
										<MenuItem value={3}>3h</MenuItem>
									</Select>
									
									<p id="payment_title"><PaymentIcon style={{ fontSize: "30px"}}/>{t("Payment")}</p>
									<TextField
										required
										className="form_input"
										label={t("Card_Owner")}
										variant="outlined"
									/>
									<br/>
									<TextField
										required
										className="form_input"
										label={t("Card_Number")}
										variant="outlined"
										helperText={t("Payment_penalty")}
										inputProps={{ maxLength: 16, placeholder:"XXXXXXXXXXXXXXXX"}}
									/>
									<br/>
									<div style={{ display: "inherit" }}>
										<TextField
											required
											className="form_input"
											label={t("Expiry_Date")}
											variant="outlined"
											inputProps={{ maxLength: 4, placeholder:"MMYY"}}
										/>
										<TextField
											required
											className="form_input"
											label="CVV"
											variant="outlined"
											helperText={t("CVV")}
											inputProps={{ maxLength: 3, placeholder:"***", pattern:""}}
										/>
									</div>
								
								</form>
							</DialogContent>
							<DialogActions>
								<Button variant="outlined" color="default" onClick={() => {this.closeContent()}} startIcon={<DeleteIcon />} autoFocus>
								{t("Cancel")}
								</Button>
								<Button variant="contained" color="secondary" onClick={() => {this.closeContent()}} startIcon={<CheckIcon />} autoFocus>
								{t("Reserve")}
								</Button>
							</DialogActions>
						</div>
					</Dialog>
				</section>
			</div>
    	);
  	}
}
export default withTranslation()(Fields);