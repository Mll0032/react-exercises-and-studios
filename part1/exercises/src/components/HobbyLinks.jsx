import React from 'react';
import classes from './MovieList.module.css';

class HobbyLinks extends React.Component {
   render() {
      const HobbyLinks = ["https://boardgamegeek.com/", "https://www.youtube.com/"];
      return (
         <div>
            <h3>My Favorite Hobby Websites</h3>
            <a href={HobbyLinks[0]} >BoardGameGeek</a><br />
            <a href={HobbyLinks[1]} >YouTube</a>
        </div>

      );
   }
}

export default HobbyLinks;