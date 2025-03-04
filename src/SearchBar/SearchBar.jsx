import styles from './SearchBar.module.css'
import { useState} from "react";
import Card from '../Card/Card';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx'
function SearchBar(){
    const key = "9556cd78";
    const [searchTarget,setTarget] = useState("");
    const [objectMovie,setMovie]=useState({});
    const [cardShow,setCardShow] = useState(false);
    const [errorShow,setErrorShow] = useState(false); 
   
    function handleTarget(){
        setTarget(event.target.value);
    }
    async function goSearch(){
        try{
            const data = await getData();
            console.log(data);
            const{Response: result}=data;
            if(result=="False"){
                throw new Error("Could not find movie");
            }
            displayData(data);
            setErrorShow(false);
            setCardShow(true);
            
        }catch(error){
            setErrorShow(true);
            setCardShow(false);
            
        }
       
    }

    async function getData(){
        const apiURL = `http://www.omdbapi.com/?apikey=${key}&t=${searchTarget}`;
        const kq = await fetch(apiURL);
        console.log(kq);
        if(!kq.ok) throw new Error("Could not fetch data");
        
        return await kq.json();
    }

    function displayData(data){
        const {Title: movieName,
            Plot: moviePlot,
            imdbRating: movieRate,
            Year: movieYear,
            Runtime:movieLength,
            Genre:movieGenre,
            Poster:movieImg}=data;
        
        setMovie(m=>({...m,Title: movieName,
                    Plot: moviePlot,
                    imdbRating: movieRate,
                    Year: movieYear,
                    Runtime:movieLength,
                    Genre:movieGenre,
                    Poster:movieImg}));

    }

    return(
    <>
    <div className={styles.box}>
        <div className={styles.smallBox}>
        <input type="text" value={searchTarget} onChange={handleTarget}></input>
        <span className={styles.searchIcon} onClick={goSearch}></span>
        </div>
    </div>
    {cardShow && <Card data={objectMovie}/>}
    {errorShow && <ErrorMessage/>}
    
    </>);
}
export default SearchBar