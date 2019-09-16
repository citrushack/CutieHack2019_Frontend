import React, { Component } from 'react'

export function PasswordReset({ match }) {
  return (
    <div>
      <h3>Token: {match.params.token}</h3>
    </div>
  );
}
