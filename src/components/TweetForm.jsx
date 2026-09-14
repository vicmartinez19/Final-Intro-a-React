import React, { useState } from 'react';

function TweetForm({ onAddTweet, user }) {
  const [text, setText] = useState('');
  const MAX_CHARS = 280;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddTweet(text.trim());
    setText('');
  };

  const remaining = MAX_CHARS - text.length;

  return (
    <div className="tweet-form-card">
      <form onSubmit={handleSubmit}>
        <textarea
          className="tweet-textarea"
          rows="3"
          placeholder={user ? `¿Qué está pasando, ${user.username}?` : "¿Qué está pasando?"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_CHARS}
        />
        <div className="tweet-form-footer">
          <span style={{ fontSize: '0.85rem', color: remaining < 20 ? '#f87171' : '#8899a6' }}>
            {remaining} caracteres
          </span>
          <button
            type="submit"
            className="btn-tweet"
            disabled={!text.trim() || !user}
          >
            {user ? "Postear" : "Inicia sesión para twittear"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetForm;