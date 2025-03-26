import React from "react";
import { useParams, useLocation } from "react-router-dom";

const FavouritesDetail = () => {
  const { favId } = useParams();
  const searchParams = new URLSearchParams(useLocation().search);

  const fav = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div>

        <h2>
          Favourite Details Your favourite post is <b>{fav || "Unknown"}</b>. 
          Post ID is <b>{favId || "N/A"}</b>. Size is{" "}
          <b>{size || "Not specified"}</b>.
        </h2>
        <p></p>

    </div>
  );
};

export default FavouritesDetail;
