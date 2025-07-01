'use client';
import ChatSidebar from "@/components/chat/ChatSidebar"
import Image from "next/image";
import ChatInput from "@/components/chat/ChatInput";
export default function Home() {
  
  const isLoading = false;
  const handleSendMessage=async (message: string) => {

}


  return (
   <div className="flex h-screen">
    <ChatSidebar/>
<div className="flex flex-col mt-40 mx-auto">
<div className="flex flex-col items-center gap-2 md:ml-40">
  <div className="flex items-center gap-4 justify-center">
    <div className="h-16 w-16">
      <img src="/images/deepseek-small-logo.svg" alt="deepseek-logo" className="h-full w-full" />
    </div>
    <h2 className="text-2xl font-bold  "> Hi, I'm DeepSeek</h2>
  </div>
    <p className="text-center text-muted-foreground "> How can i help you today</p>
</div>
<div className=" fixed left-0 top-30 right-0 bottom-0 mx-auto flex px-4 justify-center items-center">
<ChatInput onSubmit={ handleSendMessage} isLoading={isLoading}/>
</div>
</div>
    </div>

  );
}
