import '../css/Project.css';


const colors = {
    'rust' : [120, 17, 17],
    'clap' : [104, 161, 103],
    'html': [240, 157, 5],
    'css': [5, 134, 240],
    'flask' : [95, 186, 182],
    'jinja' : [230, 14, 14],
    'javascript' : [247, 235, 5],
    'python' : [5, 49, 247],
    'react' : [185, 5, 245],
    'express' : [207, 141, 27],
    'mongodb' : [32, 199, 48],
    'jbase basic' : [27, 97, 16],
    'chart.js' : [5, 230, 255]
}


/**
 * 
 * @param {string} text The text inside of the given pill. MUST HAVE CORRESPONDING 'colors' value
 * @returns A pill element
 */
const Pill = ({ text }) => {
    const rgb = colors[text.toLowerCase()];
    const bg = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`;
    const border = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;

    return (
        <div className="pill" style={{backgroundColor: bg, borderColor: border}}>
            {text}
        </div>
    )
}

/**
 * 
 * @param {*} name 
 * @param {*} description 
 * @param {*} technologies 
 * @param {*} url
 * @param {*} image
 * @returns 
 */
const Project = ({ name, description, technologies, url, image }) => {
    const handleClick = (e) => {
        if (url) {
            window.open(url, '_blank');
        }
    }

    return (
        <div className="project-container" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '0px', cursor: (url ? 'pointer' : 'default')}} onClick={handleClick}>
            <div className="project-top">
                <img src={image} alt="capture from project" style={{position: 'relative', left: '-30px', top: '-30px'}}/>
            </div>
            <div className="project-bottom">
                <div className="project-name">
                    {name}
                </div>
                <div className='pill-container inline-flex-center'>
                    {technologies.map((tech, idx) => (
                        <Pill key={idx} text={tech} />
                    ))}
                </div>
                <div className="project-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Project;