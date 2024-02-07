import Image from "next/image";

function IndexPage() {
  return (
    <main>
      <div className="firtsCard">
        <div className="textFirst">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit
          </p>
        </div>
        <Image
          src="/assets/img/Pic1.png"
          alt="pic1"
          width={1000}
          height={550}
          className="imageFirstCard"
        />
      </div>
      <div className="secondCard">
        <h1 className="h1">Lorem ipsum</h1>
        <p className="p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="secondCardContent">
          <div className="card">
            <Image
              src="/assets/img/Pic2.png"
              alt="pic2"
              width={350}
              height={300}
              className="cardImage"
            />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
          <div className="card">
            <Image
              src="/assets/img/Pic3.png"
              alt="pic2"
              width={350}
              height={300}
              className="cardImage"
            />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
          <div className="card">
            <Image
              src="/assets/img/Pic4.png"
              alt="pic2"
              width={350}
              height={300}
              className="cardImage"
            />
            <button className="btnCard">LOREM IPSUM</button>
          </div>
        </div>
        <button className="btnSecondCard">LEARN MORE</button>
      </div>
      <div className="threeCard">
        <div className="threeCardContent">
          <p className="textCardThree">
            Lorem ipsum dolor sit amet, consetetur
          </p>
          <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
          <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
        </div>
        <Image
          src="/assets/img/Pic5.png"
          alt="pic5"
          width={1000}
          height={480}
          className="threeCardImage"
        />
      </div>
      <div className="fourCard">
        <h1>Latest videos</h1>
        <div className="fourCardContent">
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="fourCardFile">
            <i className="bi bi-play-fill i"></i>
            <Image
              src="/assets/img/Pic1.png"
              alt="file"
              width={250}
              height={200}
              className="video"
            />
            <p className="p-video">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
        </div>
        <button className="btnFourCard">VIEW ALL</button>
      </div>
      <div className="fiveCard">
        <Image
          src="/assets/img/Join_Us.png"
          alt="backgroun"
          width={1000}
          height={800}
          className="img-view-all"
        />

        <div className="formFiveCard">
          <h1 className="h1-join">JOIN US</h1>
          <h1 className="h1-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          </h1>
          <div className="d-flex">
            <input
              type="text"
              className="inputFormBasic input"
              placeholder="Name"
            />
            <input
              type="text"
              className="inputFormBasic input-data"
              placeholder="Username"
            />
          </div>
          <div className="d-flex">
            <input
              type="text"
              className="inputFormBasic input"
              placeholder="Phone"
            />
            <input
              type="text"
              className="inputFormBasic input-data"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="inputFormBasic"
            placeholder="Departamen"
          />
          <textarea
            className="inputFormBasic textarea"
            placeholder="Mensajse"
          ></textarea>
          <button className="btnStandar btn">I’M IN</button>
          <p className="im-in">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
      <div className="sixCard">
        <Image
          src="/assets/img/Pic6.png"
          alt="backgroun"
          width={1000}
          height={600}
          className="join"
        />
        <div className="div-text">
          <h1 className="h1">Lorem ipsum</h1>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button className="btnStandar btn-two">VIEW ALL</button>
        </div>
      </div>
      <div className="sevenCard">
        <h1 className="title">Lorem ipsum</h1>
        <div className="div-pci">
          <Image
            src="/assets/img/Pic7.png"
            alt="pci"
            width={300}
            height={400}
            className="pci"
          />
          <Image
            src="/assets/img/Pic8.png"
            alt="pci"
            width={300}
            height={400}
            className="pci"
          />
          <Image
            src="/assets/img/Pic9.png"
            alt="pci"
            width={300}
            height={400}
            className="pci"
          />
        </div>
        <div className="div-icon">
          <i className="bi bi-circle-fill icon-color"></i>
          <i className="bi bi-circle icon-color"></i>
          <i className="bi bi-circle icon-color"></i>
        </div>
        <button className="btnStandar btn-title">VIEW ALL</button>
      </div>
    </main>
  );
}

export default IndexPage;
