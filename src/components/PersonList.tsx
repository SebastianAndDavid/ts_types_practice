interface jokersArrayProps {
  jokersArray: {
    first: string;
    last: string;
  }[];
}

export default function PersonList(props: jokersArrayProps) {
  console.log("props", props);
  return (
    <div>
      <div>{props.jokersArray[0].first}</div>
    </div>
  );
}
