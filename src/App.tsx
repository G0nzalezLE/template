import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcAdvertising} from 'react-icons/fc';


import profileImage from './assets/sosa.jpg';
export const App = () => {

  const items:SideBarMenuItem[]=[
    {
      id:'1',
      label:'fghjghjk',
      icon: FcAdvertising,
      url:'/'
    },
    {
      id: '1',
      label: 'fghjghjk',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '1',
      label: 'fghjghjk',
      icon: FcAdvertising,
      url: '/'
    }
  ];

  const card:SideBarMenuCard = {
    id:'card01',
    displayName:'luis enriue',
    title:'Development',
    photoUrl: profileImage,
    url:''
  }

  return (
    <div>

      <SideBarMenu items={items} card={card}/>
      
    </div>
  )
}
