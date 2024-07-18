import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase';

// Defina o tipo Response antes de usar
type Response = {
  isListaJoao: boolean;
  username: string;
};

export const useGuestsAgnes = () => {
  const [guestsAgnes, setGuestsAgnes] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const ref = collection(db, 'guests');
    const hasIsListAgnes = where('isListAgnes', '==', 'true');
    const GuestsAgnesQuery = query(ref, hasIsListAgnes);

    const fetchGuestsAgnes = onSnapshot(GuestsAgnesQuery, (querySnapshot) => {
      const guestArray: Response[] = [];

      querySnapshot.forEach((doc) => {
        guestArray.push({
          ...doc.data() as Response,
        });
      });

      setGuestsAgnes(guestArray);
      setIsLoading(false);
      setError(null);
    });

    return () => {
      fetchGuestsAgnes();
    };
  }, []);

  return { guestsAgnes, isLoading, error };
};
