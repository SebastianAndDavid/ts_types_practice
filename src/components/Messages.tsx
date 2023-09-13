interface MessageProps {
  message: string;
}
export default function Messages(props: MessageProps) {
  return <div>{props.message}</div>;
}
