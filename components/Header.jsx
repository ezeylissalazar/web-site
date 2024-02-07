export default function Header() {
  return (
    <header>
      <div>
        <span className="isLive">
          Live &nbsp;&nbsp;<i className="bi bi-broadcast-pin"></i>{" "}
        </span>
        <span> Lorem ipsu dolor sit amet </span>
        <span className="isJoin">
          {" "}
          Join Now &nbsp;&nbsp;<i className="bi bi-play-circle-fill"></i>
        </span>
      </div>
    </header>
  );
}
