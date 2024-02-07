import Image from "next/image";

export default function Header() {
  return (
    <nav>
         <Image
            src="/assets/img/Prb_Header.png"
            alt="prb_header"
            width={1000}
            height={600}
            className="Navbackground"
          />
     
      <div className="contentNav">
        <div className="headerNav">
          <Image
            src="/assets/img/icongrab.png"
            alt="grab"
            width={180}
            height={120}
            className="iconHeadernNav"
          />
          <div className="contentNavBody">
            <div className="routeNav">
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
            </div>
            <div className="bodyNav">
              <h1 className="bodyNavTitle">LOREM IPSUM</h1>
              <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
              <h1 className="bodyNavTitle">LOREM IPSUM</h1>
              <button className="bodyNavButton">WHAT IS NEXT</button>
            </div>
          </div>
        </div>

        <div className="footerNav">
          <div className="footerContenTextNav">
            <p>Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="footerContenTimeNav">
            <div className="blockTime">
              <span>170</span>
              <span className="blockSpan">days</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>13</span>
              <span className="blockSpan">Hour</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>39</span>
              <span className="blockSpan">Minutes</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>29</span>
              <span className="blockSpan">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
