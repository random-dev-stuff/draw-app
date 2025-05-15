interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({ type, placeholder, label }: InputProps) => {
  return (
    <div className="p-2">
      {label ? <label htmlFor="input"></label> : null}
      <input
        className="focus:outline-none p-2"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
