'use client';

import MovieCard from '@/components/movieCard';
import { useFavorites } from '@/context/favoritesContext';

export default function FavoritesPage() {
    const { favorite } = useFavorites();

    return (
        <div>
            <h1>Your Favorite Movies</h1>
            {favorite.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
                    {favorite.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <p>You haven't added any favorites yet.</p>
            )}
        </div>
    )
}