import { useEffect, useState } from 'react';

export const konamiCodeSequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function useKonamiCode(codeSequence = konamiCodeSequence, callback = () => {}) {
  const [sequence, setSequence] = useState([]);
  const [rightSequence, setRightSequence] = useState(false);

  const onKeyDown = (event) => setSequence([...sequence, event.key]);

  useEffect(() => {
    sequence.forEach((key, index) => {
      if(key !== codeSequence[index]) {
        setSequence([]);
        setRightSequence(false);
      }
    });

    if(sequence.toString() === codeSequence.toString()) {
      setRightSequence(true);
      callback();
    }
  }, [callback, codeSequence, sequence]);
  
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return { sequence, rightSequence }
}
