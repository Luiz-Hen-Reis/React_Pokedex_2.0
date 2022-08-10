// user local storage
export const ADD_USER_TO_LOCAL_STORAGE = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const REMOVE_USER_FROM_LOCAL_STORAGE = () => {
    localStorage.removeItem('user');
}

export const GET_USER_FROM_LOCAL_STORAGE = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
}

// favorites local storage
export const ADD_FAVORITE_TO_LOCAL_STORAGE = (favorites) => {
    const favoritesArray = [...favorites]; 
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
}

export const REMOVE_ALL_FAVORITE_FROM_LOCAL_STORAGE = () => {
    localStorage.removeItem('favorites');
}

export const GET_FAVORITES_FROM_LOCAL_STORAGE = () => {
    const result = localStorage.getItem('favorites');
    const favorites = result ? JSON.parse(result) : [];
    return favorites;
}