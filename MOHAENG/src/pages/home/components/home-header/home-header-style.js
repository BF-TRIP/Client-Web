import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.color.primary}; 
  height: 19.4rem;
  position: relative;
`;

export const HeaderContent = styled.div`
  position: relative;
  height: 100%;
`;

export const Logo = styled.div`
  position: absolute;
  top: 5.6rem;
  left: 1.5rem;
  
  svg {
    width: 11.3rem;
    height: auto;
  }
`;

export const VoiceBubble = styled.div`
  position: absolute;
  top: 8rem;
  left: 62%;
  transform: translateX(-50%);
  
  svg {
    width: 18rem;
  }
`;

export const VoiceButton = styled.button`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const VoiceBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  overflow: hidden;

  svg {
    width: 100%;
    height: auto;
  }
`;