import React from "react";

// async function ListDetail({ artistID }: { artistID: string }) {
//   // Wait for the playlists
//   const playlists = await getArtistPlaylists(artistID);

//   return (
//     <ul>
//       {/* {playlists.map((playlist) => (
//         <li key={playlist.id}>{playlist.name}</li>
//       ))} */}
//     </ul>
//   );
// }

async function getListDetail(listId: number) {
  const res = await fetch(`http://localhost:4000/next13-test/${listId}`);
  return res.json();
}

export default async function ListDetail({ listId }: { listId: number }) {
  // Wait for the playlists
  const listDetail = await getListDetail(listId);

  return (
    <ul>
      <button type="button">{listDetail.text}번</button>

      {/* {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))} */}
    </ul>
  );
}
