import React from 'react';

const AppHeader = ({liked, AllPost}) => {
    return (
        <div className="app-header d-flex">
            <h1>Alexandr Arsenyev</h1>
            <h2>{AllPost} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;