import { useEffect, useState } from "react";

interface ArtistInfo {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}
interface Album {
  id: number;
  title: string;
  preview: string;
  artist: ArtistInfo;
}
interface DataAlbum {
  data: Album[];
}
interface ChartItem {
  tracks: DataAlbum;
}

function useFetchAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/music", {
          method: "GET",
        });
        const data: ChartItem = await response.json();
        console.log(data.tracks.data);
        setAlbums(data.tracks.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      }
    };
    fetchData();
  }, []);

  return { albums, error };
}

export default useFetchAlbums;
