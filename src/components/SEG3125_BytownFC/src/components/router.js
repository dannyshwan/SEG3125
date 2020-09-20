import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/home'
import About from '../views/about'
import Fields from '../views/fields'
import Programs from '../views/programs'
import Teams from '../views/teams'
import ProfessionalDevelopment from '../views/teams/pd'
import Competitive from '../views/teams/competitive'
import Recreation from '../views/teams/recreation'
import AdultCompetitive from '../views/teams/adult_comp'
import AdultRecreation from '../views/teams/adult_rec'
import YouthCompetitive from '../views/teams/youth_comp'
import YouthRecreation from '../views/teams/youth_rec'

export const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/about' component={ About }/>
      <Route path='/fields' component={ Fields }/>
      <Route path='/programs' component={ Programs }/>
      <Route path='/teams' component={ Teams }/>
      <Route path='/professionaldevelopment' component={ ProfessionalDevelopment }/>
      <Route path='/competitive' component={ Competitive }/>
      <Route path='/recreation' component={ Recreation }/>
      <Route path='/adultcompetitive' component={ AdultCompetitive }/>
      <Route path='/adultrecreation' component={ AdultRecreation }/>
      <Route path='/youthcompetitive' component={ YouthCompetitive }/>
      <Route path='/youthrecreation' component={ YouthRecreation }/>
    </Switch>
  </main>
);