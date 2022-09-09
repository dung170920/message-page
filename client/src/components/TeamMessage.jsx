import React from "react";
import { MessageTeam, useMessageContext } from "stream-chat-react";

const TeamMessage = (messageProps) => {
  const { handleOpenThread, message } = useMessageContext();

  return (
    <MessageTeam
      {...messageProps}
      message={message}
      handleOpenThread={handleOpenThread}
    />
  );
};

export default TeamMessage;
