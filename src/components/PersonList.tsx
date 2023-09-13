interface jokersArrayProps {
  jokersArray: {
    first: string;
    last: string;
  }[];
}

export default function PersonList(props: jokersArrayProps) {
  console.log("props", props.jokersArray);
  return (
    <div>
      {props.jokersArray.map((joker) => (
        <div>
          Greetings {joker.first} {joker.last}
        </div>
      ))}
    </div>
  );
}
