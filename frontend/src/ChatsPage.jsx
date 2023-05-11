import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '03633f21-97a7-4f9c-9d14-d982be1d2721', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
}

export default ChatsPage

// import React from 'react';
// import { PrettyChatWindow } from 'react-chat-engine-pretty';

// const ChatsPage = (props) => {
//         return (
//             <div style={{ height: '100vh' }}>
//                 <PrettyChatWindow
//                     projectId='03633f21-97a7-4f9c-9d14-d982be1d2721'
//                     username={props.user.username}
//                     secret={props.user.secret}
//                     style={{ height: '100%' }}
//                 />
//             </div>
//         );
//     }

// export default ChatsPage