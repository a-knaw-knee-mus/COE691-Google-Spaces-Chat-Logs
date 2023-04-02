import { useEffect, useState } from "react";
import data from "./assets/messages.json";
import { Icon } from "@iconify/react";

function App() {
    const messages = data.messages;

    return (
        <div className="App">
            <h1 className="font-bold text-center text-3xl mt-4">
                COE691 W2023 Deleted Chat Logs
            </h1>
            <div className="flex flex-col gap-4 p-4">
                {messages.map((message, index) => {
                    return (
                        <div
                            key={index}
                            className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <div className="flex">
                                <h5 className="text-md mr-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {message.creator?.name}
                                </h5>
                                <p className="mt-[3px] text-sm font-light text-gray-500 dark:text-gray-400">
                                    {message?.created_date}
                                    {message?.deleted_date}
                                </p>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {message?.text}
                                {message?.message_state && "message deleted by creator"}
                            </p>
                            <div className="mt-1 flex gap-2">
                                {message.reactions?.map((reaction, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="inline-flex items-center py-1 px-2 text-s text-center text-white bg-gray-300 rounded-lg focus:ring-4 focus:outline-none  dark:bg-slate-600 dark:focus:ring-slate-800"
                                        >
                                            {reaction.emoji.unicode}
                                            <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-gray-200 dark:bg-blue-200 rounded-full">
                                                {reaction.reactor_emails.length}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <a href="https://github.com/a-knaw-knee-mus/COE691-Google-Spaces-Chat-Logs" target="_blank">
                <Icon className="mx-auto mb-2" icon="mdi:github" width={25} />
            </a>
        </div>
    );
}

export default App;
