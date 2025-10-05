"use client";
import { useRouter, useParams } from "next/navigation";
import NoteDetailsClient from "./NoteDetails.client";
import styles from "./modal.module.css";

export default function NotePreviewPage() {
  const router = useRouter();
  const params = useParams();

  if (!params?.id || !params?.tag) return null;

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const tag = Array.isArray(params.tag) ? params.tag[0] : params.tag;

  const closeModal = () => {
    router.push(`/notes/filter/${tag}`);
  };

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
        <NoteDetailsClient id={id} />
      </div>
    </div>
  );
}