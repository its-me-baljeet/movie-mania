'use client'

import { useFavorites } from "@/context/favoritesContext";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { MovieObj } from "@/types";

export default function FavoriteButton({ movie }: {
    movie: MovieObj
}) {
    const { addFavorite, removeFavorite, favorite } = useFavorites();
    const isFavorited = favorite.some(item => item.id === movie.id);
    const handleToggleFavorite = () => {
        if (isFavorited) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };
    return (
        <Button onClick={handleToggleFavorite} className="w-full md:w-auto md:self-start">
            <Heart className="mr-2 h-4 w-4" fill={isFavorited ? 'currentColor' : 'none'} />
            {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
    )
}