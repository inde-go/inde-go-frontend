
interface Props {
  height?: number;
}

export default function EmptySpace({ height=4 }: Props) {
  return(
    <div className={"h-" + height}/>
  );
}