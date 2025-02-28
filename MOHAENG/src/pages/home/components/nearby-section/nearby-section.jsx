import { 
  SectionContainer, 
  SectionTitle, 
  CardList, 
  Card, 
  CardImage, 
  CardInfo, 
  CardTitle, 
  CardSubtitle 
} from "./nearby-section-style";

const mockData = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/%EA%B3%A0%EC%96%91_%EC%84%9C%EC%98%A4%EB%A6%89_%EB%AA%85%EB%A6%89%28%EC%9D%B8%EC%9B%90%EC%99%95%ED%9B%84%EB%A6%89%29_%EB%8A%A5%EC%B9%A8%EA%B3%A0%EC%96%91_%EC%84%9C%EC%98%A4%EB%A6%89_%EB%AA%85%EB%A6%89%28%EC%88%99%EC%A2%85%2C_%EC%9D%B8%ED%98%84%EC%99%95%ED%9B%84%EB%A6%89%29_%EB%8A%A5%EC%B9%A8_%EB%AF%B8%EC%88%A0_2014%EB%85%84%28%EC%B6%9C%EC%B2%98_%EA%B5%AD%EB%A6%BD%EB%AC%B8%ED%99%94%EC%9E%AC%EC%97%B0%EA%B5%AC%EC%86%8C%29.jpg",
    title: "고양 서오릉",
    subtitle: "경기도 고양시 덕양구 서오릉로 334-32",
  },
  {
    id: 2,
    image: "https://i.namu.wiki/i/sEBIXR9h5loqexieQtIbJyasR5JjunPepcgZwCADJnafHarpXWDYwm38WN0Eo4K-cxFcXunfWT2HqH_R9yz8Gg.webp",
    title: "경희궁",
    subtitle: "경기도 고양시 일산서구 중앙로",
  }
];

const NearbySection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        가까운 곳에서{"\n"}즐길 수 있는 관광지
      </SectionTitle>
      <CardList>
        {mockData.map((place) => (
          <Card key={place.id}>
            <CardImage src={place.image} alt={place.title} />
            <CardInfo>
              <CardTitle>{place.title}</CardTitle>
              <CardSubtitle>{place.subtitle}</CardSubtitle>
            </CardInfo>
          </Card>
        ))}
      </CardList>
    </SectionContainer>
  );
};

export default NearbySection;
