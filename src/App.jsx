import React, { useState } from 'react';
import Table from './components/Table';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Leftnav from './components/leftNav/Leftnav';
import FilterBigPop from './components/filterpop/FilterBigPop';

function App() {

//let navTrigger = document.getElementById('nav_trigger');

// const [filterPopStyle, setFilterPopStyle] = useState(false)
// const [filterPopBgStyle, setFilterPopBgStyle] = useState(false)

const [filterBigPopShow, setFilterBigPopShow] = useState(false)

const toggleFiltterPop = (b) => {
  let slideContent = b.currentTarget.children[1];

  if (slideContent.style.height === '0px' || slideContent.style.height === '') {
    slideContent.style.height = slideContent.scrollHeight + 'px';  // Slide Down
    slideContent.classList.add('filterPopShow');
  } else {
    slideContent.style.height = '0';  // Slide Up
    slideContent.classList.remove('filterPopShow');
  }
}

const showFiltterPop = () => {
  setFilterBigPopShow(!filterBigPopShow);
}

const changeFiltterPopState = (a) => {
  setFilterBigPopShow(a);
}

// navTrigger.addEventListener('click', function(){
//   this.classList.toggle("ntActive");
//   navSlider.classList.toggle("navActive");
//   contHolder.classList.toggle("expandNav");
//   footer.classList.toggle("expandNav");
// })

  return (
    <>
   
   <Header />

    <Leftnav />

    <main id="contHolder">
     
      <div className="mainContHolder">   

       

        <div className=" box mb-3">

        <div className="pageHead"><h1 className='mb-0'>User Management</h1><span>Manage users & their account and permission here.</span></div>
          
        
          <div className='tableFilter'>   
          <strong>User List</strong>         
            <div>
            <aside>
              <div className="totalFilter">Total <span>20 Users</span></div>
            <div className="filter">
              <div className="filterItem" onClick={toggleFiltterPop}><span>Status All</span>
              <div className='filterPop'><strong>Status</strong><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a></div>
              </div>
              <div className="filterItem"><span>User Type - All</span></div>
              <div className="filterItem"><span>Access Profile - All</span></div>
              </div>
              </aside>
          <aside> <a href="#" className='btn btn-primary'>Add User +</a>
          <span className='filterPopTrigger' onClick={showFiltterPop}>Filter</span>
          <span className='moreLinkTrigger'>more Link</span>
          </aside>
            </div>
          </div>          
        </div>



    
   <Table />

  
              
      </div>

    </main>
    <Footer />
    
    {/* <FilterBigPop 
    filterPopClass={filterPopStyle ? 'filterBigPopShow' : ''} 
    filterpopBgClass={filterPopBgStyle ? 'filterBigPopBgShow' : ''} 
    /> 
    {filterBigPopShow &&}*/}
    <FilterBigPop changeFiltterPopState={changeFiltterPopState} filterBigPopShow={filterBigPopShow} />
    
    </>
  )
}

export default App
