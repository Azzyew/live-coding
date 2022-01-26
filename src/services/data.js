import api from './api';

export const fetchCharacters = async() => {
    const { data } = await api.get('character');
    return data.results;
}

export const fetchByName = async(name) => {
    const { data } = await api.get(`character/?name=${name}`);
    return data.results;
}
