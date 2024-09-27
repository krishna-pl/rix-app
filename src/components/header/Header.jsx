import React from 'react'
import logo from '../../assets/images/rix-logo.svg';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <aside>
      <a href="#"><img src={logo} alt="" title="" className={styles.logo} /></a>
      <div className={`${styles.custom_select_menu} ms-4`}>
        <b className={styles.servicesMenuIcon}>Services</b>
     {/* <select className="selectMenu" name="">
     <option style="display:none;"></option>
     <option value="Year 2018">Year 2018</option>
         <option value="Year 2019">Year 2019</option>
         <option value="Year 2020">Year 2020</option>
         <option value="Year 2021">Year 2021</option>
         <option value="Year 2022">Year 2022</option>
         <option value="Year 2023">Year 2023</option>
         <option value="Year 2024">Year 2024</option>
         <option value="Year 2025">Year 2025</option>
     </select> */}
       </div>
      </aside>
    <aside className={styles.topRight}>
      <div className={`${styles.custom_select_menu} me-4`}>
        <b className={styles.selectCompany}>Select Company</b>
     {/* <select className="selectMenu" name="">
     <option style="display:none;"></option>
     <option value="Year 2018">Year 2018</option>
         <option value="Year 2019">Year 2019</option>
         <option value="Year 2020">Year 2020</option>
         <option value="Year 2021">Year 2021</option>
         <option value="Year 2022">Year 2022</option>
         <option value="Year 2023">Year 2023</option>
         <option value="Year 2024">Year 2024</option>
         <option value="Year 2025">Year 2025</option>
     </select> */}
       </div>
       <a href="#" className={`${styles.adminLink} me-4`}>Admin</a>
       <div className={`${styles.notification} me-4`}><span>20</span></div>
      <span className={styles.userName}>SM</span>
      </aside>
    </header>
    
  )
}

export default Header
