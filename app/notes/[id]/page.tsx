import NoteDetailsClient from "./NoteDetails.client";

export default async function NoteDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await Promise.resolve(params);

  return <NoteDetailsClient id={id} />;
}
