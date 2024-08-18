import classes from './ChoresList.module.css';
export default function ChoresList () {
   return ( 
      <div>
         <h3 className = {classes.choresHeading}>Chores</h3>
         <p className = {classes.choresText}>Pickup Birthday Cake!</p>
         <p className = {classes.choresText}>Order Birthday Card from Amazon</p>
         <p className = {classes.choresText}>Take Brandy to vet</p>
      </div>
   )
}