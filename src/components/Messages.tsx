interface MessageProps {
  message: string;
  count: number;
  isLoggedIn: boolean;
}
export default function Messages(props: MessageProps) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Hello. You have {props.count} messages. Your first message says -
          {props.message}
        </div>
      ) : (
        <div>Please log in to see your messages</div>
      )}
    </div>
  );
}
