import React, {useEffect, useState} from 'react';
import VkIcon from "@/shared/components/icons/VkIcon/VkIcon";
import TgIcon from "@/shared/components/icons/TgIcon/TgIcon";
import MenuPaths from "@/feature/MenuPaths/MenuPaths";
import Collapsed from "@/shared/components/Collapsed/Collapsed";

type HeaderPathsProps = {};

const IconPaths = ({}: HeaderPathsProps) => {
    return (
        <>
            <Collapsed edge={1024} collapsedSlot={<MenuPaths />}/>
            <li><a href="https://vk.com/okubyonashonen" target="_blank"><VkIcon/></a></li>
            <li><a href="https://t.me/chatdusoleilsage" target="_blank"><TgIcon/></a></li>
        </>
    );
};

export default IconPaths;
