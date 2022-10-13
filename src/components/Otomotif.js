import { Card, Container, Row, Col, Image } from "react-bootstrap"
import image1 from "../assets/images/otomotif/image1.jpg"
import image2 from "../assets/images/otomotif/image2.jpg"
import image3 from "../assets/images/otomotif/image3.jpg"
import React from 'react'

function Otomotif() {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="otomotif">BERITA OTOMOTIF</h1>
        <br />
        <Row>
          <Col md={4} className="beritaSatu">
            <Card className="beritaGambar">
              <a href="https://www.cnnindonesia.com/teknologi/20220930130747-384-854664/banjir-motor-listrik-di-iems-berikut-merek-harga-di-bawah-rp20-juta" target="_blank">
                <Image src={image1} alt="image1" className="images" height={100} width={335} />
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Sepeda Motor Listrik</Card.Title>
                  <Card.Text className="text-left">
                    Menuju Bumi Tanpa Polusi dengan Sepeda Motor Listrik
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="beritaSatu">
            <Card className="beritaGambar">
              <a href="https://oto.detik.com/berita/d-6336165/pemerintah-cek-kualitas-pertalite-yang-disebut-boros-ternyata-ini-hasilnya" target="_blank">
                <Image src={image2} alt="image2" className="images" height={100} width={335} />
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Pertalite Dirasa Boros?</Card.Title>
                  <Card.Text className="text-left">
                    Baru-Baru Ini Pertalite Dirasa Boros Oleh Beberapa Konsumen
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="beritaSatu">
            <Card className="beritaGambar">
              <a href="https://tirto.id/jejak-suzuki-meninggalkan-motogp-gr7f" target="_blank">
                <Image src={image3} alt="image3" className="images" height={100} width={335} />
              </a>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Suzuki Keluar dari MotoGP</Card.Title>
                  <Card.Text className="text-left">
                    Keluarnya Suzuki dari MotoGP Membuat Banyak Fans Kecewa
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

export default Otomotif
