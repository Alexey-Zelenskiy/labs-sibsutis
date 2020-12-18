import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './app.css'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div style={{marginLeft: 10, marginRight: 10}}>

	<h1><p style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
    Сибирский государственный университет
    телекоммуникаций и информатики
    </p></h1>
 <b>Группа ПБТ-9342</b>
 <p style={{textAlign: 'right'}}>Зеленский Алексей</p>
 <p></p><div className='blockquote'>О сколько нам открытий чудных<br/>
 Готовят просвещенья дух<br/>
 И опыт, сын ошибок трудных,<br/>
 И гений, парадоксов друг,<br/>
 И случай, бог изобретатель.<br/></div><p></p>
 <br/>
 <br/><p style={{textAlign: 'right'}}>А.С Пушкин</p> 
    </div>
  );
}

export default App;
