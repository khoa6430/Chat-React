import { useState,useEffect } from "react";
import axios from "axios";
const LoginForm = ()=>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const authObject = {'Project-ID' : '2ade997e-da09-46f8-be0d-6c69f0459e8b ',
                            'User-Name' : username, 'User-Secret' : password}
 
        try{
            //username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        }catch(error){
            // error -> try with new username...
            setError('Oops, incorrect credentials.');
        }
    }

    function myGreeting() {
        alert("Logging 2 User in 2 Browser to test\n" + "username : admin | password : admin" 
                + "\nusername : admin2 | password : admin2");
    }
    useEffect(() => {
        setTimeout(myGreeting, 300);
      },[]);
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
                            className='input' placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                            className='input' placeholder="Password" required />
                    <div align='center'>
                        <button type="submit" className="button">
                            
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
        
    );
}
export default LoginForm;









