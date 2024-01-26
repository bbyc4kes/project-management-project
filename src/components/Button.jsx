function Button({ children, ...props }) {
  const classes =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-100 hover:bg-stone-700 hover:text-stone-100";
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
