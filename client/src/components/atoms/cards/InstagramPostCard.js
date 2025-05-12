import React, { useCallback, useEffect, useState } from "react";
import { getInsPost } from "../../../services/userServices/allServices";
import { useSelector } from "react-redux";
import InstagramReelGlassCard from "./InstagramReelGlassCard";
import _ from "lodash";

export default React.memo(function InstagramPostCard() {
  const instanceId = useSelector((state) => state.user.instaInstanceId);
  const [posts, setPosts] = useState([]);

  console.log("Component Rendered");

  // Throttled function to fetch posts
  const getPostFuntion = useCallback(
    _.throttle(async () => {
      console.log("Fetching posts...");
      if (!instanceId) return; // Avoid fetching if ID is not available
      try {
        const res = await getInsPost(instanceId);
        if (res.mediaList) {
          setPosts(res.mediaList);
        }
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    }, 1000), // 1 second throttle
    [instanceId] // Add instanceId as a dependency
  );

  useEffect(() => {
    getPostFuntion();
  }, [getPostFuntion]); // Use the throttled function as a dependency

  return (
    <div className="p-6 flex items-center justify-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto h-[80vh] p-6 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {posts.map((post) => (
          <InstagramReelGlassCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
});
