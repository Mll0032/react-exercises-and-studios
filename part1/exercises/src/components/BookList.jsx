export default function BookList() {
   let pageTitle = "Matthew's Top Books";
   let book1 = "https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81-LvK5eDTL._SY522_.jpg";
   let book3 = "https://i.thriftbooks.com/api/imagehandler/m/88FBA27FAB91EDE99F55B7AAC359D2AFC85B28D8.jpeg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img className="photo" src={book1} style={{height:150, width: 100}} alt="Fourth Wing: Rebecca Yarros" />
         <img className="photo" src={book2} style={{height:150, width: 100}} alt="Pandemonium: Warren Fahy" />
         <img className="photo" src={book3} style={{height:150, width: 100}} alt="Legend of the Dragonrealm: Richard A Knaak"/>
      </div>      
   );
}