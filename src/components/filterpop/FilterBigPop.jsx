import React from 'react'
import styles from './Filterpop.module.css'; 
import Select from "react-select"

// function FilterBigPop({filterPopClass, filterpopBgClass}) {
function FilterBigPop({changeFiltterPopState, filterBigPopShow}) {

//alert(showFiltterPop);

const closeFilterPop = () => {
    changeFiltterPopState(false);
document.getElementById("filterBigPop").classList.remove(styles.filterBigPopShow)
document.getElementById("filterBigPopBg").classList.remove(styles.filterBigPopBgShow)

}

const options = [
    {value: "value1", label :"value1"},
    {value: "value2", label :"value2"},
    {value: "value3", label :"value3"},
    {value: "value4", label :"value4"}
]

return (
    <>   
       <div className={`${styles.filterBigPop} ${filterBigPopShow ? styles.filterBigPopShow : ''}`} id="filterBigPop">
        <span className={styles.popClose} onClick={closeFilterPop}>X</span>
       
       <div className={styles.filterInner}>
       <h6 className='mb-3'>Search</h6>
        <article className={`mb-3 ${styles.filterBox1}`}>
            
            <label className="checkbox mb-12"><input type="checkbox" name="" value="" checked id="selectAll" /><span className={styles.heading}>first Name</span></label>
           <Select options={options}  className={`mb-12 ${styles.customSelect}`} />
            <input type="text"  value="Search" />
        </article>
       <ul>
        <li><label className="checkbox"><input type="checkbox" name="" value="" id="selectAll" /><span>Last Name</span></label></li>
        <li><label className="checkbox"><input type="checkbox" name="" value="" id="selectAll" /><span>Email Address</span></label></li>
        <li><label className="checkbox"><input type="checkbox" name="" value="" id="selectAll" /><span>Company Name</span></label></li>
        <li><label className="checkbox"><input type="checkbox" name="" value="" id="selectAll" /><span>Partner Name</span></label></li>
        <li><label className="checkbox"><input type="checkbox" name="" value="" id="selectAll" /><span>Last Login</span></label></li>
       </ul>
       </div>
       <div className={styles.filterBtnHolder}>
        <input type='button' value="Submit" className='btn btn-primary me-3' />
        <input type='button' value="Reset" className='btn btn-outline-primary' />
        </div>
       </div>
       <div className={`${styles.filterBigPopBg} ${filterBigPopShow ? styles.filterBigPopBgShow : ''}`} id="filterBigPopBg"></div>
    </>
  )


// document.getElementById("filterBigPop").classList.remove(styles[filterPopClass])
// document.getElementById("filterBigPopBg").classList.remove(styles[filterpopBgClass])

//   return (
//     <>   
//        <div className={`${styles.filterBigPop} showFiltterPop ? ${styles[filterPopClass]}`} id="filterBigPop"><span className={styles.popClose} onClick={closeFilterPop}>X</span></div>
//        <div className={`${styles.filterBigPopBg} showFiltterPop ? ${styles[filterpopBgClass]}`} id="filterBigPopBg"></div>
//     </>
//   )
}

export default FilterBigPop
