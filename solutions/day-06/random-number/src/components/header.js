import "../styles/header.css";
export const Header = (props) => {
  const buttons = [
    { name: "number generator" },
    { name: "color randomizer" },
    { name: "world populations" },
  ];
  return (
    <header style={(props.theme === 'light')? {backgroundColor: "#fff"} : {backgroundColor: "#484C65"}}>
        <div>
      {buttons.map((controller) => (
        <button
          id={controller.name}
          key={controller.name}
          onClick={(event) => {
            buttons.forEach((el) => document.getElementById(el.name).classList.remove("active"))
            if (event.currentTarget.className !== 'active') {
              event.target.classList.add("active");
              props.setHandlerMenu(controller.name);
            } else {
              event.target.classList.remove("active");
            }
          }}
          
        >
          {" "}
          {controller.name}{" "}
          
        </button>
      ))}
      <button onClick={() => (props.theme === 'light')? props.changeTheme('black') : props.changeTheme('light')}>{(props.theme === 'light')? "🌕" : "🔆"}</button>
      </div>
    </header>
  );
};
export default Header;

