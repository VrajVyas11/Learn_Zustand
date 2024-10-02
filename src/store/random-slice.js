export const createJokeSlice = (set) => ({
    joke: {},
    getJoke: async () => {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        set((state) => ({ ...state, joke: data }));
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    },
  });
  