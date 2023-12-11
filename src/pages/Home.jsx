import { useEffect, useState } from "react";
import FabButton from "../components/FabButton";
import { NewPostOverlay } from "../components/NewPostOverlay";
import { PostsList } from "../components/PostsList";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import { PlusIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [showNewPostOverlay, setShowNewPostOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState(null);

  // tolgo overflow dal body quando overlay è aperto
  useEffect(() => {
    // Devo togliere l'overflow dal body quando l'overlay è aperto
    document.body.classList.toggle('overflow-hidden', showNewPostOverlay);
    document.body.classList.toggle('pr-4', showNewPostOverlay);

    // Se il modale è stato chiuso, va resettato il overlayData
    if (!showNewPostOverlay) {
      setOverlayData(null);
    }
  }, [showNewPostOverlay]);

  function openEditOverlay(postData) {
    setOverlayData(postData);
    setShowNewPostOverlay(true);
  }

  return (
    <>
      <PostsList onEditPost={openEditOverlay}></PostsList>

      <FabButton onClick={() => setShowNewPostOverlay(true)}><PlusIcon className="group-hover:rotate-180 group-hover:scale-125 duration-500"></PlusIcon></FabButton>

      <NewPostOverlay show={showNewPostOverlay} data={overlayData} onClose={() => setShowNewPostOverlay(false)}></NewPostOverlay>
    </>
  );
}