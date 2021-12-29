import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function useRandomJoke(firstName: string, lastName: string) {
    const [joke, setJoke]: [Joke, Dispatch<SetStateAction<Joke>>] = useState({
        type: '',
        value: {
            id: null,
            joke: '',
            categories: []
        }
    });

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const resp = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
                const data: Joke = await resp.json();

                return setJoke(data);
            } catch (e) {
                console.log('There has been an error on fetchJoke: ', e);
            }
        }
        fetchJoke();
    }, [firstName, lastName])

    return joke;
}

export default useRandomJoke;
