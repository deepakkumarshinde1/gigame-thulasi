function Input({ remove, number = "Value Not Set", inc, index }) {
  return (
    <>
      <section className="my-4 flex flex-col items-center">
        Input {number}
        <section className="">
          <button
            onClick={() => inc(index)}
            className="mx-4 bg-green-800 p-2 text-white active:bg-green-600"
          >
            INC
          </button>
          <button
            onClick={() => remove(index)}
            className="bg-red-500 p-2 text-white active:bg-red-400"
          >
            Remove
          </button>
        </section>
      </section>
    </>
  );
}

// 16.8 => Hooks
// class Input extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <>Hello</>;
//   }
// }

export default Input;

// only one parent element
// class => className
// for => htmlFor
// inline styles => {{}}
// camelCase => backgroundColor
// Click Event => onClick
// javascript => {}
// <></>
