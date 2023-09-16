function btn4_fun(){
    window.location.href="https://dribbble.com/tags/food%20login"

}
export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpeg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn" onClick={btn4_fun}>singup now </button>
            </div>
        </div>
    )
}
