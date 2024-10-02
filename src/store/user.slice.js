export const createUserSlice = (set) => ({
    address: '',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (address) =>
        set((state) => {
            state.address = address;
        }),
    fetchUser: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({
            address: '',
            fullName: 'Vyas Vraj Jigneshkumar',
            userName: 'vyasvraj92@gmail.com',
            age: 20,
        });
    },
});
