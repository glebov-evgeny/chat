import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"

function Chat(props) {
  const {user} = props
  const [value, setValue] = useState('');

  const db = getFirestore();

  const sendMessage = async () => {
    await addDoc(collection(db, "chat"), {
      uid: user.uid,
      user: user.displayName,
      photo: user.photoURL,
      text: value,
      // createAt: firestore.FieldValue.serverTimestamp()
    });
    setValue('')
  };

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
