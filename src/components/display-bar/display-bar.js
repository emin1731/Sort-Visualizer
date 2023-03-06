import './display-bar.css'


const DisplayBar = ({ index, height, colorKey, width }) => {

    const colors = ['#00ADB5', '#ff304f', '#83e85a'];
    // const colors = ['#112D4E', '#3F72AF', '#6200B5'];
    let barStyle = {
		background: colors[colorKey] || '#00ADB5',
        height: height,
        width: width
	};


    return(
        <div className='bar' style={barStyle}>

        </div>
    )
}

export default DisplayBar