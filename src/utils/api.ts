import { SearchMovieResponse } from "@/types";

export async function searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    if (!query) return null;
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: SearchMovieResponse = await response.json();
        return data.results;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}


export async function getNowPlayingMovies() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}

export async function getPopularMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.status_message}`);
        }
        const data = await response.json();
        return data.results;

    } catch (err) {
        console.error('Failed to fetch popular movies:', err);
        return null;
    }
}

export async function getTopRatedMovies() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.status_message}`);
        }
        const data = await response.json();
        return data.results;

    } catch (err) {
        console.error('Failed to fetch top-rated movies:', err);
        return null;
    }
}

export async function getUpcomingMovies() {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.status_message}`);
        }
        const data = await response.json();
        return data.results;

    } catch (err) {
        console.error('Failed to fetch upcoming movies:', err);
        return null;
    }
}

export async function getMovieDetailsById(id: number) {
    if (!id) {
        console.error("Movie ID is required.");
        return null;
    }
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
        }
    };
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.status_message}`);
        }

        const data = await response.json();
        return data;

    } catch (err) {
        console.error(`Failed to fetch details for movie ID ${id}:`, err);
        return null;
    }
}