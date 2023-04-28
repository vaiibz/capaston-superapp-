import styles from   './Poster.module.css'
import BgImage from '../../assets/image 13.png'
const Poster = ()=>{
    return(
        <> 
            <div className={styles.Prompt}>
                <p>Already Have an Account ?</p>
                <button>LOGIN</button>
            </div>
            <div className={styles.text}>
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={BgImage} alt='SignupBg'/>
        </>
    )
}

export default Poster