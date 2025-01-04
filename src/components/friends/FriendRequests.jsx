import { useState, useEffect } from 'react';
import '../../styles/friends.css';


const FriendRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests([
      { id: 1, name: 'Alice Johnson', avatar: null, mutualFriends: 2 },
      { id: 2, name: 'Bob Wilson', avatar: null, mutualFriends: 4 },
    ]);
  }, []);

  const handleAccept = async (requestId) => {
    setRequests(requests.filter(request => request.id !== requestId));
  };

  const handleReject = async (requestId) => {
    setRequests(requests.filter(request => request.id !== requestId));
  };

  return (
    <div className="friend-requests-container">
      <h2>Friend Requests</h2>
      {requests.length === 0 ? (
        <p className="no-requests">No pending friend requests</p>
      ) : (
        <div className="requests-list">
          {requests.map(request => (
            <div key={request.id} className="request-item">
              <div className="request-avatar">
                {request.avatar ? (
                  <img src={request.avatar} alt={request.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {request.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="request-info">
                <h3>{request.name}</h3>
                <p>{request.mutualFriends} mutual friends</p>
              </div>
              <div className="request-actions">
                <button 
                  onClick={() => handleAccept(request.id)}
                  className="accept-button"
                >
                  Accept
                </button>
                <button 
                  onClick={() => handleReject(request.id)}
                  className="reject-button"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default FriendRequests