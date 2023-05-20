import EmptySpace from "../components/layout/EmptySpace";
import FlexMiddleCenter from "../components/layout/FlexMiddleCenter";
import HomeIndegoLogo from "../components/logos/HomeIndegoLogo";
import HomeNav from "../components/navigation_bars/HomeNav";
import Page from "../components/wrappers/Page";

export default function Home() {
  return (
    <Page>
      <HomeNav/>
      <FlexMiddleCenter>
        <EmptySpace height={10}/>
        <HomeIndegoLogo/>
      </FlexMiddleCenter>
    </Page>
  );
}
