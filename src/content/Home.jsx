import React, { Component } from "react";

import { Button, Typography, Container, Paper, Grid } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

import Slider from "react-slick";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        <div key={1}>
          <img src={require("../images/slide1.jpg")} alt="banner" />
        </div>,
        <div key={2}>
          <img src={require("../images/slide2.jpg")} alt="banner" />
        </div>
      ],
      itemNo: 1,
      loop: false,
      nav: false,
      rewind: true,
      autoplay: true
    };
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const liputanSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const testimonySettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <React.Fragment style={{ margin: 0, padding: 0 }}>
        <OwlCarousel options={options}>{this.state.items}</OwlCarousel>

        {/* Homebanner start */}
        <div
          style={{
            backgroundColor: "#0C007F",
            display: "flex",
            height: "200px",
            width: "100%",
            marginBottom: "20px",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <Grid item xs={12} md={8}>
            <img src={require("../images/01.png")} alt="container-image" />
            <Typography
              component="h3"
              align="center"
              variant="h4"
              style={{ color: "white", marginTop: 10 }}
            >
              <span style={{ fontSize: 50, color: "#EC9120" }}>16 </span>
              Tahun <br /> Pengalaman
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <img src={require("../images/01.png")} alt="container-image" />
            <Typography
              component="h3"
              align="center"
              variant="h4"
              style={{ color: "white", marginTop: 10 }}
            >
              <span style={{ fontSize: 50, color: "#EC9120" }}>133 </span>
              Ribu <br /> Alumni
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <img src={require("../images/01.png")} alt="container-image" />
            <Typography
              component="h3"
              align="center"
              variant="h4"
              style={{ color: "white", marginTop: 10 }}
            >
              <span style={{ fontSize: 40, color: "#EC9120" }}>Ratusan </span>
              <br />
              Penghargaan
            </Typography>
          </Grid>
        </div>
        {/* Homebanner end */}

        {/* Liputan start */}
        <Container fixed>
          <Typography
            component="h1"
            align="center"
            variant="h3"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            Mamastudio pernah diliput
          </Typography>

          <Slider {...liputanSettings}>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
          </Slider>
        </Container>
        {/* Liputan end */}

        {/* Testimony start */}
        <Container
          style={{
            marginTop: 60,
            height: "450px"
          }}
        >
          <Container
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              backgroundColor: "#F1F0FF",
              width: "80%",
              height: "400px",
              right: 0,
              position: "absolute"
            }}
          >
            <Slider
              style={{
                width: "500px",
                position: "absolute",
                top: "50%",
                height: "300px",
                left: -200,
                transform: "translateY(-50%)"
              }}
              {...testimonySettings}
            >
              <Grid item xs={11} md={11}>
                <img
                  style={{
                    borderRadius: "5px",
                    border: "1px solid whitesmoke",
                    width: "500px",
                    height: "300px"
                  }}
                  src={require("../images/republika.jpg")}
                  alt="slider-image"
                />
              </Grid>
              <Grid item xs={11} md={11}>
                <img
                  style={{
                    color: "#EC9120",
                    borderRadius: "10px",
                    width: "500px",
                    height: "300px"
                  }}
                  src={require("../images/republika.jpg")}
                  alt="slider-image"
                />
              </Grid>
            </Slider>
          </Container>
          <Container
            style={{
              width: "55%",
              height: "400px",
              right: 0,
              position: "absolute",
              paddingTop: "40px"
            }}
          >
            <Typography
              component="h3"
              variant="h4"
              style={{ marginBottom: 20, fontWeight: 700, textAlign: "center" }}
            >
              Testimony
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              style={{ color: "#EC9120", marginBottom: 20 }}
            >
              What Students Say About Us
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              style={{ marginBottom: 20 }}
            >
              Minuteness of the parts
            </Typography>
            <Typography component="h3" variant="p" style={{ marginBottom: 20 }}>
              What looked like a small patch of purple grass, above five feet
              square, was moving across the sand in their direction. When it
              came near enough he perceived.
            </Typography>
          </Container>
        </Container>
        {/* Testimony end */}

        {/* Karya murid start */}
        <Container fixed style={{ marginTop: 20 }}>
          <Typography
            component="h1"
            align="center"
            variant="h3"
            style={{ marginBottom: 20 }}
          >
            Karya Murid dan Instruktur Mamastudio
          </Typography>
          <Slider {...settings}>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
          </Slider>
        </Container>
        {/* Karya murid end */}

        {/* Features start */}
        <Container
          style={{
            marginTop: 60,
            height: "500px"
          }}
        >
          <Container
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "#F1F0FF",
              width: "80%",
              height: "500px",
              left: 0,
              position: "absolute"
            }}
          >
            <img
              src={require("../images/republika.jpg")}
              alt="slider-image"
              style={{
                borderRadius: "10px",
                width: "500px",
                height: "80%",
                position: "absolute",
                top: "50%",
                right: -200,
                transform: "translateY(-50%)"
              }}
            />
          </Container>
          <Container
            style={{
              width: "55%",
              height: "500px",
              left: 0,
              position: "absolute",
              padding: "40px"
            }}
          >
            <Typography
              component="h3"
              variant="h4"
              style={{ marginBottom: 20, fontWeight: 700, textAlign: "center" }}
            >
              Features
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              style={{ color: "#EC9120", marginBottom: 20 }}
            >
              Premium Courses
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              style={{ marginBottom: 20 }}
            >
              Lifts the horizon
            </Typography>
            <Typography component="h3" variant="p" style={{ marginBottom: 20 }}>
              What looked like a small patch of purple grass, above five feet
              square, was moving across the sand in their direction.
            </Typography>
            <Typography component="h3" variant="h5" style={{ fontWeight: 600 }}>
              Free Support
            </Typography>
            <Typography
              component="h3"
              variant="p"
              style={{ marginBottom: 20, fontWeight: 400 }}
            >
              Truly it was a great journey, and in it I met with many, whom to
              know.
            </Typography>
            <Typography component="h3" variant="h5" style={{ fontWeight: 600 }}>
              Big Bonuses
            </Typography>
            <Typography
              component="h3"
              variant="p"
              style={{ marginBottom: 20, fontWeight: 400 }}
            >
              Truly it was a great journey, and in it I met with many, whom to
              know.
            </Typography>
          </Container>
        </Container>
        {/* Features end */}

        {/* Prestasi alumni start */}
        <Container fixed style={{ marginTop: 60 }}>
          <Typography
            component="h1"
            align="center"
            variant="h3"
            style={{ marginBottom: 20 }}
          >
            Prestasi Alumni Mamastudio
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography component="p">
                Semenjak tahun 2014 pada acara e-transparancy award. Mamastudio
                ditunjuk sebagai konsultan untuk memberikan masukan atas
                website-website milik kementerian dan lembaga RI. Beberapa
                website kementerian telah dibangun dengan mengikuti
                tahapan-tahapan pembuatan website yang sesuai dengan
                standarisasi website yang baik, serta peraturan. Contohnya
                adalah website milik kementerian kelautan, kementerian agrarian
                dan beberapa kementerian lain telah dibuat oleh Mamastudio.
                Sampai saat inipun Mamastudio masih rutin memberikan masukan dan
                pelatihan pada beberapa kementerian mengenai teknologi terbaru
                dalam bidang website, pemanfaatan social media dan mobile app.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="Mamastudio-image"
              />
            </Grid>
          </Grid>
        </Container>
        {/* Prestasi alumni end */}

        {/* Upcoming Events start */}
        <Container
          fixed
          style={{
            width: "90%",
            marginTop: 20,
            paddingTop: 20,
            height: "700px",
            borderRadius: "25px",
            backgroundColor: "#F1F0FF"
          }}
        >
          <Typography
            component="h3"
            variant="h4"
            style={{ marginBottom: 10, fontWeight: 700, textAlign: "center" }}
          >
            Schedules
          </Typography>
          <Typography
            component="h1"
            align="center"
            variant="h3"
            style={{ textAlign: "center", color: "#EC9120" }}
          >
            Upcoming Events
          </Typography>
          <Container fixed style={{ marginTop: 20, height: "500px" }}>
            <Container
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "25px",
                padding: 0,
                marginTop: 20,
                height: "150px"
              }}
            >
              <img
                style={{ borderRadius: "25px", maxWidth: "30%", flexGrow: 2 }}
                src={require("../images/republika.jpg")}
                alt="Mamastudio-image"
              />
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    fontWeight: "900",
                    borderRadius: "24px",
                    color: "white",
                    marginBottom: "10px"
                  }}
                  href="#"
                  variant="contained"
                >
                  WebSite
                </Button>
                <Typography component="h3" variant="h5">
                  <b>Quantum Computers</b>
                </Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DATE
                </Typography>
                <Typography>04 Nov 2019</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DURATION
                </Typography>
                <Typography>10 Hours</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  PRICE
                </Typography>
                <Typography>$400</Typography>
              </Container>
            </Container>
            <Container
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "25px",
                padding: 0,
                marginTop: 20,
                height: "150px"
              }}
            >
              <img
                style={{ borderRadius: "25px", maxWidth: "30%", flexGrow: 2 }}
                src={require("../images/republika.jpg")}
                alt="Mamastudio-image"
              />
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Button
                  style={{
                    backgroundColor: "pink",
                    fontWeight: "900",
                    borderRadius: "24px",
                    color: "white",
                    marginBottom: "10px"
                  }}
                  href="#"
                  variant="contained"
                >
                  DESIGN
                </Button>
                <Typography component="h3" variant="h5">
                  <b>Mechanics</b>
                </Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DATE
                </Typography>
                <Typography>04 Nov 2019</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DURATION
                </Typography>
                <Typography>10 Hours</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  PRICE
                </Typography>
                <Typography>$400</Typography>
              </Container>
            </Container>
            <Container
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "25px",
                padding: 0,
                marginTop: 20,
                height: "150px"
              }}
            >
              <img
                style={{ borderRadius: "25px", maxWidth: "30%", flexGrow: 2 }}
                src={require("../images/republika.jpg")}
                alt="Mamastudio-image"
              />
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    fontWeight: "900",
                    borderRadius: "24px",
                    color: "white",
                    marginBottom: "10px"
                  }}
                  href="#"
                  variant="contained"
                >
                  APPLICATION
                </Button>
                <Typography component="h3" variant="h5">
                  <b>Neuroscience</b>
                </Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DATE
                </Typography>
                <Typography>04 Nov 2019</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  DURATION
                </Typography>
                <Typography>10 Hours</Typography>
              </Container>
              <Container
                style={{
                  padding: "20px"
                }}
              >
                <Typography
                  style={{
                    marginBottom: "30px",
                    fontWeight: "light",
                    color: "grey"
                  }}
                >
                  PRICE
                </Typography>
                <Typography>$400</Typography>
              </Container>
            </Container>
          </Container>
        </Container>

        {/* Upcoming Events end */}
      </React.Fragment>
    );
  }
}

export default Home;
