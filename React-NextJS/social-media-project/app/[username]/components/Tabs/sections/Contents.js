import ContentCard from "../../../../components/Cards/ContentCard";
import Masonry from "@mui/lab/Masonry";

export default function ProfileContents({
  userData,
  setUserData,
  currentUsername,
}) {
  return (
    <div className="">
      <Masonry columns={4} spacing={2}>
        {userData?.publications?.map((content) => {
          return (
            <ContentCard
              key={content._id}
              contentId={content._id}
              content={content.content}
              user={{ name: userData.name, lastname: userData.lastname }}
              date={content.createdAt}
              likeCount={content.likes?.length}
              likes={content.likes}
              image={content.images?.[0]}
              setUserData={setUserData}
              currentUsername={currentUsername}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
