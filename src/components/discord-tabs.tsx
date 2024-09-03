
interface DiscordChannel {
  label: string;
  value: string;
  channel: string;
}

 const data: DiscordChannel[] = [
  {
    label: "General Board Games",
    value: "generalBoardGames",
    channel: "93736020943577088",
  },
  {
    label: "Tuesday Night",
    value: "tuesdayNight",
    channel: "822602432709132378",
  },
  {
    label: "Epic Game Days",
    value: "epicGameDays",
    channel: "897960014000586794",
  },
  {
    label: "Kickstarters",
    value: "kickstarters",
    channel: "915305206173020201",
  },
  {
    label: "Collection Management",
    value: "collectionManagement",
    channel: "941613789726523392",
  },
];

import WidgetBot from "@widgetbot/react-embed";
import { Tabs } from "flowbite-react/components/Tabs";

export function DiscordTabs() {
  //const [selectedTab, setSelectedTab] = useState(data[0].value)
  const buildTabs = () => {
    return data.map(({label, channel}) => (
      <Tabs.Item title={label}>
        <WidgetBot
          server="93736020943577088"
          channel={channel}
          width={window.innerWidth}
          height={500}
        />
      </Tabs.Item>
    ))
  }
  return (
    <>
      <Tabs aria-label="Default tabs" variant="default">
        {
          buildTabs()
        }
      </Tabs>
    </>
    
  );
}