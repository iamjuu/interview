// AnimatedText.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AnimatedText = () => {
  const [activeWordIndices, setActiveWordIndices] = useState([]);
  const containerRef = useRef(null);

  const text = [
    "5 to 6 hours. That's the average time",
    "you'll spend on your phone today - often",
    "without realizing. It's time to fight back"
  ];

  const allWords = text.map(line => line.split(' ')).flat();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveWordIndices([0, 1, 2]); 
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight) {
        const wordsInView = Math.min(
          allWords.length,
          Math.floor((windowHeight - containerTop) / 50)
        );

        setActiveWordIndices(
          Array.from({ length: wordsInView }, (_, i) => i)
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [allWords.length]);

  return (
    <Container>
      <TextContainer ref={containerRef}>
        <TextContent>
          {text.map((line, lineIndex) => (
            <TextLine key={lineIndex}>
              {line.split(' ').map((word, wordIndex) => {
                const absoluteIndex = text
                  .slice(0, lineIndex)
                  .join(' ')
                  .split(' ')
                  .length + wordIndex;

                return (
                  <Word
                    key={wordIndex}
                    isActive={activeWordIndices.includes(absoluteIndex)}
                  >
                    {word}
                  </Word>
                );
              })}
            </TextLine>
          ))}
        </TextContent>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 1300px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ff6666; */
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TextLine = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 0.5rem;
  word-spacing: 1rem; 
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;


const Word = styled.span`
  display: inline-block;
  margin: 0 0.5rem; 
  transition: color 0.3s ease;
  color: ${props => props.isActive ? 'white' : '#5e5e5e'};
`;


export default AnimatedText;
