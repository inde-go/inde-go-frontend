
interface Props {
  leftChildren?: JSX.Element;
  rightChildren?: JSX.Element;
  topChildren?: JSX.Element;
  bottomChildren?: JSX.Element;
}

export default function FlexApart({ leftChildren, rightChildren, topChildren, bottomChildren}: Props) {
  return (
    <>
      <div className="grow">
        { leftChildren }
        { topChildren }
      </div>
      <div>
        { rightChildren }
        { bottomChildren }
      </div> 
    </>
  );
}