import React from 'react'
import Login from '../Components/Login'
import Registration from '../Components/Registration'
import NavigationBar from './NavigationBar'
import Header from './Header'
import PropertyRender from './PropertyRender'
import PropertyShowcase from './PropertyShowcase'
import Footer from '../Components/Footer'
import AllProperties from './AllProperties'
import {Route, BrowserRouter as Router, Routes ,Navigate} from 'react-router-dom'
import PropertyDetail from '../AdminPanel/PropertyDetail'
import Profile from '../AdminPanel/Profile'
// import UserInquiry from './UserInquiry'
import RealEstateInquiry from './RealEstateInquiry'

const UserHome = () => {
  return (
    <>

   <div>
   <NavigationBar/> 
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="PropertyRender" />} />
          <Route path="PropertyRender" element={<PropertyRender />} />
          {/* <Route path="Inquiry" element={<Inquiry />} /> */}
          <Route path="RealEstateInquiry" element={<RealEstateInquiry />} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='PropertyDetail/:prop_id' element={<PropertyDetail/>}/>
          <Route path='AllProperties' element={<AllProperties/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default UserHome