import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    set: async (payload) => {
        const { data } = await httpService.post(`todos?userId=${payload.id}`, payload);
        return {...data, id: Date.now()};
    },
};
export default todosService;
