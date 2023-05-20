
interface Props {
  children?: JSX.Element[];
}

export default function Page({ children } : Props) {
  return (
    <div className="h-screen w-screen bg-slate-400 flex flex-col">
      {children}
    </div>
  );
}
