import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        margin: "auto",
        zIndex: "10000",
        marginRight:"10px",
        color:"white"
      }}
      onClick={onClick}
    />
  );
}
export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        width: "50px",
        margin: "auto",
        height: "50px",
        zIndex: "10000",
        marginLeft:"15px",
        color:"white"
      }}
      onClick={onClick}
    />
  );
}
