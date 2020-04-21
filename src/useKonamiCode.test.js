import { renderHook, act } from '@testing-library/react-hooks';

import useKonamiCode, { konamiCodeSequence } from './useKonamiCode';

describe('useKonamiCode', () => {
  it('should return the user sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    });

    // result returns the hook's object
    expect(result.current.sequence).toEqual(['ArrowUp']);
  });

  it('should reset the sequence if the user types a wrong sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
    });

    // result returns the hook's object
    expect(result.current.sequence).toEqual([]);
  });

  it('should return true whenever user types the right sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    konamiCodeSequence.forEach((key) => {
      act(() => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key }));
      });
    });

    // result returns the hook's object
    expect(result.current.rightSequence).toBe(true);
  });

  it('should return false whenever user types a wrong sequence', () => {
    const { result } = renderHook(() => useKonamiCode());
  
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
    });

    // result returns the hook's object
    expect(result.current.rightSequence).toBe(false);
  });

  it('should allow a different sequence and return true if user types it right', () => {
    const newSequence = ['w', 'j'];
    const { result } = renderHook(() => useKonamiCode(newSequence));

    newSequence.forEach((key) => {
      act(() => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key }));
      });
    });

    // result returns the hook's object
    expect(result.current.rightSequence).toBe(true);
  });

  it('should execute a callback function if the right sequence is typed', () => {
    const newSequence = ['w', 'j'];
    const callback = jest.fn();
    const { result } = renderHook(() => useKonamiCode(newSequence, callback));

    newSequence.forEach((key) => {
      act(() => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key }));
      });
    });

    // result returns the hook's object
    expect(callback).toHaveBeenCalled();
  });
});