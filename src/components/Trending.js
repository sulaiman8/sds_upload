import { Card, Container, Row, Col, Image } from "react-bootstrap"
import image1 from "../assets/images/trending/image1.jpg"
import image2 from "../assets/images/trending/image2.jpg"
import image3 from "../assets/images/trending/image3.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trending">BERITA TRENDING</h1>
        <br />
        <Row>
          <Col md={4} className="beritaSatu" id="trending">
            <Card className="beritaGambar">
              <a href="https://hypebeast.com/id/2022/9/nvidia-siap-rilis-graphic-cards-rtx-4080-dan-rtx-4090" target="_blank">
              <Image src={image1} alt="image1" className="images" height={100} width={335} />
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">RTX 4090</Card.Title>
                  <Card.Text className="text-left">
                    Berita Graphic Card Terbaru "RTX 4090" yang Sangat Gahar
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="beritaSatu">
            <Card className="beritaGambar">
            <a href="https://www.cnnindonesia.com/teknologi/20220930130747-384-854664/banjir-motor-listrik-di-iems-berikut-merek-harga-di-bawah-rp20-juta" target="_blank">
              <Image src={image2} alt="image2" className="images" height={100} width={335}/>
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Sepeda Motor Listrik</Card.Title>
                  <Card.Text className="text-left">
                    Menuju Bumi Tanpa Polusi dengan Sepeda Motor Listrik
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="beritaSatu">
            <Card className="beritaGambar">
            <a href="https://coinmarketcap.com/alexandria/id/article/top-nft-games" target="_blank">
              <Image src={image3} alt="image3" className="images" height={100} width={335} />
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Gim NFT</Card.Title>
                  <Card.Text className="text-left">
                    Sekarang Bermain Gim Juga Bisa Menghasilkan Cuan Loh...
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending