const InputField = (props) => {
  const Component = props.textarea ? "textarea" : "input";
  return (
    <div className="input-field">
      <Component
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        cols={props.textarea ? "30" : undefined}
        rows={props.textarea ? "10" : undefined}
        onChange={props.onChange}
        value={props.value}
      />
      <span className="focus"></span>
    </div>
  );
};

export default InputField;
