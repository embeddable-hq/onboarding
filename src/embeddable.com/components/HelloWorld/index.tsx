import React from 'react';

type Props = {
  title: string;
  body: string;
  clientContext: { darkMode: boolean; }
};

export default (props: Props) => {
  const { title, body, clientContext } = props;
  const className = `basic-text-component ${clientContext?.darkMode ? 'dark' : ''}`;
  return (
      <div className={className}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
}