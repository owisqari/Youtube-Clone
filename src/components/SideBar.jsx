import SmallCard from "./SmallCard";
import { Flex, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AdCard from "./AdCard";
import axios from "axios";
const SideBar = () => {
  const [data, setData] = useState([]);
  const getYoutubeData = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=reactjs&key=${
        import.meta.env.VITE_KEY
      })}`
    );

    setData(response.data.items);
  };
  useEffect(() => {
    getYoutubeData();
  }, []);
  return (
    <>
      <Flex
        direction="column"
        w="20rem"
        h="100vh"
        alignItems="center"
        justifyContent="space-between"
        pt={6}
      >
        <Stack spacing="8" align="flex-start">
          <Stack spacing="8" align="flex-start">
            <AdCard />
            {data.map((item, id) => (
              <SmallCard
                key={id}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                date={item.snippet.publishedAt}
                image={item.snippet.thumbnails.default.url}
                url={`/video/${item.id.playlistId}`}
              />
            ))}
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default SideBar;
