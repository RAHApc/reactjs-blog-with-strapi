import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import Login from '../components/auth/Login';
import Posts from '../components/Posts';
import UserContext from '../context/UserContext';

const App = () => {
    const posts = useSelector(state => state.posts);
    
    return ( 
        <Fragment>
              <Route path="/login" render={()=><UserContext><Login/></UserContext>} />
            <div className="container my-3">
                <Posts postItems={posts}/>
            </div>
        </Fragment>
     );
}
 
export default App;