import styles from './Description.module.css'

function Description({onShow,data}){

    return(<div className={styles.bigBox}>
        <div className={styles.box}>
            
            <div className={styles.imgBox}>
                
                <img src={data.Poster} alt="poster" />
                <p>{data.imdbRating}/10</p>
            </div>
            
            <div className={styles.textBox}>
                <h1>{data.Title}</h1>
                <p>Genre: {data.Genre}</p>
                <p>Year: {data.Year}</p>
                <p>Run time: {data.Runtime}</p>
                <p>Plot: {data.Plot}</p>
            </div>
            <span className={styles.xMark} onClick={onShow}></span>
        </div>

    </div>);
}
export default Description