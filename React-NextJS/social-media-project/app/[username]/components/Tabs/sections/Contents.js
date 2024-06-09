import ContentCard from "../../../../components/Cards/ContentCard";
import Masonry from "@mui/lab/Masonry";

export default function ProfileContents() {
  const contentData = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      user: "John Doe",
      date: "2021-08-01",
      likeCount: 10,
    },
    {
      id: 2,
      content:
        "Pellentesque habitant morbi tristique sen et netus et malesuada fames ac turpis egestas.",
      image: "https://via.placeholder.com/150",
      user: "Jane Doe",
      date: "2021-08-02",
      likeCount: 20,
    },
    {
      id: 3,
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi.",
      image: "https://via.placeholder.com/150",
      user: "Alice Smith",
      date: "2021-08-03",
      likeCount: 15,
    },
    {
      id: 4,
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "https://via.placeholder.com/150",
      user: "Bob Johnson",
      date: "2021-08-04",
      likeCount: 5,
    },
    {
      id: 5,
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: "https://via.placeholder.com/150",
      user: "Emma Davis",
      date: "2021-08-05",
      likeCount: 8,
    },
    {
      id: 6,
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      image: "https://via.placeholder.com/150",
      user: "Michael Wilson",
      date: "2021-08-06",
      likeCount: 12,
    },
    {
      id: 7,
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      image: "https://via.placeholder.com/150",
      user: "Olivia Brown",
      date: "2021-08-07",
      likeCount: 3,
    },
    {
      id: 8,
      content: "Et harum quidem rerum facilis est et expedita distinctio.",
      image: "https://via.placeholder.com/150",
      user: "William Taylor",
      date: "2021-08-08",
      likeCount: 9,
    },
    {
      id: 9,
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      image: "https://via.placeholder.com/150",
      user: "Sophia Anderson",
      date: "2021-08-09",
      likeCount: 6,
    },
    {
      id: 10,
      content:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      image: "https://via.placeholder.com/150",
      user: "James Martinez",
      date: "2021-08-10",
      likeCount: 11,
    },
  ];

  return (
    <div className="">
      <Masonry columns={4} spacing={2}>
        {contentData.map((content) => {
          return (
            <ContentCard
              key={content.id}
              content={content.content}
              user={content.user}
              date={content.date}
              likeCount={content.likeCount}
              image={content.image}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
