import React from 'react'
import styles from './Leftnav.module.css'

function Leftnav() {

    
function navTrigger() {

    let navSlider = document.getElementById('nav_slider');
    let contHolder = document.getElementById('contHolder');
    let footer = document.getElementById('footer');
  
    document.getElementById('nav_trigger').classList.toggle([styles.ntActive]);
    navSlider.classList.toggle([styles.navActive]);
    document.getElementById('navigation').classList.toggle([styles.navActive]);
    contHolder.classList.toggle("expandNav");
    footer.classList.toggle([styles.expandNav]);
  
  }
  

  
    const subNavTrigger = (a) => {
        a.target.closest('li').classList.toggle([styles.subNavActive]);
      const w = a.currentTarget.firstElementChild
      
      let slideContent = a.currentTarget.children[1];
      
      if (slideContent.style.height === '0px' || slideContent.style.height === '') {
        slideContent.style.height = slideContent.scrollHeight + 'px'; 
      } else {
        slideContent.style.height = '0';  
      }
      
      };

  return (
    
    <nav id="nav_slider">
      <span className={styles.nav_trigger} id="nav_trigger" onClick={navTrigger}></span>
      <ul className={styles.navigation} id="navigation">
        <li className={`${styles.user_management} ${styles.umA}`}><span>User Management</span></li>
        <li className={`${styles.subNavTrigger} ${styles.global_masters}`} onClick={subNavTrigger} ><span>Global Masters</span>
            <ul className={styles.subNav} id="subNav">
            <li>Collection Template</li>
            <li>Business Partners</li>
            </ul>
        </li>
      </ul>
      
      
    </nav>
  )
}

export default Leftnav
