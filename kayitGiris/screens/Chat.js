import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import firebase from 'firebase';

const Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);



  // console.warn(route.params.id);


  useEffect(() => {
    firebase.firestore().doc('chats/' + route.params.id)
      .onSnapshot(doc => {
        setMessages(doc.data().messages.map(messages=>({
          ...messages,
          createdAT:messages.createdAT.toDate(),
        })));
      });
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       // avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ])
  }, [route.params.id]);

  const onSend = useCallback((m = []) => {
    firebase
      .firestore()
      .doc('chats/' + route.params.id)
      .set({ messages: GiftedChat.append(messages, m) }, { merge: true })
  }, [route.params.id,messages]);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}


export default Chat;