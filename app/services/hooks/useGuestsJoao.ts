import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase';

// Defina o tipo Response antes de usar
type Response = {
  isListaJoao: boolean;
  username: string;
};

export const useGuestsJoao = () => {
  const [guestsFernanda, setGuestsFernanda] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const ref = collection(db, 'guests');
    const hasIsListJoao = where('isListaJoao', '==', true);
    const GuestsFernandaQuery = query(ref, hasIsListJoao);

    const fetchGuestsFernanda = onSnapshot(GuestsFernandaQuery, (querySnapshot) => {
      const guestArray: Response[] = [];

      querySnapshot.forEach((doc) => {
        guestArray.push({
          ...doc.data() as Response,
        });
      });

      setGuestsFernanda(guestArray);
      setIsLoading(false);
      setError(null);
    });

    return () => {
      fetchGuestsFernanda();
    };
  }, []);

  return { guestsFernanda, isLoading, error };
};
