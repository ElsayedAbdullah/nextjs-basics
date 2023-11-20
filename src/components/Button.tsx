"use client";

interface IProps {
  text: string;
}

const Button = ({ text }: IProps) => {
  return (
    <button
      className="bg-violet-500 text-white p-3 rounded-md mt-3"
      onClick={() => console.log("Clicked")}
    >
      {text}
    </button>
  );
};

export default Button;
