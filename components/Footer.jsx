import Image from "next/image";

export default function Header() {
  return (
    <footer className="footer">
      <p className="p-footer">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <Image
        src="/assets/img/icongrab.png"
        alt="prb_header"
        width={200}
        height={120}
        className="img-footer"
      />
      <p className="p-2">All rights reserved to Lorem Ipsum© 2022</p>
    </footer>
  );
}
