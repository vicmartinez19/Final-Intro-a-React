import React from 'react';
import TweetList from '../components/TweetList';

function Profile({ user, tweets, onLike, onDelete }) {
  const misTweets = tweets.filter((t) => t.author === user.username);
  const totalLikesRecibidos = misTweets.reduce((acc, t) => acc + t.likes, 0);

  return (
    <div className="twitter-container">
      <div className="profile-card">
        <img
          src={user.avatar}
          alt={user.username}
          className="profile-avatar-lg"
        />
        <h2 style={{ color: '#eff3f4', fontSize: '1.5rem', marginBottom: '4px' }}>
          {user.username}
        </h2>
        <p style={{ color: '#1d9bf0', fontSize: '0.9rem', marginBottom: '12px' }}>
          @{user.username.toLowerCase().replace(/\s+/g, '')}
        </p>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '16px' }}>
          {user.bio}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', borderTop: '1px solid #38444d', paddingTop: '16px', fontSize: '0.9rem', color: '#8899a6' }}>
          <div>
            <strong style={{ color: '#eff3f4' }}>{misTweets.length}</strong> Tweets
          </div>
          <div>
            <strong style={{ color: '#f91880' }}>{totalLikesRecibidos}</strong> Likes recibidos
          </div>
          <div>
            📅 Miembro desde {user.joinedDate}
          </div>
        </div>
      </div>

      <h3 style={{ color: '#eff3f4', fontSize: '1.2rem', margin: '30px 0 16px 0', borderBottom: '1px solid #38444d', paddingBottom: '8px' }}>
        Mis Publicaciones ({misTweets.length})
      </h3>

      <TweetList
        tweets={misTweets}
        onLike={onLike}
        onDelete={onDelete}
        currentUser={user}
      />
    </div>
  );
}

export default Profile;