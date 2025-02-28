import { 
  SectionContainer, 
  SectionTitle, 
  CardList, 
  Card, 
  CardImage, 
  CardTextContainer, 
  CardTag, 
  CardTitle 
} from "./recommendation-section-style";

const mockData = [
  {
    id: 1,
    image: "https://cdn.prod.website-files.com/65641b090eedb971ae49da92/657c101cc257557413fd7a9b_1%EC%9D%B8%EC%B2%9C%EC%BA%A0%ED%95%91%EC%9E%A5.jpg",
    tag: "휠체어 사용자를 위한 캠핑장",
    title: "김포 한강 오토캠핑장",
  },
  {
    id: 2,
    image: "https://ecimg.cafe24img.com/pg534b52580794029/realneonsign/web/upload/NNEditor/20240514/327435d6909ed3f0ac3b47d28bfffd22.jpg",
    tag: "휠체어 사용자를 위한 휴양림",
    title: "봉산 편백나무 치유의 숲",
  }
];

const RecommendationSection = () => {
    // 제목을 두 단어까지와 나머지로 분리하는 함수
    const splitTitle = (title) => {
      const words = title.split(' ');
      if (words.length <= 2) return title;
      
      const firstPart = words.slice(0, 2).join(' ');
      const secondPart = words.slice(2).join(' ');
      return (
        <>
          {firstPart}
          <br />
          {secondPart}
        </>
      );
    };
  
    return (
      <SectionContainer>
        <SectionTitle>모행 님만을 위한 관광지 추천</SectionTitle>
        <CardList>
          {mockData.map((place) => (
            <Card key={place.id}>
              <CardImage src={place.image} alt={place.title} />
              <CardTextContainer>
                <CardTag>{place.tag}</CardTag>
                <CardTitle>{splitTitle(place.title)}</CardTitle>
              </CardTextContainer>
            </Card>
          ))}
        </CardList>
      </SectionContainer>
    );
  };

export default RecommendationSection;
