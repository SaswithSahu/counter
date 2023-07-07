import "./index.css"

const EachTestimonial = props =>{
    const{eachTestimonial} = props
    return(
        <li>
            {eachTestimonial.content}
        </li>
    )
}

export default EachTestimonial