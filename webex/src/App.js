import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeWraper from './page/HomeWraper';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import LoginPage from './components/LoginPage/LoginPage';
import CourseRegistrationPage from './components/CourseRegistrationPage/CourseRegistrationPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProfilePage from './components/profilePage/ProfilePage';
import { Dashboard } from './components/profilePage/Dashboard/Dashboard';
import CurrentLessons from './components/profilePage/Current_lessons/CurrentLessons';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeWraper />}>
          <Route index element={<HomePage />} />
          <Route path="programing" element={<h1>programing</h1>} />
          <Route path="projects" element={<ProjectsPage />}>
            <Route path=":idd" element={<ProjectsPage />} />
          </Route>
          <Route path="aboteus" element={<h1>aboteus</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
          <Route path="courses-registration" element={<CourseRegistrationPage />} />
          <Route path="registr" element={<Register />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profilePage" element={<ProfilePage />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route  path="Currentlessons" element={<CurrentLessons />} />
          </Route>
        </Route>

        <Route path="*" element={<div>ejy chka</div>} />
      </Routes>
    </div>
  );
}

export default App;
