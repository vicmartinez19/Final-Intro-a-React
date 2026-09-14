import React from 'react';

function Tweet({ tweet, onLike, onDelete, currentUser }) {
  const esAutor = currentUser && currentUser.username === tweet.author;

  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={tweet.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"}
            alt={tweet.author}
            className="avatar-sm"
          />
          <div>
            <span className="tweet-author">{tweet.author}</span>
            <span className="tweet-handle">@{tweet.author.toLowerCase().replace(/\s+/g, '')}</span>
          </div>
        </div>
        <span style={{ fontSize: '0.8rem', color: '#8899a6' }}>{tweet.date}</span>
      </div>

      <p className="tweet-content">{tweet.text}</p>

      <div className="tweet-actions">
        <button
          className={`btn-like ${tweet.likes > 0 ? 'liked' : ''}`}
          onClick={() => onLike(tweet.id)}
        >
          {tweet.likes > 0 ? '❤️' : '🤍'} {tweet.likes}
        </button>

        {esAutor && (
          <button
            onClick={() => onDelete(tweet.id)}
            style={{ background: 'transparent', color: '#8899a6', fontSize: '0.8rem', marginLeft: 'auto' }}
            title="Eliminar tweet"
          >
            🗑️ Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

export default Tweet;