import React, { UseContext } from 'react';
import { Redirect } from '@reach/router';
import { UserContext } from '../App';

const Content = () => {
    const [user] = useContext(userContext);
    if (!user.accesstoken) return <Redirect from='' to='login' notthrow/>
    return <div>This is the content</div>
}

export default Content;