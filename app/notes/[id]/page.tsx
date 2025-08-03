import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteDetailsClient id={id} initialNote={note} />;
}
