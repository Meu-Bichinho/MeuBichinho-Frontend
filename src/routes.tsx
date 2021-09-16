import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MapPage } from './pages/MapPage';
import { LoginPage } from './pages/LoginPage';
import { CreateNGO } from './pages/CreateNGO';
import { CreateAnimal } from './pages/CreateAnimal';
import { NGO } from './pages/ViewPages/NGOView';
import { Bichinho } from './pages/ViewPages/AnimalView';
import { ResetPassword } from './pages/ResetPassword';
import { CRUDAnimal } from './pages/CRUDAnimal';
import { Manager } from './pages/Manager';
import { ManagerAnimal } from './pages/ManagerAnimal';
import { ManagerNGO } from './pages/ManagerNGO';
import { About } from './pages/About';

export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/map" exact component={MapPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/create/NGO" exact component={CreateNGO}/>
                <Route path="/create/animal" exact component={CreateAnimal}/>
                <Route path="/ngo/:id" exact component={NGO}/>
                <Route path="/bichinho/:id" exact component={Bichinho}/>
                <Route path="/resetPassword" exact component={ResetPassword}/>
                <Route path="/animalsList" exact component={CRUDAnimal}/>
                <Route path="/manager" exact component={Manager}/>
                <Route path="/manager/animal" exact component={ManagerAnimal}/>
                <Route path="/manager/NGO" exact component={ManagerNGO}/>
            </Switch>
        </BrowserRouter>
    );
}