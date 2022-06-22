import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = ()=>{

    if( !localStorage.getItem('username')) {
        return <LoginForm/>
    }

    return(
        <ChatEngine
            height="100vh"
            projectID="2ade997e-da09-46f8-be0d-6c69f0459e8b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
        />
    )
}
export default App;




























