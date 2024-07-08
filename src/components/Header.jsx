import headerImg from "../assets/images/header.jpg"

export default function Header() {
    return (
        <div>
            {/* <img style={{width: "100%"}} src="/assets/images/header.jpg"/> */}
            <img style={{width: "100%"}} src={headerImg}/>
        </div>
    )
}