const Header = ({ textColor, headerColor, title }) => {
  return (
    <div
      className={`${headerColor} flex-col justify-center md:flex items-center h-12 pl-4 rounded-t-xl uppercase text-sm `}
    >
      <div className={` rounded-xl pl-2 pr-2 text-xl  ${textColor}`}>
        {title}
      </div>
    </div>
  );
};
export default Header;