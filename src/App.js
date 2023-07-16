import './App.css';
import Cell from './components/cell/Cell';

function App() {
  var quantity = [];

for (var i = 1; i <= 1566; i++) {
  quantity.push(i);
}
  return (
    <div className="container">
      {quantity.map((item,i)=>{
        return(
          <Cell/>

        )

      })}
      
    </div>
  );
}

export default App;
