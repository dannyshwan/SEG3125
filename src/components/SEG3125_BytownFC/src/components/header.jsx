import React from 'react';
import { Link } from 'react-router-dom'
import HelpIcon from '@material-ui/icons/Help';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import {withTranslation} from "react-i18next";
import i18n from '../i18n'
import '../styles/header.scss';
import { 
   Button, 
   Dialog, 
   DialogActions, 
   DialogContent, 
} from '@material-ui/core';

class Header extends React.Component{

   state = {
      navWidth: "0",
      menuOpened: false,
      open: false,
      openLng: false,
      lng: "en"
   }

   openMobileNav = () => {

      this.setState({
         navWidth: "100%",
         menuOpened: true
      });
   };

   closeMobileNav = () => {
      this.setState({
         navWidth: "0",
         menuOpened: false,
      });
   };

   showContent(){
      this.setState({ open: true });
   }

   closeContent(){
      this.setState({ open: false, openLng: false });
   }

   openChangeLanguageDialog(){
      this.setState({ openLng: true });
   }

   changeLanguage(lng){
      i18n.changeLanguage(lng);
   }

   render(){
      const { t } = this.props;
      return(
         <div id="header">
            <div id="web_navigation" style={{ width: "100%",position: "relative"}}>
               <img id="badge" src={require("../assets/img/logo.png")}alt="logo"/>
               <Link id='returnHome' to='/'>
                  Bytown FC
               </Link>
               <div id='links'>
                  <Link className='link' to='/about'>{t("About_Header")}</Link>
                  <Link className='link' to='/teams'>{t("Teams_Header")}</Link>
                  <Link className='link' to='/fields'>{t("Fields_Header")}</Link>
                  <Link className='link' to='/programs'>{t("Development_Header")}</Link>
                  <HelpIcon id="iconButtons" onClick={() => {this.showContent()}}/>
                  <LanguageIcon id="iconButtons" onClick={() => {this.openChangeLanguageDialog()}} />
                  <CodeIcon id="iconButtons" onClick={() => {window.open("https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_BytownFC")}}/>
               </div>
            </div>
            <Dialog
               open={this.state.open}
               onClose={() => {this.closeContent()}}
            >
               <div style={{ background: "whitesmoke" }}>
                  <DialogContent id="postcard">
                     <h1>{t("Help_Header")}</h1>
                     <p><b>{t("About_Header")}:</b> {t("About_Explanation")}</p>
                     <p><b>{t("Teams_Header")}:</b> {t("Teams_Explanation")}</p>
                     <p><b>{t("Fields_Header")}:</b> {t("Fields_Explanation")}</p>
                     <p><b>{t("Development_Header")}:</b> {t("Development_Explanation")}</p>
                  </DialogContent>
                  <DialogActions>
                     <Button variant="contained" color="secondary" onClick={() => {this.closeContent()}} autoFocus>
                     Ok
                     </Button>
                  </DialogActions>
               </div>
            </Dialog>
            <Dialog
               open={this.state.openLng}
               onClose={() => {this.closeContent()}}
            >
               <div style={{ background: "whitesmoke" }}>
                  <DialogContent id="changeLanguage">
                     <h2>{t("Change_Language")}</h2>
                     <div style={{ display: "inherit" }}>
                        <Button style={{margin: "0 10px", fontSize: "1.25rem"}} variant="contained" color="primary" onClick={() => {this.changeLanguage('en'); this.closeContent()}}>English</Button>
                        <Button style={{margin: "0 10px", fontSize: "1.25rem"}} variant="contained" color="primary" onClick={() => {this.changeLanguage('fr'); this.closeContent()}}>Français</Button>
                     </div>
                  </DialogContent>
                  <DialogActions>
                     <Button variant="outlined" color="default" onClick={() => {this.closeContent()}} autoFocus>
                        {t("Cancel")}
							</Button>
                  </DialogActions>
               </div>
            </Dialog>
            <div id="mobile_navigation" style={{ width: this.state.navWidth }}>
               <img 
                  role="button" 
                  id="mobile_nav_trigger" 
                  alt="mobile_nav_trigger"
                  src={ this.state.menuOpened ? require('../assets/img/close.png') : require('../assets/img/hamburger.png')} 
                  onClick={ this.state.menuOpened ? this.closeMobileNav : this.openMobileNav }
               />
               <ul id="mobile_links_ul">
                  <li><Link className="mobile_links" to='/' onClick={this.closeMobileNav}>HOME</Link></li>
                  <li><Link className="mobile_links" to='/about' onClick={this.closeMobileNav}>{t("About_Header")}</Link></li>
                  <li><Link className="mobile_links" to='/teams' onClick={this.closeMobileNav}>{t("Teams_Header")}</Link></li>
                  <li><Link className="mobile_links" to='/fields' onClick={this.closeMobileNav}>{t("Fields_Header")}</Link></li>
                  <li><Link className="mobile_links" to='/programs' onClick={this.closeMobileNav}>{t("Development_Header")}</Link></li>
               </ul>
            </div>
         </div>
      );
   }
}

export default withTranslation()(Header);