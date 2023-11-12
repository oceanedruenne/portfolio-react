import '../App.css';

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="text">  
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className="link">
                    <a href={props.link} target="_blank">En savoir plus</a>
                </div>
                </div>
            </div>
        </div>   
    )
}