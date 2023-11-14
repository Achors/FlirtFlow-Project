import React, { useState, useEffect } from 'react';

const AutoType = ({ word, delay, infinite }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordLength = word.length;

    const typeText = () => {
      if (index < wordLength) {
        setText((prevText) => prevText + word[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if (infinite) {
        // If infinite is true, reset index and text
        setIndex(0);
        setText('');
      }
    };

    const timeout = setTimeout(typeText, delay);

    return () => clearTimeout(timeout);
  }, [index, delay, word, infinite]);

  return <span>{text}</span>;
};

export default AutoType;
