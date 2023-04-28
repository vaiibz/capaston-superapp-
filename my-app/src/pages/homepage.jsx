import Poster from '../components/Homepage/Poster.js'
import SignupForm from '../components/Homepage/SignupForm.js'

const Homepage = ()=>{
    return(
        <div style={{display:"flex"}}>
        <Poster/>
        <SignupForm/>
        </div>
    )
}

export default Homepage