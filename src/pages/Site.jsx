import React from 'react'
import Navbar from '../components/shared/Navbar'
import SideBar from '../components/site/SideBar'
import Footer from '../components/shared/Footer'
import Content from '../components/site/Content'

const Site = () => {
  return (
    <>
        <div className="row" id="header">
            <div className="col-12">
                <Navbar />
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <SideBar />
            </div>
            <div className="col-8">
                <Content />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Site