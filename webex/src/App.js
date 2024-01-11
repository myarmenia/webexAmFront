import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeWraper from './page/HomeWraper';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import LoginPage from './components/LoginPage/LoginPage';
import CourseRegistrationPage from './components/CourseRegistrationPage/CourseRegistrationPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomeWraper/>}>
              <Route index element={<HomePage/>}/>
              <Route path='programing'element={<h1>programing</h1>}/>
              <Route path='projects'element={<ProjectsPage/>}>
                <Route path=':idd'element={<ProjectsPage/>}/>
              </Route>
              <Route path='aboteus'element={<h1>aboteus</h1>}/>
              <Route path='contact'element={<h1>contact</h1>}/>
              <Route path='courses-registration' element={<CourseRegistrationPage/>}/>
              <Route path='registr' element={<Register/>}/>
              <Route path='login' element={<LoginPage  />}/> 
              <Route path='resetPassword' element={<ResetPasswordPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
