
interface Props {
  width?: number;
}

export default function IndegoLogo({ width } : Props) {
  return (
    <div className="flex flex-row w-min">
      <div className="pb-6 px-1 font-bold text-6xl text-primary">
        Inde
      </div>
      <div className="pb-6 px-1 font-bold text-6xl text-secondary bg-primary">
        go
      </div>
    </div>
  );
}

