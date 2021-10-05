import { useState } from 'react';
import { SideBarMenuItem, SideBarMenuCard } from '../types/types';
import { classesNames } from '../util/clases';
import {VscMenu} from 'react-icons/vsc';
import { SideBarMenuCardView } from './SideBarMenuCardView';
import { SideBarMenuItemView } from './SideBarMenuItemView';

import './SideBarMenu.scss';

interface SideBarMenuProps{
  items: SideBarMenuItem[];
  card: SideBarMenuCard
}


export const SideBarMenu = ({items,card}: SideBarMenuProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div 
      className={classesNames('SideBarMenu ',isOpen?'expanded':'collapsed')}>
      
      <div className="menuButton">
        <button
          className="hamburgerButton"
          onClick={handleClick}
          >
          <VscMenu />
        </button>
      </div>
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      
      {
        items.map((item)=>{
          return (
            <SideBarMenuItemView 
              key={item.id}
              item={item}
              isOpen={isOpen}
            />
          )
        })
      }

    </div>
  )
}
