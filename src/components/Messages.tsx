interface MessageProps {
  message: string;
  count: number;
}
export default function Messages(props: MessageProps) {
  return (
    <div>
      Hello. You have {props.count} messages. Your first message says -
      {props.message}
    </div>
  );
}
