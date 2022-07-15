import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login"

function App(props) {

  return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/*postData={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}*/}
            <Route path='/dialogs' element={<DialogsContainer /> }/>
            <Route path='/profile/:userId' element={<ProfileContainer /> }/>
            <Route path='/profile' element={<ProfileContainer /> }/>
            <Route path='/users' element={<UsersContainer />}/>
            <Route path='/login' element={<LoginPage />}/>s
          </Routes>
        </div>
      </div>

  );
}


export default App;
