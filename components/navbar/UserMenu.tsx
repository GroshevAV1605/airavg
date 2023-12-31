"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps{
  currentUser: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airavg your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:px-2 md:py-1 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => {}}/>
                <MenuItem label="My favorites" onClick={() => {}}/>
                <MenuItem label="My reservations" onClick={() => {}}/>
                <MenuItem label="My properties" onClick={() => {}}/>
                <MenuItem label="Airavg my home" onClick={() => {}}/>
                <hr/>
                <MenuItem label="Logout" onClick={() => signOut()}/>

              </>
            ):(
              <>
                <MenuItem label="Login" onClick={() => {loginModal.onOpen()}} />
                <MenuItem
                  label="Sign up"
                  onClick={() => {
                    registerModal.onOpen();
                  }}
                />
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
