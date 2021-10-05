import { SideBarMenuItem } from "../types/types"
import { classesNames } from '../util/clases';

import './SideBarMenuItemView.scss';

interface SideBarMenuItemViewProps{
  item:SideBarMenuItem;
  isOpen:boolean
}

export const SideBarMenuItemView = ({item,isOpen }: SideBarMenuItemViewProps) => {
  
  return (
    <div className="SideBarMenuItemView">
      <a href={item.url}>
        <div className={classesNames('ItemContent ',isOpen?'':'collapsed')}>
          <div className="icon">
            <item.icon size="32"/>
          </div>
          <span
           className="label"
           >
             {item.label}
          </span>
        </div>
      </a>
      {
        !isOpen? <div className="tooltip">{item.label}</div>:''
      }
    </div>
  )
}
