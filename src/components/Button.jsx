const Button = ({ type, title, icon, variant }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="cursor-pointer bold-16 whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
