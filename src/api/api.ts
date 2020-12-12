import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5a5d4a76-8987-43b9-a09e-9693af49f2eb'
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUsers(id: string) {
        return instance.delete(`follow/${id}`)
    },
    followUsers(id: string) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
    }
}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
}

