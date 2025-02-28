import styled from "styled-components";

export const SectionContainer = styled.section`
  padding-top: 8rem;
  padding-left: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: Pretendard;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 100% */
  margin-bottom: 2.6rem;
`;

export const CardList = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  white-space: nowrap;
  padding-right: 2rem;
`;

export const Card = styled.div`
  width: 226px;
  height: 297px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10.1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.80);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  gap: 1rem;
`;

export const CardTag = styled.div`
  color: rgba(255, 255, 255, 0.80);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  width: 18.7rem;
`;

export const CardTitle = styled.div`
  color: #FFF;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 130%;
  width: 18.7rem;
`;
