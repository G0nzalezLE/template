import { SideBarMenuCard } from "../types/types"
import { classesNames } from "../util/clases";
import './SideBarMenuCardView.scss';

interface SideBarMenuCardViewProps{
  card:SideBarMenuCard;
  isOpen:boolean
}

export const SideBarMenuCardView = ({ card,isOpen }: SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
      <img  
        className="profile" 
        src={card.photoUrl} 
        alt={card.displayName}
        width="100%"/>
      <div className={classesNames('profileInfo ', isOpen ? '' : 'collapsed' )}>
        <div className="name">{card.displayName}</div>
        <div className="name">{card.title}</div>
        <div className="name"><a href={card.url}>ir al perfil</a></div>
      </div>
    </div>
  )
}
