'use client';

import { MovieObj } from '@/types';
import React, { createContext, useState, useEffect, useContext } from 'react';

interface FavoritesContextType {
    favorite: MovieObj[];
    addFavorite: (movie: MovieObj) => void;
    removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorite, setFavorite] = useState<MovieObj[]>([]);

    useEffect(() => {
        try {
            const storedFavorites = localStorage.getItem('favoriteMovies');
            if (storedFavorites) {
                setFavorite(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error("Failed to parse favorites from localStorage", error);
            setFavorite([]);
        }
    }, []);
    useEffect(() => {
        if (favorite.length > 0 || localStorage.getItem('favoriteMovies')) {
            localStorage.setItem('favoriteMovies', JSON.stringify(favorite));
        }
    }, [favorite]);

    const addFavorite = (movie: MovieObj) => {
        setFavorite(prev => [...prev, movie]);
    };

    const removeFavorite = (id: number) => {
        setFavorite(prev => prev.filter(movie => movie.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ addFavorite, removeFavorite, favorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}