interface PersonProps {
  personObject: {
    first: string;
    last: string;
  };
}

export default function Person(props: PersonProps) {
  console.log("person props", props);
  return (
    <div>
      Thank you for logging in, {props.personObject.first}{" "}
      {props.personObject.last}
    </div>
  );
}
