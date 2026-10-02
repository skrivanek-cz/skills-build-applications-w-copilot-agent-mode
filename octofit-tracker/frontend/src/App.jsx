import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const navigation = [['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'], ['/teams', 'Teams'], ['/users', 'Athletes'], ['/workouts', 'Workouts']]

function Overview() {
  return <section><p className="eyebrow">OctoFit / Training room</p><h1 className="display-title mb-3">Make your next session count.</h1><p className="intro mb-5">A shared home for activity, friendly competition, and workouts worth showing up for.</p><div className="resource-grid"><NavLink className="resource-card p-4 text-decoration-none text-reset" to="/activities"><span className="stat-number">01</span><h2 className="h4 mt-3">Log the work</h2><p className="text-secondary mb-0">See every run, ride, and strength session in one place.</p></NavLink><NavLink className="resource-card p-4 text-decoration-none text-reset" to="/leaderboard"><span className="stat-number">02</span><h2 className="h4 mt-3">Find your pace</h2><p className="text-secondary mb-0">Keep the leaderboard friendly, visible, and motivating.</p></NavLink><NavLink className="resource-card p-4 text-decoration-none text-reset" to="/workouts"><span className="stat-number">03</span><h2 className="h4 mt-3">Pick a session</h2><p className="text-secondary mb-0">Choose a focused workout for the time you have.</p></NavLink></div></section>
}

export default function App() {
  return <BrowserRouter><div className="app-shell"><nav className="navbar navbar-expand-lg app-nav"><div className="container"><NavLink className="navbar-brand brand-mark" to="/">OCTOFIT</NavLink><div className="navbar-nav flex-row flex-wrap gap-1">{navigation.map(([path, label]) => <NavLink key={path} className="nav-link px-2" to={path}>{label}</NavLink>)}</div></div></nav><main className="page-wrap"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main></div></BrowserRouter>
}