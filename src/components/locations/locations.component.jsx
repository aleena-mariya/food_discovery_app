import React from 'react';
import './locations.styles.scss';
import {Link} from 'react-router-dom'

const Locations = ({title, imageUrl}) => (
    <div style= {{
        backgroundImage: `url(${imageUrl})`
    }}  
    className='locations'>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <Link className="subtitle" to="/locationpage">
                    <span className='subtitle'> Hotels </span>
                    </Link>
                </div>
            </div> 
)
export default Locations;