import { IcCommonLogo, BtnHomeVoice, IcHomeVoiceBg, IcHomeBubble } from "../../../../assets/svg/index";
import { HeaderContainer, HeaderContent, VoiceButton, VoiceBackground, Logo, VoiceBubble } from "./home-header-style";

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <VoiceBackground>
        <IcHomeVoiceBg />
      </VoiceBackground>
      <HeaderContent>
        <Logo>
          <IcCommonLogo />
        </Logo>
        <VoiceBubble>
          <IcHomeBubble />
        </VoiceBubble>
        <VoiceButton>
          <BtnHomeVoice />
        </VoiceButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HomeHeader;