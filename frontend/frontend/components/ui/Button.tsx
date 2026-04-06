type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const styles = {
    primary: "bg-blue-700 text-white",
    secondary: "border border-blue-700 text-blue-700",
    danger: "bg-red-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`h-12 px-6 rounded-md font-semibold ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
``
