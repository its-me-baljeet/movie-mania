import { MovieObj } from "@/types";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

type MovieCardProps = {
    movie: MovieObj;
};

export default function MovieCard({ movie }: MovieCardProps) {
    const {
        title,
        overview,
        poster_path,
        release_date,
        vote_average
    } = movie;

    return (
        <Box className=" w-full p-4 rounded-md shadow-md">
            <Flex gap="3" align="center">
                <Avatar
                    size="3"
                    src={`https://image.tmdb.org/t/p/w92${poster_path}`}
                    radius="full"
                    fallback="?"
                />
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {title}
                    </Text>
                    <Text as="div" size="1" color="gray">
                        {release_date}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}
