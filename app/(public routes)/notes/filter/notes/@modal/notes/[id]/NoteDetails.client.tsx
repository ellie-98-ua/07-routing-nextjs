"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";

interface NoteDetailsProps {
  id: string;
}

export default function NoteDetailsClient({ id }: NoteDetailsProps) {
  const { data, isLoading, error } = useQuery<Note, Error>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading note</p>;

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
    </div>
  );
}