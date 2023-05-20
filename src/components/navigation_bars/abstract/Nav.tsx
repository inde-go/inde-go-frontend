
interface Props {
  children?: JSX.Element;
  className?: string;
}

export default function Nav({ children, className="bg-slate-800 h-24 flex" }: Props) {
  return (
    <nav className={className}>
      { children }
    </nav>
  );
}
