interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({ type, placeholder, label }: InputProps) => {
  return (
    <div>
      {label ? <label htmlFor="input"></label> : null}
      <input
        className="focus:outline-none p-2 bg-blue-500"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
