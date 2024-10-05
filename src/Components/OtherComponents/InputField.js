const InputField = (props) => {
  const Component = props.textarea ? "textarea" : "input";
  return (
    <div className="input-field">
      <Component
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        cols="30"
        rows="10"
      />
      <span className="focus"></span>
    </div>
  );
};
export default InputField;
