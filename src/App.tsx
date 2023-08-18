import { Routes, Route } from "react-router-dom"
import Splash from "./components/Splash/Splash"
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register"
import Header from './components/Navigation/Header.tsx'
import TaskCard from "./components/Tasks/TaskCard.tsx"
import Dashboard from "./components/Dashboard/Dashboard"
import ViewTasks from "./components/Tasks/ViewTasks"
import SingleTask from "./components/Tasks/SingleTask"
import NotFound from "./components/NotFound/NotFound"

const App = () => {
  const options: string[] = ['personal', 'team']
  const subOptions: string[] = ['todo', 'pending', 'done']

  return (
    <section id='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<TaskCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {
          options.map(option => (
            <Route key={option} path={`/tasks/${option}`} element={<ViewTasks />} />
          ))
        }
        {
          subOptions.map(option => (
            options.map(opt => (
              <Route key={opt} path={`/tasks/${opt}/${option}`} element={<ViewTasks />} />
            ))
          ))
        }
        <Route path="/tasks/task/:id" element={<SingleTask />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section >
  )
}

export default App