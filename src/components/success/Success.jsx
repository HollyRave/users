import React from 'react';

export const Success = ({
  invites
}) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {invites.length} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()}>
        Назад
      </button>
    </div>
  );
};