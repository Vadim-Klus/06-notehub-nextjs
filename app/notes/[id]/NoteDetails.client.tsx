"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import styles from "./NoteDetails.module.css";

interface Props {
  id: string;
  initialNote: Note;
}

export default function NoteDetailsClient({ id, initialNote }: Props) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    initialData: initialNote,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={styles.content}>{note.content}</p>
        <p className={styles.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
