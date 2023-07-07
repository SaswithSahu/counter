import {Component} from "react"
import {AiOutlineSearch} from "react-icons/ai"

import EachTestimonial from "../EachTestimonial"

import "./index.css"


const listOfTestimonials = [
    {
        id:"T1",
        content:"At CCBP 4.0, I improved my problem-solving skills by honing my logical ability. Trainers here have changed how I look at problems. They taught me to think in multiple directions, an essential quality to become a successful developer. I have built a strong command over C++, MY SQL, Python, DSA. I've also started learning competitive programming. So I’m able to clear interviews comfortably."
    },
    {
        id:"T2",
        content:"With the support of CCBP 4.0, I am an Associate Software Engineer at TCS! After Mechanical Enigineering, I worked as a pay role executive, but later I decided to shift toward the IT sector and enrolled in NxtWave CCBP 4.0. CCBP 4.0 provides a well-structured curriculum that gives clarity to a learning path. I gained in-depth practical skills with the help of coding assignments and became proficient in writing simple codes for any complex problems effortlessly."
    },
    {
        id:"T3",
        content:"Bite-sized training helped me learn advanced skills easily. As I moved further into the course, my curiosity to learn grew and I began improving in my weak areas. Mentors cleared my doubts quickly. Each question in the tests was meticulously curated to test our core programming skills. I want CCBP 4.0 to spread more so that not just college students but even school students could enjoy learning."
    },
    {
        id:"T4",
        content:"In my final year of college, I was anxious about my placement. But after joining CCBP 4.0, I gained excellent problem-solving skills and improved my confidence. I felt every module in CCBP 4.0 is designed to improve my thought process. NxtWave’s training methodology is quite unique and different from other training platforms. I got great support from my mentor when I was struggling."
    },
    {
        id:"T5",
        content:"With less effort, you learn the maximum at CCBP 4.0! I joined the program in 2nd year of my college. I only studied for 3-4 hrs a week. But just in a month, I could see a major difference. I gained strong fundamentals in programming. Also, I didn't have clarity of thoughts earlier. My mentor helped me gain confidence and clarity towards my goal. You get a lot of opportunities for projects and internships."
    },
    {
        id:"T6",
        content:"I’m a Mechanical graduate. I switched my career towards IT and joined CCBP 4.0 to learn programming. I started off as a beginner, but within a few weeks after joining here I started to build projects on my own. CCBP 4.0 made me stronger in coding. Though I’m a newbie to this field, I got placed in a renowned product-based company."
    },
    {
        id:"T7",
        content:"From an M.tech in Mechanical Engineering -> Software Engineer! Upon my friend’s advice, I took a step toward the IT sector. Coming from a Civil Engineering background, I had zero programming skills. But with NxtWave CCBP 4.0, I built strong tech skills by learning each concept from scratch. Also, the placement support team continuously improved my interview skills and helped me land a job at TCS."
    },
    {
        id:"T8",
        content:"Earlier, I couldn't find a good source to learn from scratch. With CCBP 4.0, I could understand every topic in detail. The curriculum is so organised that even a person with zero coding knowledge can learn without hiccups. You gain the right dose of knowledge at each step of your learning progress. Learning every concept along with practical application intrigued me."
    },
    {
        id:"T9",
        content:"The program helped me in developing my coding and problem-solving skills. Especially, the competitive programming track was well-structured. It covered important topics like data structures, algorithms, and dynamic programming right from the basics, which were the key to crack my tech interview. I’m grateful to the team for creating such an excellent learning platform."
    },
    {
        id:"T10",
        content:"I am a Mechanical graduate who wanted to settle in the IT sector. So to become industry-ready, I enrolled in the NxtWave CCBP 4.0. I learned programming from the highly qualified trainers that any student can dream of. Receiving timely feedback from the placement support team, I enhanced my interview skills and got placed with a handsome package."
    }
]

class Application extends Component{
    state = {searchValue : ""}
    
    updateSearchValue = (event) =>{
            this.setState({searchValue:event.target.value})
    }

    render(){
        const {searchValue} = this.state
        const updatedList = listOfTestimonials.filter(eachTestimonial => eachTestimonial.content.includes(searchValue))
        return(
            <div className="main-container">
                <div className="searchContainer">
                   <input type = "search" placeholder="Search" value={searchValue} onChange={this.updateSearchValue}/>
                   <button><AiOutlineSearch/></button>
                </div>
                <ul>
                    {updatedList.map(each =>(<EachTestimonial eachTestimonial = {each} key = {each.id}/>))}
                </ul>
            </div>
        )
    }
}

export default Application