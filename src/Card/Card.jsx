import styles from './Card.module.css'
import Description from '../Description/Description';
import {useState,useCallback} from "react";

function Card(props){
    const [showDes,setShowDes]=useState(false);
    
    const handleShow = useCallback(()=>{
        if(showDes)
        setShowDes(false);
        else
        setShowDes(true);
    })
    return(
        <>
    <div className={styles.biggerBox} onClick={handleShow}>
    <div className={styles.box}>
        <img src={props.data.Poster} alt="poster" />
    </div>
    </div>
    {showDes&&<Description data={props.data} onShow = {handleShow}/>}
    </>);
}

export default Card