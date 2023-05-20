
interface Props {
  children: JSX.Element[];
}

export default function FlexMiddleCenter({ children }: Props) {
  return(
    <div className="w-min justify-self-center self-center">
      { children }
    </div>
  );
}