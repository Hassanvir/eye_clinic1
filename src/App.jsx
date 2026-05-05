import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import FeatureCard from './sections/FeatureCard'
import { Route, Routes } from 'react-router-dom'
import Appointments from './components/Appointments'
import MainLayout from './components/MainLayout'
import AnimatedCounter from './components/HeroModel/AnimatedCounter'
import LoginPage from './components/LoginPage'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/"
          element={
            <>
              <Hero />
              <AnimatedCounter />
              <ShowcaseSection />
              <FeatureCard />
              <Appointments />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
