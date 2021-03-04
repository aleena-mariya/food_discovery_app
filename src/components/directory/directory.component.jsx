import React from 'react';
import NewsArticles from '../locations/locations.component';
import './directory.styles.scss';

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Hyderabad',
                  imageUrl: 'https://i.ibb.co/1QsCj8f/the-palm-962785.jpg',
                  id: 1
                },
                {
                  title: 'Banglore',
                  imageUrl: 'https://i.ibb.co/CzDynLY/cafe-3537801.jpg',
                  id: 2
                },
                {
                    title: 'Kochi',
                    imageUrl: 'https://i.ibb.co/nc1hNC1/sunset-2611910.jpg',
                    id: 2
                  }
              ]
        }
    }

    render() {
        return(
            <div className='directory'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <NewsArticles key={id} title={title} imageUrl={imageUrl} />
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;