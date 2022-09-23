import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';

function Publications() {
  return (
    <div>
        <NavBar currentPage="publications" />
        <div className="background">
          <div id="site-content">
            
            <main className="main-content">
              
              <div className="hero" style={{ background: "rgba(0, 0, 0, .7)" }}>
                <div className="container">
                  <div className="row">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  </div>
                </div>
              </div>
              
            </main>

          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Publications;