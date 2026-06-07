import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import FeatureCard from './sections/FeatureCard'
import { Route, Routes } from 'react-router-dom'
import Appointments from './components/Appointments'
import MainLayout from './components/MainLayout'
import AnimatedCounter from './components/HeroModel/AnimatedCounter'

const App = () => {
  return (
    <Routes>
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
