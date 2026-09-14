import React from 'react';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';

function Home({ user, tweets, onAddTweet, onLike, onDelete }) {
  return (
    <div className="twitter-container">
      <TweetForm onAddTweet={onAddTweet} user={user} />
      <h3 style={{ color: '#eff3f4', fontSize: '1.2rem', marginBottom: '16px', borderBottom: '1px solid #38444d', paddingBottom: '8px' }}>
        Línea de Tiempo Principal
      </h3>
      <TweetList
        tweets={tweets}
        onLike={onLike}
        onDelete={onDelete}
        currentUser={user}
      />
    </div>
  );
}

export default Home;