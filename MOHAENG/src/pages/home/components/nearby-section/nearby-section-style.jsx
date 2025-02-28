import styled from "styled-components";

export const SectionContainer = styled.section`
  padding-top: 5.646rem; /* 추천 섹션과의 간격 */
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 20rem;
`;

export const SectionTitle = styled.h2`
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 28.6px */
  color: #000;
  margin-bottom: 2rem;
  white-space: pre-line; /* 줄바꿈 적용 */
`;

export const CardList = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  white-space: nowrap;
`;

export const Card = styled.div`
  width: 226px;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  background: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 140px; /* 적절한 높이 설정 */
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardTitle = styled.h3`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  width: 100%;
  white-space: nowrap; /* 한 줄 유지 */
  overflow: hidden;
  text-overflow: ellipsis; /* 넘칠 경우 '...' 표시 */
`;

export const CardSubtitle = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  color: #6E6E6E;
  width: 100%;
  white-space: nowrap; /* 한 줄 유지 */
  overflow: hidden;
  text-overflow: ellipsis; /* 넘칠 경우 '...' 표시 */
`;
