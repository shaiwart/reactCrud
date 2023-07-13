import {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {
    const [_name, setName] = useState(''); 
    const [_email, setEmail] = useState(''); 

    const navigate = useNavigate(); 

    async function handleSubmit(e) {
        e.preventDefault(); 

        if(!_name || !_email) {
            return; 
        }
        setUser({name: _name, email: _email}); 
        navigate('/dashboard'); 
    }

    return(
        <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
    )

}