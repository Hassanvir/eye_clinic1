import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCard from './sections/FeatureCard'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import { Route, Router, Routes } from 'react-router-dom'
import Appointments from './components/Appointments'
import MainLayout from './components/MainLayout'
import AppointmentLayout from './components/AppointmentLayout'

const App = () => {
  return (
    <>

      {/* <Navbar /> */}
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/"
            element={
              <>
                <Hero />
                <ShowcaseSection />
                <LogoSection />
                <FeatureCard />
                <Experience />
                <TechStack />
                <Testimonial />
                <Appointments/>
                {/* <Contact /> */}
              </>
            }
          />
        </Route>
        {/* <Route element={<AppointmentLayout />}>
          <Route path="/appointments" element={<Appointments />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App