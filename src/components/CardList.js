import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const userList = robots.map((user, i) => {
        return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id} />
    }); // Looping all user in robots.js

    return(
        <Fragment>
            {userList}
        </Fragment>
    );
}

export default CardList;