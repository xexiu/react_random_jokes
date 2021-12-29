interface JokeAttrs {
    id: number;
    joke: string;
    categories: string[]
}

interface Joke {
    type: string;
    value: JokeAttrs
}
