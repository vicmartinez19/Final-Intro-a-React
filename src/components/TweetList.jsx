import React from 'react';
import Tweet from './Tweet.jsx'

function TweetList({ tweets, onLike, onDelete, currentUser }) {
  if (tweets.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', color: '#8899a6' }}>
        No hay tweets publicados todavía. ¡Sé el primero en compartir algo!
      </div>
    );
  }

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLike={onLike}
          onDelete={onDelete}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

export default TweetList;