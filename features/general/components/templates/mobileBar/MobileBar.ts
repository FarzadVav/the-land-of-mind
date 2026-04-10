import MobileBarLink from "./MobileBarLink";
import MobileBarRoot from "./MobileBarRoot";
import MobileBarTitle from "./MobileBarTitle";

const MobileBar = Object.assign(MobileBarRoot, {
  Title: MobileBarTitle,
  Link: MobileBarLink
});

export default MobileBar;