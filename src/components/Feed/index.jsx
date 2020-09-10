import React from 'react';
import './Feed.css';
import StoryReel from '../StoryReel';
import MessageSender from '../MessageSender';
import Post from '../Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
 
            <Post 
                profilePic="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/118732314_2757711467834121_3580985112925782279_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=HED7bpilSd0AX9suTuL&_nc_ht=scontent-sin6-2.xx&oh=5a3104f369650e8b3384b1c1ccbae686&oe=5F800FF4"
                message="Sống là phải cho đi! Hãy cho đi tất cả những gì bạn có, để rồi hối hận nhận ra rằng đòi lại sẽ rất khó :V"
                timestamp="This is timestamp"
                username="Võ Tân"
                image="https://yt3.ggpht.com/a/AATXAJx5j5f6uW13Pge-jPDurAuyEVgbR67ejxIrA0On=s900-c-k-c0xffffffff-no-rj-mo"
            />
            <Post 
                profilePic="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/118732314_2757711467834121_3580985112925782279_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=HED7bpilSd0AX9suTuL&_nc_ht=scontent-sin6-2.xx&oh=5a3104f369650e8b3384b1c1ccbae686&oe=5F800FF4"
                message="Muốn mặn thì ăn muối, muốn đắm đuối thì ăn em"
                timestamp="This is timestamp"
                username="Võ Tân"
                image="https://i.pinimg.com/originals/fe/ba/ea/febaeafc6efd90e86e1dc26f3ae6c3f9.jpg"
            />

        </div>
    )
}

export default Feed;
