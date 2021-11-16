import { useState, useEffect} from "react";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore"



function Chat(props) {
  const {user} = props
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const db = getFirestore();

  /* Отправка данных */
  const sendMessage = async () => {
    
    await addDoc(collection(db, 'chat'), {
      uid: user.uid,
      user: user.displayName,
      photo: user.photoURL,
      text: value,
      createAt: serverTimestamp()
    });
    setValue(''); 
  };

  /* Получение данных */
  useEffect(() => {
    const getData = query(collection(db, 'chat'))
    onSnapshot(getData, (querySnapshot) => {
      /* перевожу объекты в массив */
      var arr = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.data().createAt, " => ", doc.data());
        arr.push(doc.data());
      })
      /* сортирую по дате */
      arr.sort((a,b) => 
        (a.createAt - b.createAt)
      )
      /* добавляю в стэйт */
      setMessages(arr);
  });
  }, [db])

  
  return (
    <section className="chat">
      <div className="chat__content">
      {messages.map(
         (item)  => (
          item.user === user.displayName ? 
          <div className="chat__item chat__item-current" key={item.createAt} id={item.createAt}>
            <div className="chat__item-photo">
              <img src={item.photo} alt={item.user}/>
            </div>
            <div className="chat__item-content">
              
              <p className="chat__item-title">{item.user}</p>
              <p className="chat__item-text">{item.text}</p>
            </div>
          </div>
          :          
          <div className="chat__item" key={item.createAt} id={item.createAt}>
            <div className="chat__item-photo">
              <img src={item.photo} alt={item.user}/>
            </div>
            <div className="chat__item-content">
              
              <p className="chat__item-title">{item.user}</p>
              <p className="chat__item-text">{item.text}</p>
            </div>
          </div>
         )
      )}
      </div>
      <div className="chat__logic">
        <textarea
          className="chat__textarea"
          placeholder="..."
          value={value}
          onChange={event => setValue(event.target.value)}
        ></textarea>
        <button className="chat__send" onClick={sendMessage}>Отправить</button>
      </div>
    </section>
  );
}

export { Chat };
