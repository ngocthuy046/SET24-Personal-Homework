import React from 'react';

const user = {
    name: 'Nham Gia Luan',
    imageUrl: 'https://kenh14cdn.com/203336854389633024/2021/5/15/14307271036862545081261233756122211654252652o-1-16119909310731270907249-16210737247851606413857.jpg',
    imageSize: 300,
}

export default function Profile() {
    return (
        <div class="profile">
            <h1>Displaying data </h1>
            <h2>{user.name}</h2>
            <img
                src={user.imageUrl}
                alt="Profile"
                style={{
                    width: user.imageSize,
                }}
            />
        </div>
    )
}
