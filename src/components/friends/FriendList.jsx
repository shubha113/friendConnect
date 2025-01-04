import { useState, useEffect } from 'react';
import '../../styles/friends.css';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends([
      { id: 1, name: 'John Doe', avatar: null, mutualFriends: 5 },
      { id: 2, name: 'Jane Smith', avatar: null, mutualFriends: 3 },
    ]);
  }, []);

  const handleUnfriend = (friendId) => {
    setFriends(friends.filter(friend => friend.id !== friendId));
  };

  return (
    <div className="friend-list-container">
      <h2>My Friends</h2>
      {friends.length === 0 ? (
        <p className="no-friends">No friends added yet</p>
      ) : (
        <div className="friends-grid">
          {friends.map(friend => (
            <div key={friend.id} className="friend-item">
              <div className="friend-avatar">
                {friend.avatar ? (
                  <img src={friend.avatar} alt={friend.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {friend.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="friend-info">
                <h3>{friend.name}</h3>
                <p>{friend.mutualFriends} mutual friends</p>
              </div>
              <button 
                onClick={() => handleUnfriend(friend.id)}
                className="unfriend-button"
              >
                Unfriend
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendList