import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"



function Chat(props) {
  const {user} = props
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  
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
  const [messages, loading] = useCollectionData(
    collection(db, 'chat'),{}
  )

  return (
    <section className="chat">
      <div className="chat__content"></div>
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
